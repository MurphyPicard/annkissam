var words = ['a', 'abcd', 'ac', 'bc', 'bcd', 'c', 'cde', 'def', 'e', 'fg', 'g', 'h', 'hij', 'ij'];
var nouns = ["abcd", "c", "cde", "def", "h", "ij"];
var verbs = ["bc", "bcd", "fg", "g", "hij"];
var articles = ["a", "ac", "e"];

// 3 rules:
// have all words present in the dictionary
// have a verb
// have a noun or at least 2 articles

var sentence = '';
var numVerbs = 0;
var numNouns = 0;
var numArts = 0;



function sentenceComposer (s){

  for (var i = 0; i < words.length; i ++){
      console.log(words[i]);
      if(s.includes( words[i] )){

        sentence += words[i];
        sentence += ' ';
        s = s.slice(words[i].length, s.length);
      }
  }//for

  console.log('*****************');
  console.log(sentence);
  console.log('*****************');




  for (var v = 0; v < verbs.length; v++){
    if( sentence.includes(verbs[v]) ){
      numVerbs ++;
    }
  }//for
  for (var n = 0; n < nouns.length; n++){
    if( sentence.includes(nouns[n]) ){
      numNouns ++;
    }
  }//for
  for (var a = 0; a < articles.length; v++){
    if( sentence.includes(articles[a]) ){
      numArts ++;
    }
  }//for





  if(numVerbs >= 1 && numNouns >= 1){
    console.log(sentence.slice(0, sentence.length-1));
    return sentence.slice(0, sentence.length-1);
  }
  else if (numVerbs >= 1 && numArts >=2){
    console.log(sentence.slice(0, sentence.length-1));
    return sentence.slice(0, sentence.length-1);
  }
  else{
    return "string does not make a valid sentence";
  }

}//sentenceComposer

// assumptions
// more than 1 verb and more than 1 noun and more than 2 articles is ok
// assume we have to use all letters
// assume we cannot change the order of the string
// assume to compose sentences we are just adding spaces
// assume we don't have to use all letters in the string if words are not formed from the remaining letters
