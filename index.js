alert("Welcom to Rock Paper Scissors game")

alert("Choses Your Choice")


while(true){
const myChoice = prompt("1.Rock 2.Paper 3.Scissors");

const ai = Math.floor(Math.random() * (3 - 1 + 1))+1;



function letPlay(myChoice,ai){

    if((myChoice === 1 && ai === 3)
        || (myChoice === 2 && ai === 1) 
        || myChoice === 3 && ai === 2  ){
        alert("You WIN!")
    }else{
        alert(`AI choose ${ai}  You LOSE! `)
    }

}

letPlay(myChoice,ai);
}

