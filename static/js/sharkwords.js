const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

const numWrong = 0;


const createDivsForChars = (word) => {
  
  for (const letter of word) {
    let item = `<div class="letter-box ${letter}"></div>`;
    document.querySelector('#word-container').insertAdjacentHTML('beforeend', item);
  }
  console.log(word);
};


const handleCorrectGuess = (letter) => {
  
  const wordLetter = document.querySelectorAll(`.${letter}`);
  for (item of wordLetter) {
    item.innerHTML = letter;
  }
}


const generateLetterButtons = () => {
  
  let container = document.querySelector('#letter-buttons');
  for (const letter of ALPHABET) {
    let buttonItem = `<button> ${letter} </button>`;
    container.insertAdjacentHTML('beforeend', buttonItem);
  }
};


const disableLetterButton = (buttonEl) => {
  buttonEl.setAttribute('disabled', 'true');  
};


const isLetterInWord = (letter, word) => {

  if (word.includes(letter)) {
    // handleCorrectGuess(letter);
    return true; 
  } else {
    return false;
  }

};

const handleWrongGuess = (letter, word) => {
  pass;
}



(function startGame() {
  
  const word = WORDS[Math.floor(Math.random() * WORDS.length)];
 

  const wordToGuess = createDivsForChars(word);

  const buttons = generateLetterButtons();

  const buttonsLetters = document.querySelectorAll('button');

  for (const button of buttonsLetters) {
    // console.log(button)     
    button.addEventListener('click', () => {
      const letter = button.innerHTML;
      disableLetterButton(button);
      if (isLetterInWord(letter, wordToGuess)) {
        handleCorrectGuess;
      } else {
        handleWrongGuess;
      }
    });      
  }
  
    
   
      // button.addEventListener('click',(disableLetterButton))
  

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
