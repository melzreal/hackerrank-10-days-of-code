//buttons container problem
//when clicking on button 5, rotate them clockwise

const buttonFiveSelector = document.getElementById("btn5")

buttonFiveSelector.addEventListener("click", toggleButtons);

function toggleButtons() {

    let aButton = document.getElementById("btn1").innerText;
    let bButton = document.getElementById("btn2").innerText;
    let cButton = document.getElementById("btn3").innerText;
    let dButton = document.getElementById("btn4").innerText;
    let eButton = document.getElementById("btn6").innerText;
    let fButton = document.getElementById("btn7").innerText;
    let gButton = document.getElementById("btn8").innerText;
    let hButton = document.getElementById("btn9").innerText;


    let btnArr = [aButton, bButton, cButton, dButton, eButton, fButton, gButton, hButton];
    let arr = [...btnArr.slice(btnArr.length - 1), ...btnArr.slice(0, btnArr.length - 1)];

    //we could iterate forwards once and backwards on the second loop, making sure
    document.getElementById('btn1').innerText = arr[0];
    document.getElementById('btn2').innerText = arr[1];
    document.getElementById('btn3').innerText = arr[2];
    document.getElementById('btn6').innerText = arr[3];
    document.getElementById('btn9').innerText = arr[4];
    document.getElementById('btn8').innerText = arr[5];
    document.getElementById('btn7').innerText = arr[6];
    document.getElementById('btn4').innerText = arr[7];




}

