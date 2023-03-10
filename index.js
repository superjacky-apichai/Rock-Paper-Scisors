
/* Creat and choosting character text 
when you mouse over the image and text of that image pop-up */

const rock = document.querySelector('.rock');
const weaponDisplay = document.querySelector('.weapon-display');

rock.addEventListener('mouseover', () => {
  weaponDisplay.textContent = 'Rock';
  weaponDisplay.classList.add('active');
});

rock.addEventListener('mouseout', () => {
  weaponDisplay.classList.remove('active');
});


const paper = document.querySelector('.paper');


paper.addEventListener('mouseover', () => {
  weaponDisplay.textContent = 'Paper';
  weaponDisplay.classList.add('active');
});

paper.addEventListener('mouseout', () => {
  weaponDisplay.classList.remove('active');
});

const scissors = document.querySelector('.scissors');


scissors.addEventListener('mouseover', () => {
  weaponDisplay.textContent = 'Scissors';
  weaponDisplay.classList.add('active');
});

scissors.addEventListener('mouseout', () => {
  weaponDisplay.classList.remove('active');
});

/* pop-up text end here */













/*
alert("Welcom to Rock Paper Scissors game")

alert("Choses Your Choice")


function letPlay(myChoice, ai) {

    if ((myChoice === 1 && ai === 3)
        || (myChoice === 2 && ai === 1)
        || myChoice === 3 && ai === 2) {
        alert("You WIN!")
    } else {
        alert(`AI choose ${ai}  You LOSE! `)
    }

}

while (true) {
    const myChoice = parseInt(prompt("1.Rock 2.Paper 3.Scissors"));

    const ai = Math.floor(Math.random() * (3 - 1 + 1)) + 1;




    letPlay(myChoice, ai);
}
*/

/* // Declare and initialize variables
const choices = ["rock", "paper", "scissors"];
let playerWins = 0;
let aiWins = 0;

// Function to play a round of the game
function playRound(playerChoice, aiChoice) {
  // Calculate winner based on choices
  let winner;
  if ((playerChoice === 0 && aiChoice === 2) ||
      (playerChoice === 1 && aiChoice === 0) ||
      (playerChoice === 2 && aiChoice === 1)) {
    playerWins++;
    winner = "You win!";
  } else if (playerChoice === aiChoice) {
    winner = "Tie!";
  } else {
    aiWins++;
    winner = "AI wins!";
  }
  // Display results in the console
  console.log(`You chose ${choices[playerChoice]}. AI chose ${choices[aiChoice]}. ${winner}`);
}

// Main game loop
while (true) {
  // Get player's choice
  let playerChoice = parseInt(prompt("Enter your choice: 1. Rock, 2. Paper, or 3. Scissors"));
  if (playerChoice < 1 || playerChoice > 3) {
    console.log("Invalid choice! Please enter a number from 1 to 3.");
    continue;
  }
  playerChoice--;

  // Generate AI's choice
  let aiChoice = Math.floor(Math.random() * 3);

  // Play a round and display the results
  playRound(playerChoice, aiChoice);

  // Display the score
  console.log(`Score: You ${playerWins} - ${aiWins} AI`);
  
}*/

