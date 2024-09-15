let value1=0;
let value2=0;
const countElement = document.getElementById("countt");
const additionbutton = document.getElementById("addition");
const substractionbutton = document.getElementById("substraction");
const multiplybutton = document.getElementById("multiply");
const divisionbutton = document.getElementById("division");
const modulusbutton = document.getElementById("modulus");
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
function inputValues() {
    value1 = parseFloat(input1.value) || 0;
    value2 = parseFloat(input2.value) || 0;
}
input1.addEventListener('input', inputValues);
input2.addEventListener('input', inputValues);
function additioncount(){
    const result = value1+value2;
    countElement.innerText = result;
}
additionbutton.addEventListener('click', additioncount);

function substractioncount(){
    const result = value1-value2;
    countElement.innerText = result;
}
substractionbutton.addEventListener('click', substractioncount);
function multiplycount(){
    const result = value1*value2;
    countElement.innerText = result;
}
multiplybutton.addEventListener('click', multiplycount);
function divisioncount(){
    const result = value1/value2;
    countElement.innerText = result;
}
divisionbutton.addEventListener('click', divisioncount);
function moduluscount(){
    const result = value1%value2;
    countElement.innerText = result;
}
modulusbutton.addEventListener('click', moduluscount);