console.log("welcome to my tic tac toe")
let turnaudio = new Audio("mixkit-arcade-game-jump-coin-216.wav")
let turn = "X"
let isgameover = false;
const changeturn = () => {
    return turn === "X" ? "0" : "X"
}

const checkwinning = () => {
     let boxitem = document.getElementsByClassName('boxitem')
     let win = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6]
     ]
     win.forEach(e =>{
     if ((boxitem[e[0]].innerText === boxitem[e[1]].innerText) && (boxitem[e[2]].innerText === boxitem[e[1]].innerText) && (boxitem[e[0]].innerText !== "")) {
             document.querySelector('.turn').innerText = boxitem[e[0]].innerText + " Won"
        isgameover = true
       
         }
     })
}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => { 
    let boxitem = element.querySelector('.boxitem')
    element.addEventListener('click', () => {
        if (boxitem.innerText === '') {
            boxitem.innerText = turn;
            turn = changeturn();
              turnaudio.play();
              checkwinning();
          
             if(!isgameover){
            document.getElementsByClassName("turn")[0].innerText = "turn for " + turn;
            }
        }
    })
}
)

 

reset.addEventListener('click', () => {
    
    let boxitems = document.querySelectorAll('.boxitem');
    Array.from(boxitems).forEach(element => {
        element.innerText = ""; 
    });
        turn = "X"
isgameover = false
    document.getElementsByClassName("turn")[0].innerText = "turn for " + turn;

});

