let demo = document.querySelector('#demo');
let spanRed = document.querySelector('#spanRed');
let spanGreen = document.querySelector('#spanGreen');
let spanBlue = document.querySelector('#spanBlue');
function changeRed(val){
    spanRed.innerHTML = val;
    let green = document.querySelector('#green').value;
    let blue = document.querySelector('#blue').value;
    demo.style.color=`rgb(${val},${green},${blue})`
}
function changeGreen(val){
    spanGreen.innerHTML=val;
    let red = document.querySelector('#red').value;
    let blue = document.querySelector('#blue').value;
    demo.style.color=`rgb(${red},${val},${blue})`
}
function changeBlue(val){
    spanBlue.innerHTML=val;
    let green = document.querySelector('#green').value;
    let red = document.querySelector('#red').value;
    demo.style.color=`rgb(${red},${green},${val})`
}
