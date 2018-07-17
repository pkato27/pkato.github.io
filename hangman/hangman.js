// create an Array of words
const words = ["vikings","browns","rams","panthers","jets"];

let underscores = [];


// choose a random word
let random = Math.floor(Math.random() * words.length);
let choosenWord = words[random];
let underScore = [];
let rightWord = [];
let NumbGuess = 9;
let loss = 0;


function decreaseGuesses(){
  NumbGuess--;
  document.getElementById("numbGuesses").innerHTML = 'Number of Guesses: ' + NumbGuess;

}
// using DOM to have correct underscores
let domUnderScore = document.getElementsByClassName('underscores');

// create underscores based on length of word
let generateUnderscore = () => {
  for (let i = 0; i < choosenWord.length; i ++){
    underScore.push('_');
  }
  return underScore;
}


//get user guess
document.addEventListener('keypress',(event) => {

let keyword = String.fromCharCode(event.keyCode);
// if Users guess is right
if(choosenWord.indexOf(keyword) > -1) {
// add to right words array 
rightWord.push(keyword);

//replace underscore with right Letter
underScore[choosenWord.indexOf(keyword)] = keyword;
} 
else { 
  decreaseGuesses();

} if(NumbGuess === 0){
  loss++;
  document.getElementById("loss").innerHTML = "Loss " + loss;



}

// to see if user word matches guesses
if (domUnderScore[0].innerHTML = underScore.join(' ')) {
  
} else {
  wrongGuesses.push(keyword);
}

});

// if the letter you guessed is not in the choosen word array, minus 1 from Number of guesses


//if Number of guess = 0. add 1 loss. 

 domUnderScore[0].innerHTML =  generateUnderscore().join(' ');
