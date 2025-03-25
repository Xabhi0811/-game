let boxes = document.querySelectorAll(".box");
let resetgame  = document.querySelector("#reset");
let newButton = document.querySelector("#new");
let msg = document.querySelector(".msg");
let msgg = document.querySelector("#msgg");
let turnO = true; 

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
 const reset = () =>{
    turnO = true;
    enabledboxes();
    msg.classList.add("hide");

 };

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }
        turnO = !turnO;
        box.disabled = true;
        checkwinner();
    });
});

const disabledboxes = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const enabledboxes = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msgg.innerText = `Sheer hai tu yrr ${winner}`;
    msg.classList.remove("hide");
    disabledboxes();
};

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                showwinner(pos1val);
                
            }
        }
    }
};

newButton.addEventListener("click",reset);
resetgame.addEventListener("click",reset);


