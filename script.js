// let boxes = document.querySelectorAll(".box");
// let Resetbtn = document.querySelector("#Resetbtn");
// // console.log(smallbox);
// const winPatterns = [//storing winning patterns in 2D Array
//     [0,1,2],//arr[0]
//     [0,3,6],//arr[1]
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
// ];

// let userinput = "X";
// boxes.forEach((box) => {
//     box.addEventListener("click", (evt) => {
//         if(box.disabled) return;
//         if(userinput==="X"){
//         box.innerText= "X";
//         box.style.backgroundColor="Yellow";
//         userinput="0";
//         }else{
//             box.innerText="0";
//              box.style.backgroundColor="orange";
//             userinput="X";
//         }
//         box.disabled=true;
//         console.log(userinput);//prints on browser console

//         checkWinner();
//     });
// });

// const checkWinner = () => {
//     for(let pattern of winPatterns){
//             //  console.log(pattern);//prints all patterns
//             // console.log(pattern[0]);//patter is [0,1,2],[0,3,4];
//             console.log(pattern[0],pattern[1],pattern[2]);//iterating each index of pattern
          
//             let pos1val = boxes[pattern[0]].innerText;//iterating each index and overwriting with X and 0
//             let pos2val = boxes[pattern[1]].innerText;//postval 1,2,3 are storng the inner text inside the particular box
//             let pos3val = boxes[pattern[2]].innerText;


//             if(pos1val != "" && pos2val != "" && pos3val != ""){
//                 if(pos1val == pos2val && pos2val == pos3val){
//                     console.log("Winner Found ");
//                     let winner = document.querySelector("#winner");
//                     winner.innerText= pos1val + " Won"; 


//                     boxes.forEach((box) => {
//                     box.disabled=true;
//                     });
//                 }
//             }

//         }
//     }


// const resetGame = () => {
//   userinput = "X";

//   boxes.forEach((box) => {
//     box.innerText = "";
//     box.disabled = false;
//     box.style.backgroundColor = "";
//   });
// };
// let ResetBtn = document.querySelector("#Resetbtn");
// ResetBtn.addEventListener("click", resetGame);


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Resetbtn");
let winnerText = document.querySelector("#winner");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

let currentPlayer = "X";
let gameOver = false;

/* HANDLE BOX CLICK */
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.disabled || gameOver) return;

    box.innerText = currentPlayer;
    box.style.backgroundColor =
      currentPlayer === "X" ? "yellow" : "orange";

    box.disabled = true;

    checkWinner();

    if (!gameOver) {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

/* CHECK WINNER OR DRAW */
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;

    let val1 = boxes[a].innerText;
    let val2 = boxes[b].innerText;
    let val3 = boxes[c].innerText;

    if (val1 !== "" && val1 === val2 && val2 === val3) {
      winnerText.innerText = `${val1} Won 🎉`;
      gameOver = true;

      boxes[a].classList.add("win");
      boxes[b].classList.add("win");
      boxes[c].classList.add("win");

      disableBoxes();
      return;
    }
  }

  // Draw check
  let allFilled = true;
  boxes.forEach((box) => {
    if (box.innerText === "") {
      allFilled = false;
    }
  });

  if (allFilled) {
    winnerText.innerText = "It's a Draw 🤝";
    gameOver = true;
  }
};

/* DISABLE ALL BOXES */
const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

/* RESET GAME */
const resetGame = () => {
  currentPlayer = "X";
  gameOver = false;
  winnerText.innerText = "";

  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.style.backgroundColor = "";
    box.classList.remove("win");
  });
};

resetBtn.addEventListener("click", resetGame);
