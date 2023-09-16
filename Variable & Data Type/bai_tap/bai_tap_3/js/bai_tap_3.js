function add(){
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("result").innerHTML = "Result Addition: " +(number1 + number2);
}
function sub(){
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("result").innerHTML = "Result Subtraction: " +(number1 - number2);
}
function mul(){
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("result").innerHTML = "Result Multiplication: " +(number1 * number2);
}
function div(){
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("result").innerHTML = "Result Division: " +(number1 / number2);
}