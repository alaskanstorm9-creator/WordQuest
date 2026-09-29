// WordQuest dictionary adapter.
// Production rule: words are 2–15 alphabetic characters and must exist in the loaded lexicon.
// Keep the lexicon source replaceable so a licensed commercial word list can be plugged in later.
const WordQuestDictionary=(()=>{
  let words=new Set();
  let ready=false;
  const normalize=w=>String(w||"").trim().toUpperCase();
  async function load(){
    try{
      const r=await fetch("data/words.txt");
      if(!r.ok)throw new Error("lexicon unavailable");
      const text=await r.text();
      words=new Set(text.split(/\r?\n/).map(normalize).filter(w=>/^[A-Z]{2,15}$/.test(w)));
      ready=true;
    }catch(e){
      console.warn("WordQuest lexicon could not be loaded.",e);
    }
    return words.size;
  }
  function isAllowed(word){
    const w=normalize(word);
    return /^[A-Z]{2,15}$/.test(w)&&words.has(w);
  }
  return{load,isAllowed,get size(){return words.size},get ready(){return ready}};
})();
