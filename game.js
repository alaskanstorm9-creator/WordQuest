const HEROES=[
{id:"pip",name:"Pip Rogue",class:"Rogue",rarity:"Common",icon:"🗡️",ability:"3–4 letter words +20%",min:3,max:4,mult:1.2},
{id:"mira",name:"Mira Mage",class:"Mage",rarity:"Uncommon",icon:"🔮",ability:"5-letter words +35%",min:5,max:5,mult:1.35},
{id:"aurelia",name:"Aurelia",class:"Warrior",rarity:"Rare",icon:"🏹",ability:"7+ letter words +60%",min:7,max:99,mult:1.6},
{id:"cinder",name:"Cinder Mage",class:"Mage",rarity:"Ultra",icon:"🔥",ability:"Q, X or Z words ×2",letters:"QXZ",mult:2}
];
const BOSSES=[
["Moss Goblin","👺","none"],["Forest Boar","🐗","short"],["Briar Witch","🧙","long"],["Cave Ogre","👹","four"],["Stonefang","🐺","short"],
["Bog Troll","🧌","long"],["Rune Knight","🗿","four"],["Hex Crow","🐦‍⬛","disable"],["Hill Giant","🦣","short"],["Iron Troll","👹","four"],
["Wyrmling","🐲","long"],["Grave Mage","🧙‍♂️","disable"],["Mountain Drake","🐉","short"],["Ancient Golem","🗿","four"],["Gravemaw","🐲","long"]
];
const WORDS=new Set(["AN","AS","AT","BE","BY","DO","GO","HE","IF","IN","IS","IT","ME","MY","NO","OF","ON","OR","OX","SO","TO","UP","US","WE","ACE","ACT","AGE","AIR","ANT","APE","ARC","ART","ASH","ASK","BAD","BAG","BAR","BAT","BED","BEE","BIG","BIT","BOG","BOW","BOX","BOY","BUG","CAN","CAP","CAR","CAT","COW","CRY","DAY","DOG","DRY","EAR","EAT","ELF","END","FAR","FIRE","FISH","GAME","GEM","GOLD","HERO","HIT","ICE","INK","JAM","KEY","KING","LAND","LONG","MAGE","MAP","MOON","OGRE","QUEST","RAGE","RUNE","SHIELD","SWORD","TOWER","WORD","WORDS","WORLD","DRAGON","BATTLE","HUNTER","MAGIC","STONE","STORM","QUESTS","ADVENTURE","KINGDOM"]);
const REFRESH_GEM_COST=25;
const ENERGY_CAP=50;
const ENERGY_REFILL_COST=25;
const ENERGY_REFILL_AMOUNT=50;
const ENERGY_REGEN_MS=2*60*1000;
const TIME_BOOST_SECONDS=30;
const TIME_BOOST_GEM_COST=15;
const baseDamage=n=>n<=2?5:n===3?10:n===4?18:n===5?30:n===6?45:n===7?65:90+(n-8)*20;
let state=JSON.parse(localStorage.getItem("wordquest-v01")||"null")||{gems:1200,coins:500,energy:50,stage:1,owned:{pip:{copies:1,level:1},mira:{copies:1,level:1},aurelia:{copies:1,level:1}},team:["pip","mira","aurelia"],codex:[],bestiary:[],pity:0};
if(state.energyCap==null)state.energyCap=ENERGY_CAP;
if(state.lastEnergyTick==null)state.lastEnergyTick=Date.now();
function applyEnergyRegen(){
  const now=Date.now();
  if(state.energy>=ENERGY_CAP){state.lastEnergyTick=now;return 0}
  const elapsed=now-state.lastEnergyTick;
  const gained=Math.floor(elapsed/ENERGY_REGEN_MS);
  if(gained>0){
    const before=state.energy;
    state.energy=Math.min(ENERGY_CAP,state.energy+gained);
    const actual=state.energy-before;
    state.lastEnergyTick=state.energy>=ENERGY_CAP?now:state.lastEnergyTick+(actual*ENERGY_REGEN_MS);
    return actual;
  }
  return 0;
}
applyEnergyRegen();
let fight=null,selected=[];
let timerHandle=null;
const isBossStage=stage=>[5,10,15].includes(stage);
const stageSeconds=stage=>isBossStage(stage)?180:60;
function stopTimer(){if(timerHandle){clearInterval(timerHandle);timerHandle=null}}
function formatTime(sec){let m=Math.floor(sec/60),r=sec%60;return `${m}:${String(r).padStart(2,"0")}`}
function startTimer(){
  stopTimer();
  timerHandle=setInterval(()=>{
    if(!fight)return stopTimer();
    fight.timeLeft=Math.max(0,fight.timeLeft-1);
    const el=$("#timer"); if(el)el.textContent=formatTime(fight.timeLeft);
    if(fight.timeLeft<=0){stopTimer();timeUp()}
  },1000);
}
function timeUp(){
  const name=fight?.name||"Enemy"; fight=null; selected=[];
  $("#view").innerHTML=`<div class="panel"><h2 class="title">TIME'S UP!</h2><div class="boss">⌛</div><h3 class="title">${name} survived the attempt.</h3><p class="title">Try again with the same stage. Story Energy was already spent.</p><div class="row"><button class="primary" id="retry">RETURN TO STAGE</button></div></div>`;
  $("#retry").onclick=battle;
}
const ASCENSION_THRESHOLDS=[1,2,3,5,8];
const ascensionRank=copies=>ASCENSION_THRESHOLDS.filter(n=>copies>=n).length;
const heroMultiplier=(h,w,copies=1)=>{
  let rank=ascensionRank(copies),m=h.mult+(rank*.05);
  if(h.letters&&[...w].some(c=>h.letters.includes(c)))return m;
  if(h.min&&w.length>=h.min&&w.length<=h.max)return m;
  return 1;
};
const $=s=>document.querySelector(s); const save=()=>{localStorage.setItem("wordquest-v01",JSON.stringify(state));hud()};
setInterval(()=>{const gained=applyEnergyRegen();if(gained){save()}else hud()},1000);
function hud(){$("#gems").textContent=state.gems;$("#coins").textContent=state.coins;$("#energy").textContent=state.energy;const cap=$("#energyCap");if(cap)cap.textContent=ENERGY_CAP}
function addTimeBoost(method){
  if(!fight||fight.timeBoostUsed)return alert("The +30 second boost can only be used once per attempt.");
  if(method==="gems"){
    if(state.gems<TIME_BOOST_GEM_COST)return alert("You need 15 Gems for +30 seconds.");
    state.gems-=TIME_BOOST_GEM_COST;
  }else alert("Rewarded ad simulated for this prototype.");
  fight.timeBoostUsed=true;fight.timeLeft+=TIME_BOOST_SECONDS;save();drawFight();
}
function buyEnergy(){
  if(state.energy>=ENERGY_CAP)return alert("Energy must be below 50 before you can buy more.");
  if(state.gems<ENERGY_REFILL_COST)return alert("You need 25 Gems to buy 50 Energy.");
  state.gems-=ENERGY_REFILL_COST;
  state.energy+=ENERGY_REFILL_AMOUNT;
  state.lastEnergyTick=Date.now();
  save();
  alert("+50 Energy! You now have "+state.energy+" Energy.");
}
document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>render(b.dataset.view));const energyBuy=$("#energyBuy");if(energyBuy)energyBuy.onclick=buyEnergy;hud();render("battle");WordQuestDictionary.load().then(n=>console.info(`WordQuest dictionary ready: ${n} words`)).catch(e=>console.warn("Dictionary background load failed",e));
function boss(stage){
  let [name,icon,type]=BOSSES[stage-1];
  const earlyHp=[45,60,80,105,180];
  let hp=stage<=5?earlyHp[stage-1]:Math.round(180*Math.pow(1.22,stage-5));
  return{name,icon,type,max:hp,hp}
}
function traitText(type){return {none:"No special ability.",short:"Stone Hide: 2–3 letter words deal 50% less damage.",long:"Cracked Armor: 6+ letter words deal 35% more damage.",four:"Perfect Four: 4-letter words deal 50% more; 7+ deal 25% less.",disable:"Hex: one letter is disabled this battle."}[type]}
function render(v){if(v==="battle")battle();if(v==="heroes")heroes();if(v==="summon")summon();if(v==="codex")codex()}
function battle(){let b=boss(state.stage);$("#view").innerHTML=`<div class="panel"><h2 class="title">CHAPTER 1 — GREENVALE</h2><p class="title">Stage ${state.stage} / 15 • ${isBossStage(state.stage)?"Boss: 3:00":"Stage: 1:00"}</p><div class="stagegrid">${BOSSES.map((_,i)=>`<button class="${i+1===state.stage?"current":""}" ${i+1>state.stage?"disabled":""} data-stage="${i+1}">${i+1}</button>`).join("")}</div><div class="boss">${b.icon}</div><h2 class="title">${b.name}</h2><div class="traits"><b>Boss Intel</b><br>${traitText(b.type)}</div><div class="row"><button class="primary" id="start">START — ⚡5</button></div></div>`;$("#start").onclick=startFight;document.querySelectorAll("[data-stage]").forEach(x=>x.onclick=()=>{state.stage=+x.dataset.stage;save();battle()})}
function teamClassCount(cls){return state.team.filter(id=>HEROES.find(h=>h.id===id)?.class===cls).length}
function randomBonusTiles(count){let ids=[...Array(16).keys()];for(let i=ids.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[ids[i],ids[j]]=[ids[j],ids[i]]}return new Set(ids.slice(0,count))}
function startFight(){if(state.energy<5)return alert("Not enough Story Energy.");state.energy-=5;save();fight=boss(state.stage);fight.disabled=fight.type==="disable"?"E":"";fight.used=new Set();fight.timeLeft=stageSeconds(state.stage);fight.refreshes=0;fight.streakLetter="";fight.streakCount=0;fight.timeBoostUsed=false;let mageCount=teamClassCount("Mage");fight.mageTimeBonus=mageCount>=4?25:mageCount>=2?10:0;fight.timeLeft+=fight.mageTimeBonus;let rogueCount=teamClassCount("Rogue");fight.rogueBonusCount=rogueCount>=4?6:rogueCount>=2?2:0;fight.rogueBonusTiles=randomBonusTiles(fight.rogueBonusCount);let warriorCount=teamClassCount("Warrior");fight.warriorDamage=warriorCount>=4?10:warriorCount>=2?5:0;let clericCount=teamClassCount("Cleric");fight.clericExtraRerolls=clericCount>=2?1:0;fight.clericGoldBonus=clericCount>=4?.20:0;fight.letters=board();selected=[];drawFight();startTimer()}
function board(){let vowels="AAAAAAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIIIIIOOOOOOOOOOUUUUU",consonants="BBBBCCCDDDDDDFFFFFFFFGGGGGHHHHHHJKLLLLLMMMMNNNNNNNNPPPPQRRRRRRRRRSSSSSSSSTTTTTTTTTVVWWXYYZ";let a=[];for(let i=0;i<6;i++)a.push(vowels[Math.floor(Math.random()*vowels.length)]);for(let i=0;i<10;i++)a.push(consonants[Math.floor(Math.random()*consonants.length)]);for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function drawFight(){if(!fight.letters)fight.letters=board();$("#view").innerHTML=`<div class="panel"><p class="title">STAGE ${state.stage} • ${fight.name} ${isBossStage(state.stage)?"• BOSS BATTLE":""}</p><div class="timeBoost">${fight&&!fight.timeBoostUsed?`<button onclick="addTimeBoost(\'ad\')">▶ AD +30s</button><button onclick="addTimeBoost(\'gems\')">💎 15 +30s</button>`:""}</div><div class="combatTimer">⏱ <span id="timer">${formatTime(fight.timeLeft)}</span></div><div class="synergy">${fight.mageTimeBonus?`🔮 Mage Synergy: +${fight.mageTimeBonus}s`:""}${fight.mageTimeBonus&&fight.rogueBonusCount?" • ":""}${fight.rogueBonusCount?`🗡️ Rogue Synergy: ${fight.rogueBonusCount} ×2 tiles`:""}${fight.warriorDamage?` • ⚔️ Warrior Synergy: +${fight.warriorDamage} damage`:""}${fight.clericExtraRerolls?` • ✨ Cleric Synergy: +1 free reroll${fight.clericGoldBonus?" • +20% Coins":""}`:""}</div><div class="boss">${fight.icon}</div><div class="hp"><div style="width:${Math.max(0,fight.hp/fight.max*100)}%"></div></div><p class="title">${Math.max(0,fight.hp)} / ${fight.max} HP</p><div class="traits">${traitText(fight.type)} ${fight.disabled?`<b>Disabled: ${fight.disabled}</b>`:""}</div><div class="damage" id="damage"></div><div class="streak">🔥 Letter Streak: ${fight.streakCount>1?`${fight.streakLetter} ×${fight.streakCount} • +${(fight.streakCount-1)*10}% damage`:"Start consecutive words with the same letter"}</div><div class="word" id="word"></div><div class="row refreshRow"><button class="gold" id="refresh">🔄 NEW LETTERS — ${fight.refreshes<(1+(fight.clericExtraRerolls||0))?"FREE":"💎"+REFRESH_GEM_COST}</button></div><div class="letters">${fight.letters.map((l,i)=>`<button class="tile ${fight.rogueBonusTiles?.has(i)?"bonusTile":""}" data-i="${i}" ${l===fight.disabled?"disabled":""}>${l}${fight.rogueBonusTiles?.has(i)?`<small>×2</small>`:""}</button>`).join("")}</div><div class="row"><button class="gold" id="clear">CLEAR</button><button class="primary" id="submit">STRIKE</button></div><p class="notice" id="notice">Build words from this board before time runs out.</p></div>`;document.querySelectorAll(".tile").forEach(x=>x.onclick=()=>pick(+x.dataset.i));$("#clear").onclick=()=>{selected=[];syncWord()};$("#refresh").onclick=refreshLetters;$("#submit").onclick=strike}
function pick(i){let p=selected.indexOf(i);p>=0?selected.splice(p,1):selected.push(i);syncWord()}
function syncWord(){let w=selected.map(i=>fight.letters[i]).join("");$("#word").textContent=w;document.querySelectorAll(".tile").forEach((x,i)=>x.classList.toggle("selected",selected.includes(i)))}
function refreshLetters(){
  if(!fight)return;
  if(fight.refreshes>=(1+(fight.clericExtraRerolls||0))){
    if(state.gems<REFRESH_GEM_COST){$("#notice").textContent="Not enough Gems for another letter refresh.";return}
    state.gems-=REFRESH_GEM_COST;
  }
  fight.refreshes++;
  fight.letters=board();
  fight.rogueBonusTiles=randomBonusTiles(fight.rogueBonusCount||0);
  fight.used=new Set();
  fight.streakLetter="";
  fight.streakCount=0;
  selected=[];
  save();
  drawFight();
}
function strike(){let w=selected.map(i=>fight.letters[i]).join("");if(w.length<2){$("#notice").textContent="Words need at least 2 letters.";return}if(fight.used.has(w)){ $("#notice").textContent="That word was already used.";return}if(!WordQuestDictionary.isAllowed(w)){ $("#notice").textContent=`${w} is not an allowed WordQuest word.`;return}fight.used.add(w);if(!state.codex.includes(w))state.codex.push(w);
let first=w[0];
if(fight.streakLetter===first)fight.streakCount=Math.min(5,fight.streakCount+1);
else{fight.streakLetter=first;fight.streakCount=1}
let streakBonus=1+Math.max(0,fight.streakCount-1)*0.10;
let rogueHits=selected.filter(i=>fight.rogueBonusTiles?.has(i)).length;
let rogueBonus=Math.pow(2,rogueHits);
let d=baseDamage(w.length);if(fight.type==="short"&&w.length<=3)d*=.5;if(fight.type==="long"&&w.length>=6)d*=1.35;if(fight.type==="four"){if(w.length===4)d*=1.5;if(w.length>=7)d*=.75}state.team.forEach(id=>{let h=HEROES.find(x=>x.id===id),o=state.owned[id];if(!h||!o)return;d*=heroMultiplier(h,w,o.copies)});d=Math.round(d*streakBonus*rogueBonus)+(fight.warriorDamage||0);fight.hp-=d;$("#damage").textContent=`⚔ ${w} — ${d} DAMAGE!${fight.streakCount>1?` 🔥 ${first} STREAK ×${fight.streakCount} (+${(fight.streakCount-1)*10}%)`:""}`;selected=[];save();if(fight.hp<=0)return victory();drawFight()}
function victory(){stopTimer();let reward=40+state.stage*10;if(fight.clericGoldBonus)reward=Math.round(reward*(1+fight.clericGoldBonus));state.coins+=reward;state.bestiary=[...new Set([...state.bestiary,fight.name])];let completed=state.stage;
let energyReward=[5,10,15].includes(completed)?25:0;
if(energyReward&&state.energy<ENERGY_CAP){state.energy+=energyReward;state.lastEnergyTick=Date.now()}
else if(energyReward)energyReward=0;
if(state.stage<15)state.stage++;else{state.gems+=250}save();$("#view").innerHTML=`<div class="panel"><h2 class="title">VICTORY!</h2><div class="boss">🏆</div><h3 class="title">${fight.name} defeated</h3><p class="title">🪙 +${reward} Coins</p>${energyReward?`<p class="title">⚡ +${energyReward} Energy milestone reward!</p>`:""}${completed===15?'<p class="title">💎 +250 CHAPTER COMPLETE!</p>':""}<div class="row"><button class="primary" id="continue">CONTINUE</button></div></div>`;$("#continue").onclick=battle}
function heroes(){$("#view").innerHTML=`<div class="panel"><h2 class="title">HEROES</h2><div class="heroes">${HEROES.map(h=>{let o=state.owned[h.id];return `<div class="card"><div style="font-size:44px">${h.icon}</div><b>${h.name}</b><div class="rarity">${h.rarity}</div><p>${h.ability}</p>${o?`<p>Lv. ${o.level} • Copies ${o.copies} • Ascension ★${ascensionRank(o.copies)}</p><p>Next duplicate milestones: ${ASCENSION_THRESHOLDS.join(" / ")}</p><button class="gold" data-up="${h.id}">UPGRADE — 🪙100</button>`:"<b>LOCKED</b>"}</div>`}).join("")}</div></div>`;document.querySelectorAll("[data-up]").forEach(b=>b.onclick=()=>upgrade(b.dataset.up))}
function upgrade(id){if(state.coins<100)return alert("Need 100 Coins.");state.coins-=100;state.owned[id].level++;save();heroes()}
function summon(){$("#view").innerHTML=`<div class="panel"><h2 class="title">HERO SUMMON</h2><div class="boss">✨</div><p class="title">Summon heroes. Duplicate heroes increase their copy count for Ascension.</p><div class="row"><button class="gold" data-pull="1">SUMMON ×1<br>💎100</button><button class="primary" data-pull="10">SUMMON ×10<br>💎1,000</button></div><p class="notice" id="pullResult"></p><p class="title">Ultra pity counter: ${state.pity}/50</p></div>`;document.querySelectorAll("[data-pull]").forEach(b=>b.onclick=()=>pull(+b.dataset.pull))}
function pull(n){let cost=n*100;if(state.gems<cost)return alert("Not enough Gems.");state.gems-=cost;let out=[];for(let i=0;i<n;i++){state.pity++;let r=Math.random(),h;if(state.pity>=50||r<.03){h=HEROES[3];state.pity=0}else if(r<.18)h=HEROES[2];else if(r<.48)h=HEROES[1];else h=HEROES[0];state.owned[h.id]??={copies:0,level:1};state.owned[h.id].copies++;out.push(h.icon+" "+h.name)}save();summon();$("#pullResult").textContent=out.join(" • ")}
function codex(){$("#view").innerHTML=`<div class="panel"><h2 class="title">WORD CODEX</h2><p>Discovered: <b>${state.codex.length}</b></p><div>${state.codex.sort().map(w=>`<span class="codexword">${w}</span>`).join("")||"Find valid words in battle to fill your Codex."}</div><hr><h2 class="title">BESTIARY</h2><p>${state.bestiary.join(" • ")||"Defeat bosses to record them here."}</p></div>`}
