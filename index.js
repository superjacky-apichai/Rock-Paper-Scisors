
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
    || (myChoice === 3 && ai === 2)) {

    playerScore++;
    alert('Player WIN'+`${playerScore}`);
  } else if (myChoice === ai) {
    alert('Tie')
  } else {
    aiScore++;
    alert('AI WIN'+`${aiScore}`)

  }
    
  if(playerScore === 5){
    alert('Player WIN')

    setTimeout(() => {
      location.reload();
    });
  }else if (aiScore === 5){
    alert('AI WIN')

    setTimeout(() => {
      location.reload();
    });
  }

}


/* game mechanic fucntion end here*/

/* create Plater and AI weapon */

let player = 0;

function computerAI(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let playerScore = 0;
let aiScore = 0;

/* create Plater and AI weapon end here*/



// /* add click event */
function clickEvent() {
  rock.addEventListener('click', () => {
    player = 1;
    calculateScore(player, computerAI(1,3))
  });

  paper.addEventListener('click', () => {
    player = 2
    calculateScore(player, computerAI(1,3))

  });

  scissors.addEventListener('click', () => {
    player = 3;

    calculateScore(player, computerAI(1,3))

  });



}
/* Player click event end here */

/* changin content */

/* changin content end here*/


/* game run here*/

clickEvent();

/* game end here*/














/* Add computer-ai interact */


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








