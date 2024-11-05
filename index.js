let countEl = document.getElementById("count")
let saveEl = document.getElementById("save-log")
let count = 0

function increment(){
    count++;
    countEl.innerText = count;
}
function reset(){
    count=0;
    countEl.innerText = count;
}
function save(){
    let countStr = count + " - "
    // saveEl.innerText += countStr //Wont Return Hidden Elements Like Space 
    saveEl.textContent += countStr 
}
function clearSave(){
    saveEl.innerText = "Saved :- "
}
