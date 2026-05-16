let turnO=1,xwins=0,owins=0;
function mark(box){
    if(box.innerText!=""){
        alert("Invalid Move!");
        return ;
    }
    if(turnO){
        box.innerText="O";
        turnO=0;
    }
    else{
        box.innerText="X";
        turnO=1;
    }
}
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
];
function updateScoreboard(){
    document.getElementById("scoreboard").innerText =
        `X : ${xwins} | O : ${owins}`;
}
function resetBoard(){
    boxes.forEach((box)=>{
        box.classList.remove("win");
        box.innerText="";
    });
    document.getElementById("winner").innerText="";
    document.getElementById("message").innerText="";
}
function check(){
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 != "" && pos1 == pos2 && pos2 == pos3){
            if(pos1 == "X"){
                xwins++;
            }
            else{
                owins++;
            }
            boxes[pattern[0]].classList.add("win");
            boxes[pattern[1]].classList.add("win");
            boxes[pattern[2]].classList.add("win");
            updateScoreboard();
            return pos1;
        }
    }
    let flag=0;
    for(let i=0;i<9;i++){
        if(boxes[i].innerText==""){
            flag=1;break;
        }
    }
    if(!flag){
        document.getElementById("winner").innerText="Game Draw!";
        document.getElementById("message").innerText="Refreshing in 3s";
        setTimeout(()=>{
            resetBoard();
        },3000);
    }
    return null;
}
let boxes = document.querySelectorAll(".box");
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        mark(box);
        let a=check();
        if(a){
            document.getElementById("winner").innerText="Player " + a + " wins";
            document.getElementById("message").innerText="Refreshing in 3s";
            setTimeout(()=>{
                resetBoard();
            },3000);
        }
    });
});
let newg=document.querySelector("#btn1");
newg.addEventListener("click",()=>{
    document.getElementById("scoreboard").innerText =
        `X : 0 | O : 0`;
        xwins=0;owins=0;
    resetBoard();
})
let res=document.querySelector("#btn2");
res.addEventListener("click",()=>{
    resetBoard();
})






