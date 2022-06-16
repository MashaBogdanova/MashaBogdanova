function spongeMeme(sentence) {
    let newSentence = [];
    for (let i = 0; i< sentence.length; i++){
      if(i % 2 === 0){
        newSentence.push(sentence[i].toUpperCase());
    } else {
        newSentence.push(sentence[i].toLowerCase());
    }
      }
  return newSentence.join("");
}
