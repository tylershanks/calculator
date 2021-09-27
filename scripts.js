console.log("this is gonna be a calculator");

let displayValue = "";
let firstValue = "";
let secondValue = "";
let operator = "";
let posNeg = 1;


document.getElementById("back").addEventListener("click", buttonBack);
document.getElementById("7").addEventListener("click", button7);
document.getElementById("4").addEventListener("click", button4);
document.getElementById("1").addEventListener("click", button1);
document.getElementById("posneg").addEventListener("click", buttonPosneg);
document.getElementById("ce").addEventListener("click", buttonCe);
document.getElementById("8").addEventListener("click", button8);
document.getElementById("5").addEventListener("click", button5);
document.getElementById("2").addEventListener("click", button2);
document.getElementById("0").addEventListener("click", button0);
document.getElementById("clear").addEventListener("click", buttonClear);
document.getElementById("9").addEventListener("click", button9);
document.getElementById("6").addEventListener("click", button6);
document.getElementById("3").addEventListener("click", button3);
document.getElementById(".").addEventListener("click", buttonDecimal);
document.getElementById("/").addEventListener("click", buttonDivide);
document.getElementById("*").addEventListener("click", buttonMultiply);
document.getElementById("-").addEventListener("click", buttonSubtract);
document.getElementById("+").addEventListener("click", buttonAdd);
document.getElementById("=").addEventListener("click", buttonEquals);


function buttonBack() {
    console.log("back pressed");
    displayValue = displayValue.slice(0, displayValue.length -1);
    document.getElementById('displayValue').innerHTML = displayValue;
}
function button7() {
    console.log("7 pressed");
    displayValue = displayValue + '7';
    document.getElementById('displayValue').innerHTML = displayValue;
}
function button4() {
    console.log("4 pressed");
    displayValue = displayValue + '4';
    document.getElementById('displayValue').innerHTML = displayValue;
}
function button1() {
    console.log("1 pressed");
    displayValue = displayValue + '1';
    document.getElementById('displayValue').innerHTML = displayValue;
}
function buttonPosneg() {
    console.log("+/- pressed");

    if (posNeg == 1){
        displayValue = displayValue*-1;
        document.getElementById('displayValue').innerHTML = displayValue;
        posNeg = 0;
    }
    else {
        displayValue = displayValue*-1;
        document.getElementById('displayValue').innerHTML = displayValue;
        posNeg = 1;
    }

    

}
function buttonCe() {
    console.log("clear entry pressed");
    displayValue = "";
    document.getElementById('displayValue').innerHTML = displayValue;
}
function button8() {
    console.log("8 pressed");
    displayValue = displayValue + '8';
    document.getElementById('displayValue').innerHTML = displayValue;
}
function button5() {
    console.log("5 pressed");
    displayValue = displayValue + '5';
    document.getElementById('displayValue').innerHTML = displayValue;
}
function button2() {
    console.log("2 pressed");
    displayValue = displayValue + '2';
    document.getElementById('displayValue').innerHTML = displayValue;
}
function button0() {
    console.log("0 pressed");
    displayValue = displayValue + '0';
    document.getElementById('displayValue').innerHTML = displayValue;
}
function buttonClear() {
    console.log("clear pressed");
    firstValue = "";
    secondValue = "";
    displayValue = "";
    document.getElementById('displayValue').innerHTML = displayValue;
}
function button9() {
    console.log("9 pressed");
    displayValue = displayValue + '9';
    document.getElementById('displayValue').innerHTML = displayValue;
}
function button6() {
    console.log("6 pressed");
    displayValue = displayValue + '6';
    document.getElementById('displayValue').innerHTML = displayValue;
}
function button3() {
    console.log("3 pressed");
    displayValue = displayValue + '3';
    document.getElementById('displayValue').innerHTML = displayValue;
}
function buttonDecimal() {
    console.log(". pressed");
    displayValue = displayValue + '.';
    document.getElementById('displayValue').innerHTML = displayValue;
}
function buttonDivide() {
    console.log("/ pressed");
    firstValue = displayValue;
    displayValue = "";
    operator = "divide";
    document.getElementById('displayValue').innerHTML = displayValue;
}
function buttonMultiply() {
    console.log("* pressed");
    firstValue = displayValue;
    displayValue = "";
    operator = "multiply";
    document.getElementById('displayValue').innerHTML = displayValue;
}
function buttonSubtract() {
    console.log("- pressed");
    firstValue = displayValue;
    displayValue = "";
    operator = "subtract";
    document.getElementById('displayValue').innerHTML = displayValue;
}
function buttonAdd() {
    console.log("+ pressed");
    firstValue = displayValue;
    displayValue = "";
    operator = "add";
    document.getElementById('displayValue').innerHTML = displayValue;
}
function buttonEquals() {
    console.log("= pressed");
    secondValue = displayValue;
    calculate(operator)
    document.getElementById('displayValue').innerHTML = displayValue;
}



function calculate(operator) {
    if (operator == "add") {
        displayValue = parseInt(firstValue) + parseInt(secondValue);
    }
    else if (operator == "subtract") {
        displayValue = firstValue - secondValue;
    }
    else if (operator == "divide") {
        displayValue = firstValue / secondValue;
    }
    else if (operator == "multiply") {
        displayValue = firstValue * secondValue;
    }


}