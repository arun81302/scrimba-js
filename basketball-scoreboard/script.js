let leftScore=document.querySelector('.left-count')
let rightScore=document.querySelector('.right-count')
let leftCounter=0
let rightCounter=0

function leftOne(){
leftCounter+=1
leftScore.innerText=leftCounter
}
function leftTwo(){
    leftCounter+=2
    leftScore.innerText=leftCounter
}
function leftThree(){
    leftCounter+=3
    leftScore.innerText=leftCounter
}

function rightOne(){
rightCounter+=1
rightScore.innerText=rightCounter
}
function rightTwo(){
    rightCounter+=2
    rightScore.innerText=rightCounter
}
function rightThree(){
    rightCounter+=3
    rightScore.innerText=rightCounter
}

function reset(){
    leftScore.innerText=0
    leftCounter=0
    rightScore.innerText=0
    rightCounter=0
}