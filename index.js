
/* Creat choosting character text 
when you mouse over the image and text of that image pop-up */

const rock = document.querySelector('.rock');
const weaponDisplay = document.querySelector('.weapon-display');
const playerWeapon = document.querySelector('.player-weapon');
const playerTotalScore = document.querySelector('.player-score');
const aiWeapon = document.querySelector('.ai-weapon');
const aiTotalScore = document.querySelector('.ai-score');
const scoreDiscrip = document.querySelector('.score-discrip');


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

/* create Player and AI weapon */
let playerScore = 0;
let aiScore = 0;

function calcomputerAI(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
let computerAI = 0;
let player = 0;

/* create Player and AI weapon end here*/

/* game mechanic fucntion */

function calculateScore(myChoice, ai) {

  if ((myChoice === 1 && ai === 3)
    || (myChoice === 2 && ai === 1)
    || (myChoice === 3 && ai === 2)) {
    playerScore++;
    playerTotalScore.textContent = `Player: ${playerScore}/5`;
    scoreDiscrip.textContent = 'You WIN';
  } else if (myChoice === ai) {
    scoreDiscrip.textContent = 'TIE';
  } else {
    aiScore++;
    aiTotalScore.textContent = `Computer: ${aiScore}/5`
    scoreDiscrip.textContent = 'Computer WIN';
  }



  if (playerScore === 5) {
    alert('Player WIN')

    setTimeout(() => {
      location.reload();
    });
  } else if (aiScore === 5) {
    alert('AI WIN')

    setTimeout(() => {
      location.reload();
    });
  }



}


/* game mechanic fucntion end here*/



/* add click event */
function clickEvent() {
  rock.addEventListener('click', () => {
    player = 1;
    computerAI = calcomputerAI(1, 3);
    playerWeapon.src = 'img/weapon/Rock.png';
    calculateScore(player, computerAI);
    changAI_Img(computerAI);
    playerWeapon.classList.add('activeimg');
    aiWeapon.classList.add('activeimg');
  });

  paper.addEventListener('click', () => {
    player = 2
    computerAI = calcomputerAI(1, 3);
    playerWeapon.src = 'img/weapon/Paper.png';
    calculateScore(player, computerAI);
    changAI_Img(computerAI);
    playerWeapon.classList.add('activeimg');
    aiWeapon.classList.add('activeimg');
  });

  scissors.addEventListener('click', () => {
    player = 3;
    computerAI = calcomputerAI(1, 3);
    playerWeapon.src = 'img/weapon/Scissors.png';
    calculateScore(player, computerAI);
    changAI_Img(computerAI);
    changAI_Img(computerAI);
    playerWeapon.classList.add('activeimg');
    aiWeapon.classList.add('activeimg');
  });


}
/* Player click event end here */
/* chang ai img here*/

function changAI_Img(computerAI_) {
  if (computerAI_ === 1) {
    aiWeapon.src = 'img/weapon/Rock.png';
  } else if (computerAI_ === 2) {
    aiWeapon.src = 'img/weapon/Paper.png';
  } else if (computerAI_ === 3) {
    aiWeapon.src = 'img/weapon/Scissors.png';

  }

}

/* chang ai img end here*/


/* game run here*/

clickEvent();



/* game end here*/






















