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

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter, word) => {

  if (word.includes(letter)) {
    return true;
  } else {
    return false;
  }

};

// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word


  // const word = 
  const word = WORDS[Math.floor(Math.random() * WORDS.length)];
 

  createDivsForChars(word);

  generateLetterButtons();

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
