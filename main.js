"use strict";

function clr(){
    document.getElementById('screen').textContent = "";
} 

function display(value){
    document.getElementById('screen').textContent += value;
}

var ans;
function calculation(){
    let operand = document.getElementById('screen').textContent;
    ans = eval(operand);
    document.getElementById('screen').textContent = ans;
}