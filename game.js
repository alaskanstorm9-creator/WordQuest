const HEROES=[
{id:"pip",name:"Pip Shadowstep",class:"Rogue",rarity:"Common",icon:"🐈‍⬛",ability:"3–5 letter words +5%",min:3,max:4,min:3,max:5,mult:1.05,theme:"Hermes",lore:"A streetwise courier from Greenvale who stole a rune-key meant for the gods and became the first mortal drawn into the War of Two Pantheons."},
{id:"skadi",name:"Skadi Runeweaver",class:"Mage",rarity:"Common",icon:"❄️",ability:"3–4 letter words +5%",min:4,max:4,min:3,max:4,mult:1.05,theme:"Skadi",lore:"A winter seer who reads prophecy in frost. She believes the broken World-Rune can prevent a second divine war."},
{id:"leander",name:"Leander Ashshield",class:"Warrior",rarity:"Common",icon:"🛡️",ability:"2–4 letter words +5%",min:3,max:3,min:2,max:4,mult:1.05,theme:"Ares",lore:"A disciplined hoplite descended from a disgraced war cult. Leander fights to prove courage need not become cruelty."},
{id:"lyra",name:"Lyra Dawnkeeper",class:"Cleric",rarity:"Common",icon:"☀️",ability:"4+ letter words +10%",min:5,max:5,min:4,max:99,mult:1.1,theme:"Apollo",lore:"Keeper of a sun-temple whose oracle heard both the Greek Fates and Norse Norns speak the same impossible prophecy."},
{id:"fen",name:"Fen Quickknife",class:"Rogue",rarity:"Common",icon:"🗡️",ability:"Words with S +10%",letters:"S",mult:1.1,theme:"Loki",lore:"A charming thief who claims Loki taught him three lies and one truth. No one agrees which lesson WordQuest is."},
{id:"runa",name:"Runa Ravensight",class:"Mage",rarity:"Common",icon:"🐦‍⬛",ability:"5+ letter words +10%",min:6,max:99,min:5,max:99,mult:1.1,theme:"Odin",lore:"A young rune-reader followed by two suspicious ravens. Their visions always point toward the vanished bridge between realms."},
{id:"brun",name:"Brun Ironoak",class:"Warrior",rarity:"Common",icon:"🪓",ability:"3–5 letter words +5%",min:4,max:4,min:3,max:5,mult:1.05,theme:"Thor",lore:"A village smith who forged his hammer from a lightning-split oak and joined Lyra after monsters descended on Greenvale."},
{id:"nyx",name:"Nyx Alleyshade",class:"Rogue",rarity:"Common",icon:"🌙",ability:"Words with X +10%",letters:"X",mult:1.1,theme:"Nyx",lore:"A night scout from the undercity who can cross guarded streets without casting a shadow."},
{id:"eir",name:"Eir Kindhand",class:"Cleric",rarity:"Common",icon:"🌿",ability:"4+ letter words +10%",min:4,max:5,min:4,max:99,mult:1.1,theme:"Eir",lore:"A battlefield healer who follows the old northern mercy rites and refuses to let the gods spend mortal lives cheaply."},
{id:"orren",name:"Orren Sparkstaff",class:"Mage",rarity:"Common",icon:"✨",ability:"Words with R +10%",letters:"R",mult:1.1,theme:"Hermes",lore:"An apprentice who discovered that spoken letters can awaken dormant divine runes."},

{id:"mira",name:"Mira Moonscribe",class:"Mage",rarity:"Uncommon",icon:"🔮",ability:"4–6 letter words +15%",min:5,max:5,min:4,max:6,mult:1.15,theme:"Hecate",lore:"A moonlit scholar who maps crossroads between Midgard and the Greek underworld. She recognizes Pip's stolen rune-key."},
{id:"sylvi",name:"Sylvi Foxcloak",class:"Rogue",rarity:"Uncommon",icon:"🦊",ability:"2–4 letter words +10%",min:3,max:3,min:2,max:4,mult:1.1,theme:"Loki",lore:"A northern infiltrator whose enchanted cloak was sewn from threads won in a wager with a trickster spirit."},
{id:"dorian",name:"Dorian Spearborn",class:"Warrior",rarity:"Uncommon",icon:"🔱",ability:"5+ letter words +20%",min:6,max:6,min:5,max:99,mult:1.2,theme:"Athena",lore:"A tactician from an island polis who studies battles as puzzles and suspects the gods are being manipulated."},
{id:"astrid",name:"Astrid Valkyr",class:"Cleric",rarity:"Uncommon",icon:"🪽",ability:"6+ letter words +25%",min:7,max:99,min:6,max:99,mult:1.25,theme:"Valkyrie",lore:"A mortal shrine-warden who sees the paths of fallen heroes but has begun finding souls that belong to neither pantheon."},
{id:"cassia",name:"Cassia Threadcutter",class:"Rogue",rarity:"Uncommon",icon:"✂️",ability:"3–5 letter words +10%",min:4,max:4,min:3,max:5,mult:1.1,theme:"Fates",lore:"Once an acolyte of the Fates, Cassia severed a prophecy-thread that condemned her sister and has been hunted ever since."},
{id:"ulf",name:"Ulf Stormson",class:"Warrior",rarity:"Uncommon",icon:"⚡",ability:"Words with T +15%",letters:"T",mult:1.15,theme:"Thor",lore:"A sailor who survived a thunderbolt at sea and now hears a distant hammer whenever the World-Rune fractures."},
{id:"thalia",name:"Thalia Hearthsong",class:"Cleric",rarity:"Uncommon",icon:"🔥",ability:"4–6 letter words +20%",min:5,max:6,min:4,max:6,mult:1.2,theme:"Hestia",lore:"Guardian of the Last Hearth, a neutral sanctuary where northern jarls and southern kings once swore peace."},
{id:"kestrel",name:"Kestrel Runefoot",class:"Rogue",rarity:"Uncommon",icon:"🪶",ability:"Words with K +25%",letters:"K",mult:1.25,theme:"Hermes",lore:"A messenger who can outrun enchanted wolves and carries fragments of correspondence between Odin and Athena."},
{id:"bjorn",name:"Bjorn Bronzeheart",class:"Warrior",rarity:"Uncommon",icon:"🐻",ability:"2–4 letter words +10%",min:2,max:3,min:2,max:4,mult:1.1,theme:"Berserker",lore:"A gentle giant cursed with battle-fury by a broken bear rune. Eir is helping him master it rather than fear it."},
{id:"calista",name:"Calista Starwise",class:"Mage",rarity:"Uncommon",icon:"🌟",ability:"6+ letter words +25%",min:7,max:99,min:6,max:99,mult:1.25,theme:"Athena",lore:"An astronomer whose charts show Yggdrasil's branches crossing the constellations of Olympus."},

{id:"aurelia",name:"Aurelia Sunblade",class:"Warrior",rarity:"Rare",icon:"🏹",ability:"6+ letter words +50%",min:7,max:99,min:8,max:99,mult:1.5,theme:"Apollo",lore:"Champion of the Sun Court and Lyra's estranged sister. She hunts the creature that extinguished their temple's sacred flame."},
{id:"sigurd",name:"Sigurd Wyrmbane",class:"Warrior",rarity:"Rare",icon:"🐉",ability:"6+ letter words +45%",min:6,max:99,min:7,max:99,mult:1.45,theme:"Sigurd",lore:"A dragon hunter carrying a blade reforged from the shards of a legendary northern sword."},
{id:"helena",name:"Helena Owlseer",class:"Mage",rarity:"Rare",icon:"🦉",ability:"Exactly 4 letters +30%",min:4,max:4,min:4,max:4,mult:1.3,theme:"Athena",lore:"Athena's former archivist, exiled after discovering a hidden record describing Ragnarok and the Titanomachy as one repeating event."},
{id:"freya",name:"Freya Amberveil",class:"Mage",rarity:"Rare",icon:"💎",ability:"Words with F +40%",letters:"F",mult:1.4,theme:"Freyja",lore:"A seidr adept seeking the missing half of the Brisingamen Star, an artifact said to mend broken realms."},
{id:"thesea",name:"Thesea Labyrinth",class:"Rogue",rarity:"Common",icon:"🧵",ability:"4+ letter words +10%",min:5,max:5,min:4,max:99,mult:1.1,theme:"Theseus/Ariadne",lore:"A maze-runner carrying an endless golden thread. She believes every corrupted dungeon is part of one impossible labyrinth."},
{id:"ivar",name:"Ivar Wolfmark",class:"Rogue",rarity:"Common",icon:"🐺",ability:"Words with I +10%",letters:"I",mult:1.1,theme:"Fenrir",lore:"Marked by Fenrir's rune at birth, Ivar hunts the cult trying to free the great wolf from its final chain."},
{id:"selene",name:"Selene Silverwell",class:"Cleric",rarity:"Rare",icon:"🌙",ability:"Exactly 6 letters +45%",min:6,max:6,min:6,max:6,mult:1.45,theme:"Selene",lore:"A moon priestess whose healing water reflects memories from both the past and possible futures."},
{id:"tyrra",name:"Tyrra Oathkeeper",class:"Cleric",rarity:"Rare",icon:"⚖️",ability:"Exactly 5 letters +35%",min:4,max:6,min:5,max:5,mult:1.35,theme:"Tyr",lore:"Judge of sacred oaths. Tyrra lost a hand sealing a breach and now bears a runic gauntlet forged by Brun."},
{id:"orphic",name:"Orphic Echo",class:"Cleric",rarity:"Uncommon",icon:"🎵",ability:"6+ letter words +25%",min:7,max:99,min:6,max:99,mult:1.25,theme:"Orpheus",lore:"A wandering singer whose hymns can call memories back from the dead, though each song draws Hades' attention."},
{id:"vidar",name:"Vidar Silent Rune",class:"Mage",rarity:"Uncommon",icon:"👢",ability:"Words with V +25%",letters:"V",mult:1.25,theme:"Vidar",lore:"A taciturn rune-mage who studies the silence between spoken words, where he claims the World Eater is hiding."},

{id:"cinder",name:"Cinder Hecaflame",class:"Mage",rarity:"Ultra",icon:"🔥",ability:"5+ letter words +60%",min:5,max:99,mult:1.6,theme:"Hecate",lore:"Bearer of three witchfires and Mira's vanished mentor. She returned from the crossroads warning that an ancient language is consuming reality."},
{id:"odin",name:"Odr Rune-King",class:"Mage",rarity:"Rare",icon:"👁️",ability:"6+ letter words +55%",min:7,max:99,min:8,max:99,mult:1.55,theme:"Odin",lore:"A one-eyed wanderer who traded a crown for forbidden runes. Whether he is a king, god, or impostor remains deliberately unclear."},
{id:"atalanta",name:"Atalanta Windstep",class:"Rogue",rarity:"Rare",icon:"🏹",ability:"Exactly 6 letters +40%",min:5,max:6,min:6,max:6,mult:1.4,theme:"Atalanta",lore:"The fastest hunter of the southern kingdoms. She races Kestrel for sport and monsters for keeps."},
{id:"loki",name:"Lokir Manyfaces",class:"Rogue",rarity:"Ultra",icon:"🎭",ability:"3–5 letter words +45%",min:3,max:5,mult:1.45,theme:"Loki",lore:"A masked shapeshifter who insists he is not Loki. Unfortunately, three different gods insist that he is."},
{id:"ajax",name:"Ajax Thunderwall",class:"Warrior",rarity:"Rare",icon:"🛡️",ability:"Exactly 5 letters +35%",min:4,max:5,min:5,max:5,mult:1.35,theme:"Ajax",lore:"An undefeated shield-bearer who stood alone when a gate between Olympus and Jotunheim opened over his city."},
{id:"sigrun",name:"Sigrun Stormwing",class:"Warrior",rarity:"Ultra",icon:"⚔️",ability:"4+ letter words +50%",min:6,max:99,min:4,max:99,mult:1.5,theme:"Valkyrie",lore:"Commander of a lost valkyrie host searching for the warrior souls stolen from Valhalla."},
{id:"herak",name:"Herak Lionborn",class:"Warrior",rarity:"Uncommon",icon:"🦁",ability:"3–5 letter words +10%",min:3,max:4,min:3,max:5,mult:1.1,theme:"Heracles",lore:"A wandering champion completing twelve new labors after learning his famous trials were only preparation."},
{id:"eirene",name:"Eirene Worldmender",class:"Cleric",rarity:"Ultra",icon:"🕊️",ability:"Words with E +50%",min:6,max:99,letters:"E",mult:1.5,theme:"Eir/Panacea",lore:"A healer trained in both northern rune-medicine and the lost remedies of Asclepius. She believes the realms themselves can be healed."},
{id:"valka",name:"Valka Gjallarhorn",class:"Cleric",rarity:"Rare",icon:"📯",ability:"Exactly 5 letters +40%",min:5,max:5,min:5,max:5,mult:1.4,theme:"Heimdall",lore:"Guardian of a shattered horn whose notes reveal invisible bridges between worlds."},
{id:"themis",name:"Themis Runejudge",class:"Cleric",rarity:"Rare",icon:"⚖️",ability:"6+ letter words +55%",min:7,max:99,min:8,max:99,mult:1.55,theme:"Themis/Norns",lore:"An oracle who discovered the Norns and Fates are recording the same destiny in different alphabets."}
];
const BOSSES=[
["Moss Goblin","👺","none"],["Forest Boar","🐗","none"],["Briar Witch","🧙","none"],["Cave Ogre","👹","none"],["Stonefang","🐺","none"],
["Bog Troll","🧌","none"],["Rune Knight","🗿","none"],["Hex Crow","🐦‍⬛","none"],["Hill Giant","🦣","none"],["Iron Troll","👹","none"],
["Wyrmling","🐲","none"],["Grave Mage","🧙‍♂️","none"],["Mountain Drake","🐉","none"],["Ancient Golem","🗿","none"],["Gravemaw","🐲","none"]
];
const WORDS=new Set(["AN","AS","AT","BE","BY","DO","GO","HE","IF","IN","IS","IT","ME","MY","NO","OF","ON","OR","OX","SO","TO","UP","US","WE","ACE","ACT","AGE","AIR","ANT","APE","ARC","ART","ASH","ASK","BAD","BAG","BAR","BAT","BED","BEE","BIG","BIT","BOG","BOW","BOX","BOY","BUG","CAN","CAP","CAR","CAT","COW","CRY","DAY","DOG","DRY","EAR","EAT","ELF","END","FAR","FIRE","FISH","GAME","GEM","GOLD","HERO","HIT","ICE","INK","JAM","KEY","KING","LAND","LONG","MAGE","MAP","MOON","OGRE","QUEST","RAGE","RUNE","SHIELD","SWORD","TOWER","WORD","WORDS","WORLD","DRAGON","BATTLE","HUNTER","MAGIC","STONE","STORM","QUESTS","ADVENTURE","KINGDOM"]);
const REFRESH_GEM_COST=25;
const ENERGY_CAP=50;
const ENERGY_REFILL_COST=25;
const ENERGY_REFILL_AMOUNT=50;
const ENERGY_REGEN_MS=2*60*1000;
const TIME_BOOST_SECONDS=30;
const TIME_BOOST_GEM_COST=15;
const baseDamage=n=>n<=2?5:n===3?10:n===4?18:n===5?30:n===6?45:n===7?75:n===8?120:n===9?180:n===10?250:250+(n-10)*80;
let state=JSON.parse(localStorage.getItem("wordquest-v01")||"null")||{gems:1200,coins:500,energy:50,stage:1,owned:{pip:{copies:1,level:1},mira:{copies:1,level:1},aurelia:{copies:1,level:1}},team:["pip","mira","aurelia"],codex:[],bestiary:[],pity:0};
if(state.energyCap==null)state.energyCap=ENERGY_CAP;
if(state.rarePity==null)state.rarePity=0;
if(state.summonAnimation==null)state.summonAnimation="full";
if(state.tutorialComplete==null)state.tutorialComplete=false;
state.redeemedCodes=state.redeemedCodes||[];
const ACCOUNT_KEY="wordquest-account-v01";
let account=JSON.parse(localStorage.getItem(ACCOUNT_KEY)||"null");
function accountId(){return "WQ-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).slice(2,7).toUpperCase()}
function saveAccount(){localStorage.setItem(ACCOUNT_KEY,JSON.stringify(account))}
function createGuest(){
 account={type:"guest",playerId:accountId(),server:1,createdAt:Date.now()};
 saveAccount();serverSelect();
}
function createEmail(){
 const email=document.querySelector("#accountEmail")?.value.trim();
 if(!email||!email.includes("@"))return alert("Enter a valid email address for this prototype.");
 account={type:"email-alpha",email,playerId:accountId(),server:1,createdAt:Date.now()};
 saveAccount();serverSelect();
}
function opening(){
 stopTimer();
 document.querySelector("#app").classList.add("openingMode");
 document.querySelector("#view").innerHTML=`<div class="loginScreen">
  <div class="loginShade"></div><section class="loginBrand"><span>AETHERA AWAITS</span><h2>WORDQUEST</h2><b>WORDS SHAPE WORLDS</b><p>Ancient World Anchors are failing. Gather the Concord and restore the Lifeword.</p></section>
  <section class="loginPanel"><h3>ENTER AETHERA</h3><p class="loginLead">Choose how you want to begin.</p>
   <button class="primary loginChoice" id="guestStart">PLAY AS GUEST</button>
   <p class="accountWarning"><b>Guest progress is stored on this browser/device.</b><br>Lost or cleared local data may not be recoverable. A Player ID will be assigned.</p>
   <div class="loginDivider"><span>OR</span></div>
   <label class="emailLabel">EMAIL ACCOUNT <small>ALPHA PREVIEW</small></label>
   <input id="accountEmail" class="loginInput" type="email" placeholder="adventurer@example.com">
   <button class="gold loginChoice" id="emailStart">CONTINUE WITH EMAIL</button>
   <p class="accountWarning">Email binding is represented in this alpha. Cloud recovery will require the future account backend.</p>
   <button class="futureLogin" disabled>G&nbsp; CONTINUE WITH GOOGLE <span>COMING LATER</span></button>
  </section></div>`;
 document.querySelector("#guestStart").onclick=createGuest;
 document.querySelector("#emailStart").onclick=createEmail;
}
function serverSelect(){
 document.querySelector("#app").classList.add("openingMode");
 const id=account?.playerId||"";
 document.querySelector("#view").innerHTML=`<div class="serverScreen"><section class="serverCard">
  <span class="eyebrow">SELECT SERVER</span><h2>WELCOME TO AETHERA</h2>
  <p class="playerId">PLAYER ID <b>${id}</b></p>
  <div class="serverRow selected"><div><strong>SERVER 1</strong><small>Launch Realm</small></div><div class="serverStatus"><b>● ONLINE</b><small>Fresh Realm</small></div></div>
  <p class="serverNote">Future servers will open as the WordQuest population grows. New realms begin with their own 7-day Fresh Realm event.</p>
  <button class="primary enterWorld" id="enterWorld">ENTER WORLD</button>
  <button class="switchAccount" id="switchAccount">SWITCH ACCOUNT</button>
 </section></div>`;
 document.querySelector("#enterWorld").onclick=()=>{account.server=1;saveAccount();document.querySelector("#app").classList.remove("openingMode");render("home")};
 document.querySelector("#switchAccount").onclick=()=>{localStorage.removeItem(ACCOUNT_KEY);account=null;opening()};
}
state.owned=state.owned||{};
if(!state.owned.lyra)state.owned.lyra={copies:1,level:1};
if(Array.isArray(state.team)&&state.team.length===3&&state.team.includes("pip")&&state.team.includes("mira")&&state.team.includes("aurelia"))state.team.push("lyra");
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
document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>render(b.dataset.view));const energyBuy=$("#energyBuy");if(energyBuy)energyBuy.onclick=buyEnergy;hud();if(account)serverSelect();else opening();WordQuestDictionary.load().then(n=>console.info(`WordQuest dictionary ready: ${n} words`)).catch(e=>console.warn("Dictionary background load failed",e));
function chapterOneLengthResistance(stage){
 // Stages 1–5 teach the core loop. From Stage 6 onward, only 2–5 letter words can be resisted.
 // Six-plus letter words are intentionally never reduced by this system.
 if(stage<=5)return {};
 if(stage<=7)return {4:0.10};
 if(stage<=9)return {3:0.10,4:0.15};
 if(stage<=11)return {3:0.15,4:0.20,5:0.10};
 if(stage<=13)return {2:0.10,3:0.20,4:0.25,5:0.10};
 return {2:0.15,3:0.25,4:0.30,5:0.15};
}
function boss(stage){
  let [name,icon,type]=BOSSES[stage-1];
  const earlyHp=[45,60,80,105,180];
  let hp=stage<=5?earlyHp[stage-1]:Math.round(180*Math.pow(1.22,stage-5));
  return{name,icon,type,max:hp,hp,lengthResistance:chapterOneLengthResistance(stage)}
}
const BOSS_CURSE_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
function chapterBossDebuff(chapter){
 if(chapter<=1)return {type:"none",letters:[]};
 if(chapter<=3)return {type:"cursedInitials",letters:[BOSS_CURSE_LETTERS[Math.floor(Math.random()*BOSS_CURSE_LETTERS.length)]]};
 if(chapter<=5){
  let a=BOSS_CURSE_LETTERS[Math.floor(Math.random()*BOSS_CURSE_LETTERS.length)],b;
  do{b=BOSS_CURSE_LETTERS[Math.floor(Math.random()*BOSS_CURSE_LETTERS.length)]}while(b===a);
  return {type:"cursedInitials",letters:[a,b]};
 }
 return {type:"none",letters:[]};
}
function lengthResistanceText(resistance={}){
 const parts=Object.entries(resistance).map(([len,amount])=>`${len}-letter -${Math.round(amount*100)}%`);
 return parts.length?`Word Guard: ${parts.join(" • ")}. 6+ letter words are never resisted.`:"No special ability.";
}
function traitText(type,letters=[],resistance={}){
 if(type==="cursedInitials")return `Cursed Initials: words starting with ${letters.join(" or ")} deal 50% damage.`;
 return lengthResistanceText(resistance);
}
function render(v){if(v==="home")home();if(v==="battle")battle();if(v==="heroes")heroes();if(v==="summon")summon();if(v==="codex")codex();if(v==="store")store();if(v==="tutorial")tutorial()}
function home(){
 let b=boss(state.stage);
 $("#view").innerHTML=`<div class="homeScreen">
  <section class="homeHero">
   <div class="homeCopy"><span class="eyebrow">A WORLD OF LIVING LANGUAGE</span><h2>CHAPTER 1<br><strong>GREENVALE</strong></h2>
   <p>A peaceful valley surrounds the Rootstone World Anchor. Ancient prisons have opened, creatures roam the land, and the Lifeword is beginning to wither.</p>
   <button class="primary homePlay" id="homePlay">PLAY STORY</button> <button class="gold" id="homeTutorial">HOW TO PLAY</button></div>
   <div class="anchorGlow"><div class="anchorRune">✦</div><b>ROOTSTONE</b><small>WORLD ANCHOR</small></div>
  </section>
  <section class="homeStrip">
   <div><small>CURRENT STAGE</small><b>${state.stage} / 15</b></div>
   <div><small>NEXT ENEMY</small><b>${b.icon} ${b.name}</b></div>
   <div><small>CONCORD TEAM</small><b>${state.team.length} / 4 Heroes</b></div>
   <button class="gold" id="homeHeroes">MANAGE HEROES</button>
   <button class="gold" id="giftCodes">🎁 GIFT CODE</button>
  </section>
 </div>`;
 $("#homePlay").onclick=()=>render("battle");$("#homeHeroes").onclick=()=>render("heroes");const gc=$("#giftCodes");if(gc)gc.onclick=giftCode;
}
const GIFT_CODES={
 "WQDEVGEMS":{gems:10000,label:"Developer Summon Cache"},
 "WELCOME1000":{gems:1000,label:"Welcome Gem Gift"}
};
function giftCode(){
 $("#view").innerHTML=`<div class="panel giftCodePanel"><div class="giftRune">🎁</div><h2 class="title">REDEEM GIFT CODE</h2><p class="title">Enter a WordQuest gift code to claim its reward.</p><div class="giftEntry"><input id="giftInput" maxlength="32" placeholder="ENTER CODE" autocomplete="off"><button class="primary" id="redeemGift">REDEEM</button></div><p class="notice" id="giftNotice">Codes are not case-sensitive.</p><div class="row"><button class="gold" id="giftBack">BACK HOME</button></div></div>`;
 $("#giftBack").onclick=home;$("#redeemGift").onclick=redeemGiftCode;$("#giftInput").onkeydown=e=>{if(e.key==="Enter")redeemGiftCode()};
}
function redeemGiftCode(){
 const input=$("#giftInput"),notice=$("#giftNotice"),code=(input.value||"").trim().toUpperCase(),reward=GIFT_CODES[code];
 if(!reward){notice.textContent="That gift code is invalid.";notice.className="notice giftError";return}
 if(state.redeemedCodes.includes(code)){notice.textContent="This code has already been redeemed on this save.";notice.className="notice giftError";return}
 state.redeemedCodes.push(code);state.gems+=reward.gems||0;save();
 notice.innerHTML=`🎉 <b>${reward.label}</b> claimed! 💎 +${reward.gems.toLocaleString()} Gems`;notice.className="notice giftSuccess";input.value="";
}
function tutorialIntro(){
 stopTimer();
 const starters=["pip","mira","aurelia","lyra"].map(id=>HEROES.find(h=>h.id===id));
 $("#view").innerHTML=`<div class="panel starterIntro"><span class="eyebrow">THE CONCORD FORMS</span><h2 class="title">MEET YOUR FIRST FOUR HEROES</h2><p class="title">Every WordQuest player begins with one hero from each class. This first battle has <b>no timer, no Energy cost, and no failure penalty.</b></p>
 <div class="starterFour">${starters.map(h=>`<div class="starterHero ${h.class.toLowerCase()}">${heroPortrait(h)}<h3>${h.name}</h3><b>${h.class}</b><p>${h.ability}</p><small>${h.class==="Rogue"?"Rogues exploit valuable board positions.":h.class==="Mage"?"Mages manipulate time and the Lifeword.":h.class==="Warrior"?"Warriors turn every Strike into heavier damage.":"Clerics sustain expeditions with rerolls and rewards."}</small></div>`).join("")}</div>
 <div class="row"><button class="primary" id="beginTutorialFight">BEGIN TUTORIAL BATTLE</button><button class="gold" id="tutorialBack">BACK</button></div></div>`;
 $("#beginTutorialFight").onclick=startTutorialFight;$("#tutorialBack").onclick=tutorial;
}
function startTutorialFight(){
 stopTimer();
 fight={name:"Training Wisp",icon:"✨",type:"none",max:85,hp:85,disabled:"",used:new Set(),timeLeft:0,refreshes:0,streakLetter:"",streakCount:0,timeBoostUsed:true,tutorial:true};
 fight.mageTimeBonus=0;fight.rogueBonusCount=0;fight.rogueBonusTiles=new Set();fight.warriorDamage=0;fight.clericExtraRerolls=0;fight.clericGoldBonus=0;fight.letters=board();selected=[];drawFight();
}
function battle(){let b=boss(state.stage);$("#view").innerHTML=`<div class="panel"><h2 class="title">CHAPTER 1 — GREENVALE</h2><p class="title">Stage ${state.stage} / 15 • ${isBossStage(state.stage)?"Boss: 3:00":"Stage: 1:00"}</p><div class="stagegrid">${BOSSES.map((_,i)=>`<button class="${i+1===state.stage?"current":""}" ${i+1>state.stage?"disabled":""} data-stage="${i+1}">${i+1}</button>`).join("")}</div><div class="boss">${b.icon}</div><h2 class="title">${b.name}</h2><div class="traits"><b>Boss Intel</b><br>${traitText(b.type,b.cursedInitials||[],b.lengthResistance||{})}</div><div class="row"><button class="primary" id="start">START — ⚡5</button></div></div>`;$("#start").onclick=startFight;document.querySelectorAll("[data-stage]").forEach(x=>x.onclick=()=>{state.stage=+x.dataset.stage;save();battle()})}
function teamClassCount(cls){return state.team.filter(id=>HEROES.find(h=>h.id===id)?.class===cls).length}
function randomBonusTiles(count){let ids=[...Array(16).keys()];for(let i=ids.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[ids[i],ids[j]]=[ids[j],ids[i]]}return new Set(ids.slice(0,count))}
function startFight(){if(state.energy<5)return alert("Not enough Story Energy.");state.energy-=5;save();fight=boss(state.stage);fight.disabled="";fight.used=new Set();fight.timeLeft=stageSeconds(state.stage);fight.refreshes=0;fight.streakLetter="";fight.streakCount=0;fight.timeBoostUsed=false;let mageCount=teamClassCount("Mage");fight.mageTimeBonus=mageCount>=4?25:mageCount>=2?10:0;fight.timeLeft+=fight.mageTimeBonus;let rogueCount=teamClassCount("Rogue");fight.rogueBonusCount=rogueCount>=4?6:rogueCount>=2?2:0;fight.rogueBonusTiles=randomBonusTiles(fight.rogueBonusCount);let warriorCount=teamClassCount("Warrior");fight.warriorDamage=warriorCount>=4?10:warriorCount>=2?5:0;let clericCount=teamClassCount("Cleric");fight.clericExtraRerolls=clericCount>=2?1:0;fight.clericGoldBonus=clericCount>=4?.20:0;fight.letters=board();selected=[];drawFight();startTimer()}
function board(){let vowels="AAAAAAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIIIIIOOOOOOOOOOUUUUU",consonants="BBBBCCCDDDDDDFFFFFFFFGGGGGHHHHHHJKLLLLLMMMMNNNNNNNNPPPPQRRRRRRRRRSSSSSSSSTTTTTTTTTVVWWXYYZ";let a=[];for(let i=0;i<6;i++)a.push(vowels[Math.floor(Math.random()*vowels.length)]);for(let i=0;i<10;i++)a.push(consonants[Math.floor(Math.random()*consonants.length)]);for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function activeSynergyText(){
  let parts=[];
  if(fight.mageTimeBonus)parts.push(`🔮 Mage +${fight.mageTimeBonus}s`);
  if(fight.rogueBonusCount)parts.push(`🗡️ Rogue ${fight.rogueBonusCount} ×2 tiles`);
  if(fight.warriorDamage)parts.push(`⚔️ Warrior +${fight.warriorDamage} damage`);
  if(fight.clericExtraRerolls)parts.push(`✨ Cleric +1 free reroll${fight.clericGoldBonus?" +20% Coins":""}`);
  return parts.length?parts.join(" • "):"No Class Synergy Active";
}
function drawFight(){
  if(!fight.letters)fight.letters=board();
  const teamCards=state.team.map(id=>{
    const h=HEROES.find(x=>x.id===id),o=state.owned[id];
    if(!h||!o)return "";
    return `<div class="combatHero"><div class="heroIcon">${h.icon}</div><div><b>${h.name}</b><small>${h.class||"Hero"} • Lv ${o.level}</small><div class="abilityBar"><i style="width:0%"></i></div></div></div>`;
  }).join("");
  $("#view").innerHTML=`<div class="battleScene">
    <div class="battleTop">
      <div><small>${fight.tutorial?"TUTORIAL • THE CONCORD FORMS":"CHAPTER 1 • GREENVALE"}</small><b>${fight.tutorial?"First Battle":"Stage "+state.stage+" / 15"}</b></div>
      <div class="enemyName">${fight.name}</div>
      <div class="combatTimer">${fight.tutorial?"∞ NO TIME LIMIT":`⏱ <span id="timer">${formatTime(fight.timeLeft)}</span>`}</div>
    </div>
    <div class="enemyHp"><div style="width:${Math.max(0,fight.hp/fight.max*100)}%"></div><span>${Math.max(0,fight.hp)} / ${fight.max} HP</span></div>
    <div class="arena">
      <div class="bossArt">${fight.icon}</div>
      <div class="bossIntel"><b>${fight.tutorial?"Training Encounter":"Boss Intel"}</b><br>${fight.tutorial?"Practice building words and watch how each starter hero contributes. There is no time pressure.":traitText(fight.type,fight.cursedInitials||[],fight.lengthResistance||{})} ${fight.disabled?`<strong>Disabled: ${fight.disabled}</strong>`:""}</div>
    </div>
    <div class="synergyBanner">${fight.tutorial?"Pip • Rogue &nbsp;|&nbsp; Mira • Mage &nbsp;|&nbsp; Aurelia • Warrior &nbsp;|&nbsp; Lyra • Cleric — balanced teams have no same-class synergy":activeSynergyText()}</div>
    <div class="battleBody">
      <div class="teamRail">${teamCards}</div>
      <div class="boardArea">
        <div class="streak">🔥 Letter Streak: ${fight.streakCount>1?`${fight.streakLetter} ×${fight.streakCount} • +${(fight.streakCount-1)*10}% damage`:"Start consecutive words with the same letter"}</div>
        <div class="word" id="word"></div>
        <div class="row refreshRow"><button class="gold" id="refresh">🔄 NEW LETTERS — ${fight.refreshes<(1+(fight.clericExtraRerolls||0))?"FREE":"💎"+REFRESH_GEM_COST}</button></div>
        <div class="letters">${fight.letters.map((l,i)=>`<button class="tile ${fight.rogueBonusTiles?.has(i)?"bonusTile":""}" data-i="${i}" ${l===fight.disabled?"disabled":""}><span>${l}</span>${fight.rogueBonusTiles?.has(i)?`<small>×2</small>`:""}</button>`).join("")}</div>
        <div class="damage" id="damage"></div>
        <div class="row actionRow"><button class="gold" id="clear">CLEAR</button><button class="primary strikeBtn" id="submit">⚔ STRIKE</button></div>
        <p class="notice" id="notice">Click letters in order to build your word.</p>
      </div>
      <div class="boostRail">
        ${fight.tutorial?`<b>TUTORIAL</b><small>Take as long as you need.</small><div class="tutorialTip">Try different word lengths and repeat a starting letter to build a Letter Streak.</div>`:`<b>+30 SECONDS</b><small>One time per battle</small>${!fight.timeBoostUsed?`<button onclick="addTimeBoost('ad')">▶ WATCH AD</button><span>OR</span><button onclick="addTimeBoost('gems')">💎 15 GEMS</button>`:`<div class="boostUsed">TIME BOOST USED</div>`}`}
      </div>
    </div>
  </div>`;
  document.querySelectorAll(".tile").forEach(x=>x.onclick=()=>pick(+x.dataset.i));
  $("#clear").onclick=()=>{selected=[];syncWord()};
  $("#refresh").onclick=refreshLetters;
  $("#submit").onclick=strike;
}
function pick(i){let p=selected.indexOf(i);p>=0?selected.splice(p,1):selected.push(i);syncWord()}
function syncWord(){let w=selected.map(i=>fight.letters[i]).join("");$("#word").textContent=w;document.querySelectorAll(".tile").forEach((x,i)=>x.classList.toggle("selected",selected.includes(i)))}
function refreshLetters(){
  if(!fight)return;
  if(!fight.tutorial&&fight.refreshes>=(1+(fight.clericExtraRerolls||0))){
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
let d=baseDamage(w.length);if(fight.type==="cursedInitials"&&fight.cursedInitials?.includes(w[0]))d*=.5;let lengthResist=w.length<=5?(fight.lengthResistance?.[w.length]||0):0;if(lengthResist)d*=1-lengthResist;state.team.forEach(id=>{let h=HEROES.find(x=>x.id===id),o=state.owned[id];if(!h||!o)return;d*=heroMultiplier(h,w,o.copies)});d=Math.round(d*streakBonus*rogueBonus)+(fight.warriorDamage||0);fight.hp-=d;$("#damage").textContent=`⚔ ${w} — ${d} DAMAGE!${fight.streakCount>1?` 🔥 ${first} STREAK ×${fight.streakCount} (+${(fight.streakCount-1)*10}%)`:""}`;selected=[];save();if(fight.hp<=0)return victory();drawFight()}
function victory(){stopTimer();if(fight?.tutorial){state.tutorialComplete=true;save();fight=null;selected=[];$("#view").innerHTML=`<div class="panel tutorialVictory"><h2 class="title">THE CONCORD IS READY!</h2><div class="boss">🏆</div><p class="title">You learned the core WordQuest battle loop with <b>Pip, Mira, Aurelia, and Lyra</b>.</p><p class="title">Your first real expedition is waiting in Greenvale. Story battles now use Energy and a timer.</p><div class="row"><button class="primary" id="tutorialContinue">ENTER GREENVALE</button><button class="gold" id="tutorialReview">REVIEW TUTORIAL</button></div></div>`;$("#tutorialContinue").onclick=battle;$("#tutorialReview").onclick=tutorial;return}let reward=40+state.stage*10;if(fight.clericGoldBonus)reward=Math.round(reward*(1+fight.clericGoldBonus));state.coins+=reward;state.bestiary=[...new Set([...state.bestiary,fight.name])];let completed=state.stage;
let energyReward=[5,10,15].includes(completed)?25:0;
if(energyReward&&state.energy<ENERGY_CAP){state.energy+=energyReward;state.lastEnergyTick=Date.now()}
else if(energyReward)energyReward=0;
if(state.stage<15)state.stage++;else{state.gems+=250}save();$("#view").innerHTML=`<div class="panel"><h2 class="title">VICTORY!</h2><div class="boss">🏆</div><h3 class="title">${fight.name} defeated</h3><p class="title">🪙 +${reward} Coins</p>${energyReward?`<p class="title">⚡ +${energyReward} Energy milestone reward!</p>`:""}${completed===15?'<p class="title">💎 +250 CHAPTER COMPLETE!</p>':""}<div class="row"><button class="primary" id="continue">CONTINUE</button></div></div>`;$("#continue").onclick=battle}
function tutorial(){
 $("#view").innerHTML=`<div class="panel tutorial"><h2 class="title">HOW TO PLAY WORDQUEST</h2>
 <div class="tutorialGrid">
 <section><b>① BUILD A WORD</b><p>Tap letter tiles in order, then press <strong>STRIKE</strong>. Every valid word damages the enemy. A word can only score once on the current board.</p></section>
 <section><b>② BASE WORD DAMAGE</b><p>2 letters: 5 • 3: 10 • 4: 18 • 5: 30 • 6: 45 • 7: 75 • 8: 120 • 9: 180 • 10: 250. Each letter beyond 10 adds 80 damage.</p></section>
 <section><b>③ LETTER STREAK</b><p>Start consecutive valid words with the same letter: 2nd +10%, 3rd +20%, 4th +30%, 5th and beyond +40%. Changing the starting letter or rerolling resets the streak.</p></section>
 <section><b>④ HERO PASSIVES</b><p>Your four heroes can multiply damage when a word matches their specialty. Check each Hero card for its word-length or letter condition.</p></section>
 <section><b>⑤ CLASS SYNERGY</b><p><strong>Mage:</strong> 2 = +10 sec, 4 = +25 sec in Story. <strong>Rogue:</strong> 2 = two ×2 tiles, 4 = six ×2 tiles. <strong>Warrior:</strong> 2 = +5 Strike damage, 4 = +10. <strong>Cleric:</strong> 2 = +1 free reroll, 4 = +1 reroll and +20% Coins.</p></section>
 <section><b>⑥ BOSS RULES</b><p>Chapter 1 enemies have no special abilities so you can learn the core word combat. Beginning in later chapters, Boss Intel introduces readable debuffs such as Cursed Initials: flagged starting letters cause a word to deal 50% damage.</p></section>
 <section><b>⑦ NEW LETTERS</b><p>Your first reroll is free. Additional rerolls normally cost 25 Gems. Cleric synergy can grant another free reroll. Rerolling also resets used words and Letter Streak.</p></section>
 <section><b>⑧ STORY ENERGY</b><p>Story battles cost 5 Energy. Energy naturally regenerates up to 50. Purchased or earned Energy can temporarily exceed that cap.</p></section>
 </div><p class="tutorialFuture">Hero Active Abilities will receive their own tutorial step when Ability Energy is added.</p>
 <div class="row"><button class="primary" id="tutorialBattle">PLAY STARTER TUTORIAL</button><button class="gold" id="tutorialHome">BACK HOME</button></div></div>`;
 $("#tutorialBattle").onclick=tutorialIntro;$("#tutorialHome").onclick=home;
}
let heroFilter="All";
function heroPortrait(h){return `<div class="heroPortrait ${h.class.toLowerCase()}"><span>${h.icon}</span><i>${h.class==="Mage"?"✦":h.class==="Rogue"?"✣":h.class==="Warrior"?"⚔":"☀"}</i></div>`}
function heroes(filter=heroFilter){
 heroFilter=filter;
 const visible=filter==="All"?HEROES:HEROES.filter(h=>h.class===filter);
 const ownedCount=HEROES.filter(h=>state.owned[h.id]).length;
 $("#view").innerHTML=`<div class="panel heroLibrary"><div class="libraryHead"><div><h2>HEROES</h2><p>${ownedCount} / 40 DISCOVERED</p></div>
 <div class="heroFilters">${["All","Mage","Rogue","Warrior","Cleric"].map(x=>`<button data-filter="${x}" class="${x===filter?"active":""}">${x}</button>`).join("")}</div></div>
 <div class="heroes">${visible.map(h=>{let o=state.owned[h.id],onTeam=state.team.includes(h.id);return `<div class="card rarity-${h.rarity.toLowerCase()} ${!o?"locked":""}">${heroPortrait(h)}
 <div class="heroCardTitle"><b>${h.name}</b><span>${h.class}</span></div><div class="rarity">${h.rarity} ${"★".repeat(Math.max(1,ascensionRank(o?.copies||0)+1))}</div>
 <p class="abilityText">${h.ability}</p><p class="heroLore">${h.lore}</p>
 ${o?`<p>Lv. ${o.level} • Copies ${o.copies}</p><div class="heroActions"><button class="gold" data-up="${h.id}">UPGRADE 🪙100</button><button data-team="${h.id}" class="${onTeam?"selectedTeam":""}">${onTeam?"✓ TEAM":"ADD TO TEAM"}</button></div>`:"<b>🔒 NOT YET SUMMONED</b>"}</div>`}).join("")}</div></div>`;
 document.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>heroes(b.dataset.filter));
 document.querySelectorAll("[data-up]").forEach(b=>b.onclick=()=>upgrade(b.dataset.up));
 document.querySelectorAll("[data-team]").forEach(b=>b.onclick=()=>toggleTeam(b.dataset.team));
}
function toggleTeam(id){
 if(state.team.includes(id)){if(state.team.length<=1)return alert("Keep at least one hero on your team.");state.team=state.team.filter(x=>x!==id)}
 else {if(state.team.length>=4)return alert("Your active team can contain 4 heroes.");state.team.push(id)}
 save();heroes();
}
function upgrade(id){if(state.coins<100)return alert("Need 100 Coins.");state.coins-=100;state.owned[id].level++;save();heroes()}
function summon(){
 $("#view").innerHTML=`<div class="panel summonHall"><h2 class="title">HERO SUMMON</h2><div class="summonSigil">✦</div>
 <p class="title">Call heroes through the Lifeword. Duplicates increase copy count for Ascension.</p>
 <div class="summonMode"><b>SUMMON PRESENTATION</b><button data-anim="full" class="${state.summonAnimation==="full"?"active":""}">✨ FULL ANIMATION</button><button data-anim="quick" class="${state.summonAnimation==="quick"?"active":""}">⚡ QUICK SUMMON</button></div>
 <div class="row"><button class="gold" data-pull="1">SUMMON ×1<br>💎100</button><button class="primary" data-pull="10">SUMMON ×10<br>💎1,000</button></div>
 <p class="notice" id="pullResult"></p><p class="title">Ultra 1% • Rare 5% • Uncommon 34% • Common 60%<br>Rare+ guarantee: ${state.rarePity}/10 • Ultra pity: ${state.pity}/50</p></div>`;
 document.querySelectorAll("[data-pull]").forEach(b=>b.onclick=()=>pull(+b.dataset.pull));
 document.querySelectorAll("[data-anim]").forEach(b=>b.onclick=()=>{state.summonAnimation=b.dataset.anim;save();summon()});
}
function revealSummons(results){
 const full=state.summonAnimation==="full";
 if(!full){summon();$("#pullResult").innerHTML=results.map(x=>`<b class="pull-${x.rarity.toLowerCase()}">${x.icon} ${x.name} — ${x.rarity}</b>`).join(" • ");return}
 $("#view").innerHTML=`<div class="summonReveal"><button id="skipReveal" class="skipReveal">SKIP</button><div class="summonPortal"><span>✦</span><small>THE LIFEWORD ANSWERS...</small></div><div id="revealCards" class="revealCards"></div><button id="revealDone" class="primary" style="display:none">CONTINUE</button></div>`;
 let i=0,done=false,timer;
 const finish=()=>{if(done)return;done=true;clearInterval(timer);$("#revealCards").innerHTML=results.map(x=>`<div class="revealHero pull-${x.rarity.toLowerCase()}"><span>${x.icon}</span><b>${x.name}</b><small>${x.rarity} • ${x.class}</small></div>`).join("");$("#revealDone").style.display="block";$("#skipReveal").style.display="none"};
 const step=()=>{if(i>=results.length)return finish();const x=results[i++],card=document.createElement("div");card.className=`revealHero revealPop pull-${x.rarity.toLowerCase()}`;card.innerHTML=`<span>${x.icon}</span><b>${x.name}</b><small>${x.rarity} • ${x.class}</small>`;$("#revealCards").appendChild(card);if(x.rarity==="Ultra")document.querySelector(".summonPortal").classList.add("ultraFanfare");};
 timer=setInterval(step,650);setTimeout(step,450);$("#skipReveal").onclick=finish;$("#revealDone").onclick=summon;
}
function pull(n){
 let cost=n*100;if(state.gems<cost)return alert("Not enough Gems.");
 state.gems-=cost;let out=[];const pool=r=>HEROES.filter(h=>h.rarity===r);
 for(let i=0;i<n;i++){
  state.pity++;state.rarePity++;let r=Math.random(),rarity;
  if(state.pity>=50||r<.01){rarity="Ultra";state.pity=0}
  else if(r<.06)rarity="Rare";else if(r<.40)rarity="Uncommon";else rarity="Common";
  if(state.rarePity>=10){if(rarity==="Common"||rarity==="Uncommon")rarity="Rare";state.rarePity=0}
  let p=pool(rarity),h=p[Math.floor(Math.random()*p.length)];
  state.owned[h.id]??={copies:0,level:1};state.owned[h.id].copies++;out.push(h);
 }
 save();revealSummons(out);
}
function store(){
 $("#view").innerHTML=`<div class="panel store"><div class="storeHead"><div><h2>CONCORD SUPPLY HALL</h2><p>Relics and provisions gathered from across Aethera.</p></div><span>SECURE SUPPLIES</span></div>
 <div class="storeTabs"><button class="active">FEATURED</button><button>RESOURCES</button><button>SUMMON</button><button>PACKS</button></div>
 <div class="storeGrid">
  <div class="storeCard"><div class="storeArt energyPotion">⚗️</div><h3>Lifeword Flask</h3><b>+50 Energy</b><p>Restores expedition energy. Purchase while below the natural cap.</p><button class="primary" id="storeEnergy">💎 25</button></div>
  <div class="storeCard"><div class="storeArt">🪙</div><h3>Concord Coin Chest</h3><b>500 Coins</b><p>Upgrade currency recovered from secured trade roads.</p><button class="gold" data-store="coins">💎 75</button></div>
  <div class="storeCard"><div class="storeArt">💎</div><h3>Anchor Gem Pouch</h3><b>500 Gems</b><p>Premium-currency pack presentation for the future mobile store.</p><button class="gold" data-store="gems">STORE PREVIEW</button></div>
  <div class="storeCard"><div class="storeArt">📜</div><h3>Summon Scroll</h3><b>1 Hero Summon</b><p>A rune-bound summons issued by the Concord.</p><button class="gold" data-store="summon">💎 100</button></div>
  <div class="storeCard featuredPack"><div class="storeArt">🏛️</div><h3>Hero's Journey Pack</h3><b>Starter Bundle Concept</b><p>Future bundle of summons, Energy and upgrade resources.</p><button class="gold" data-store="preview">COMING LATER</button></div>
  <div class="storeCard"><div class="storeArt">✨</div><h3>World Anchor Cache</h3><b>Event Reward Preview</b><p>Future cache earned during Anchor defense events.</p><button class="gold" data-store="preview">COMING LATER</button></div>
 </div></div>`;
 $("#storeEnergy").onclick=buyEnergy;
 document.querySelector('[data-store="coins"]').onclick=()=>{if(state.gems<75)return alert("Not enough Gems.");state.gems-=75;state.coins+=500;save();store()};
 document.querySelector('[data-store="summon"]').onclick=()=>pull(1);
 document.querySelectorAll('[data-store="gems"],[data-store="preview"]').forEach(b=>b.onclick=()=>alert("Real-money billing is not enabled in this prototype."));
}
function codex(){$("#view").innerHTML=`<div class="panel"><h2 class="title">WORD CODEX</h2><p>Discovered: <b>${state.codex.length}</b></p><div>${state.codex.sort().map(w=>`<span class="codexword">${w}</span>`).join("")||"Find valid words in battle to fill your Codex."}</div><hr><h2 class="title">BESTIARY</h2><p>${state.bestiary.join(" • ")||"Defeat bosses to record them here."}</p></div>`}
