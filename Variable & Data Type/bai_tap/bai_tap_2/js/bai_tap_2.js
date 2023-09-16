function convert(){
    let number = parseFloat(document.getElementById("number").value);
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;
    let result = 0;
    if ((from == "VND") && (to == "USD")) {
        result = number / 23000;
    }
    else if ((from == "USD") && (to == "VND")) {
        result = number * 23000
    }
    else {
        result = number;
    }
    document.getElementById("result").innerHTML = "Result = " + result + " " + to;
}