// WordQuest open game lexicon adapter.
// Primary development lexicon: Wordnik open-source wordlist (MIT), intended for game developers.
// Source: https://github.com/wordnik/wordlist
// Production can replace this source with a curated/licensed lexicon without changing combat code.
const WordQuestDictionary=(()=>{
  let words=new Set();
  let ready=false;
  const normalize=w=>String(w||"").trim().replace(/^["']|["']$/g,"").toUpperCase();
  const valid=w=>/^[A-Z]{2,15}$/.test(w);
  async function read(url){
    const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),5000);const r=await fetch(url,{signal:controller.signal}).finally(()=>clearTimeout(timer));
    if(!r.ok)throw new Error("lexicon unavailable: "+url);
    const text=await r.text();
    return text.split(/\r?\n/).map(normalize).filter(valid);
  }
  async function load(){
    const sources=[
      "https://raw.githubusercontent.com/wordnik/wordlist/main/wordlist-20210729.txt",
      "data/words.txt"
    ];
    for(const source of sources){
      try{
        const loaded=await read(source);
        if(loaded.length){words=new Set(loaded);ready=true;console.info("WordQuest lexicon:",words.size,"words");break}
      }catch(e){console.warn(e.message)}
    }
    return words.size;
  }
  function isAllowed(word){const w=normalize(word);return valid(w)&&words.has(w)}
  return{load,isAllowed,get size(){return words.size},get ready(){return ready}};
})();
