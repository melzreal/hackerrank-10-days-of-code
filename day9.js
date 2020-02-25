//html
{/* 
<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Binary Calculator</title>
        <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">

    </head>
    <body>
       <div id="res"></div>
        <div id="btns">
            <button id="btn0">0</button>
            <button id="btn1">1</button>
            <button id="btnClr">C</button>
            <button id="btnEql">=</button>
            <button id="btnSum">+</button>
            <button id="btnSub">-</button>
            <button id="btnMul">*</button>
            <button id="btnDiv">/</button>
        </div>
        
        <script src="js/binaryCalculator.js" type="text/javascript"></script>
        
        
    </body>
</html>
 */}
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnClr = document.getElementById("btnClr");
const btnEql = document.getElementById("btnEql");
const btnSum = document.getElementById("btnSub");
const btnSub = document.getElementById("btn0");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");
const res = document.getElementById("res");

let resultsCollection = '';

btn0.addEventListener("click", function (e) {
    e.preventDefault();

    resultsCollection += 0;
    res.innerHTML = resultsCollection;
})

btn1.addEventListener("click", function (e) {
    e.preventDefault();

    resultsCollection += 1;
    res.innerHTML = resultsCollection;
})

btnClr.addEventListener("click", function (e) {
    e.preventDefault();

    resultsCollection = ''
    res.innerHTML = resultsCollection;
})


function operandInsert(operand) {
    resultsCollection += operand;
    res.innerHTML = resultsCollection;
}

function calculateTotals() {
    //we can use a regex exp to check the index on the string which matches an operand
    //then use a case statement to act differently depending on which operand is returned
    let computation = '';
    const operand = res.innerHTML.match(/(\-|\+|\/|\*)(?=[^\-\+\/\*]*$)/g);
    //get two arrays of numbers, one before and one after the operand
    const splitArr = resultsCollection.split(operand);
    const firstHalf = splitArr[0];
    const secondHalf = splitArr[1];

    console.log(firstHalf);
    console.log(secondHalf);


    switch (operand.toString()) {
        case '+':
            // computation = prev + current
            computation = "plus"
            break
        case '-':
            // computation = prev - current
            computation = "minus"
            break
        case '*':
            computation = "multiply"
            // computation = prev * current
            break
        case '/':
            // computation = prev / current
            computation = "divide"
            break

    }
    return console.log(computation);


}

