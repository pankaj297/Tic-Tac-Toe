//Tic Tac Toe game


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new-btn");
let massageBox = document.querySelector(".massage-box");
let msg = document.querySelector("#msg");


let turn0 = true;

 let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


const resetGame = () => {
    turn0 = true;
    enableBoxes();
   msg.innerText = "";
    massageBox.classList.add("hide");
   
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
       if(turn0 === true){   //player 0
         box.innerText = "O";
        //  box.style. = "pink";
        box.style.color = "#32C3C0";
         turn0 = false;
       }else{ //player x
        box.innerText = "X";
        box.style.color = "#F3B137";
        turn0 = true;
       }
       box.disabled = true;

       checkWinner();
    });
})


const disabledBoxes  = () => {
    for(let box of boxes){
        box.disabled = true;
        
    }
}

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `🎊🎉🏆Congratulation,
         Winner is ${winner} 🏆🎊🎉`;
   
  massageBox.classList.remove("hide");
  disabledBoxes();
}

const checkWinner = () => {
    for(Combinations of winningCombinations){
        let pos1Val  =  boxes[Combinations[0]].innerText;
        let pos2Val = boxes[Combinations[1]].innerText;
        let pos3Val = boxes[Combinations[2]].innerText;
       
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winners!" + pos1Val);
               
                showWinner(pos1Val);
            }
        }

    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);









//  console.log([Combinations[0]], [Combinations[1]], [Combinations[2]]);

//  console.log(
//    boxes[Combinations[0]].innerText,
//    boxes[Combinations[1]].innerText,
//    boxes[Combinations[2]].innerText
//  );