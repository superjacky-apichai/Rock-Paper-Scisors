
/* Creat choosting character text 
when you mouse over the image and text of that image pop-up */

const rock = document.querySelector('.rock');
const weaponDisplay = document.querySelector('.weapon-display');

rock.addEventListener('mouseover', () => {
  weaponDisplay.textContent = 'Rock';
  weaponDisplay.classList.add('active');
});

rock.addEventListener('mouseout', () => {
  weaponDisplay.textContent = 'Choose your weapons';
});


const paper = document.querySelector('.paper');


paper.addEventListener('mouseover', () => {
  weaponDisplay.textContent = 'Paper';
  weaponDisplay.classList.add('active');
});

paper.addEventListener('mouseout', () => {
  weaponDisplay.textContent = 'Choose your weapons';
});

const scissors = document.querySelector('.scissors');


scissors.addEventListener('mouseover', () => {
  weaponDisplay.textContent = 'Scissors';
  weaponDisplay.classList.add('active');
});

scissors.addEventListener('mouseout', () => {
  weaponDisplay.textContent = 'Choose your weapons';
});

/* pop-up text end here */

/* game mechanic fucntion */

function calculateScore(myChoice, ai) {

  if ((myChoice === 1 && ai === 3)
    || (myChoice === 2 && ai === 1)
    || myChoice === 3 && ai === 2) {
    return true;
  } else if (myChoice === ai) {
    return undefined;
  }

  return false;
}


/* game mechanic fucntion end here*/

/* create Plater and AI weapon*/

let player = 0;
let computerAI = 0;

/* create Plater and AI weapon end here*/



// /* add click event */

rock.addEventListener('click', () => {
  player = 1;
  
});

paper.addEventListener('click', () => {
  player = 2
  
});

scissors.addEventListener('click', () => {
  player = 3;
  
});

/* Player click event end here */

/* game run here*/
let playerScore = 0;
let aiScore = 0;
// while (playerScore < 5 || aiScore < 5) {




// }


/* game end here*/














/* Add computer-ai interact */

// let randomNumber = Math.floor(Math.random() * 3);
// computerAI = weaponArray[randomNumber];


// /* Add computer-ai interact end here*/


// /* add click event */


// const playerWeapon = document.querySelector('.player-weapon');

// rock.addEventListener('click', () => {
//   playerWeapon.src = 'img/weapon/Rock.png';
//   playerWeapon.classList.add('activePlayerRock');
//   player = weaponArray[0];
// });

// paper.addEventListener('click', () => {
//   playerWeapon.src = 'img/weapon/Paper.png';
//   playerWeapon.classList.add('activePlayerRock');
//   player = weaponArray[1];
// });

// scissors.addEventListener('click', () => {
//   playerWeapon.src = 'img/weapon/Scissors.png';
//   playerWeapon.classList.add('activePlayerRock');
//   player = weaponArray[2];
// });


/* Player click event end here */








