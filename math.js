window.onload = function(){

const inputOnes = ["num1", "num5", "num9", "num13", "num17", "num21", "num25", "num29", "num33" ];
const inputTwos = ["num2", "num6", "num10", "num14", "num18", "num22", "num26", "num30", "num34" ];
const inputThrees = ["num3", "num7", "num11", "num15", "num19", "num23", "num27", "num31", "num35" ];
const inputFives  = ["num4", "num8", "num12", "num16", "num20", "num24", "num28", "num32", "num36" ];
const inputTens = ["num37", "num40", "num43", "num46", "num49", "num52", "num55", "num58", "num61" ];
const inputTwenties = ["num38", "num41", "num44", "num47", "num50", "num53", "num56", "num59", "num62" ];
const inputThirties = ["num39", "num42", "num45", "num48", "num51", "num54", "num57", "num60", "num63" ];
const submitButton = document.getElementById("submitButton");
const set11 = document.getElementById("total2");
const set22 = document.getElementById("total3");
const set33 = document.getElementById("total4");
const set44 = document.getElementById("total5");
const set55 = document.getElementById("total6");
const set66 = document.getElementById("total7");
const set77 = document.getElementById("total8");
const set88 = document.getElementById("total1");

submitButton.addEventListener("click", () => {

    let set1 = 0;
    let set2 = 0;
    let set3 = 0;
    let set5 = 0;
    let set10 = 0;
    let set20 = 0;
    let set30 = 0;

    for(let i=0; i < inputOnes.length; i++) {
        const ones = parseFloat(document.getElementById(inputOnes[i]).value) || 0;
        const two = parseFloat(document.getElementById(inputTwos[i]).value) || 0;
        const three = parseFloat(document.getElementById(inputThrees[i]).value) || 0;
        const five = parseFloat(document.getElementById(inputFives[i]).value) || 0;
        const ten = parseFloat(document.getElementById(inputTens[i]).value) || 0;
        const twenty = parseFloat(document.getElementById(inputTwenties[i]).value) || 0;
        const thirty = parseFloat(document.getElementById(inputThirties[i]).value) || 0;

        set1 += ones;
        set2 += two * 2;
        set3 += three * 3;
        set5 += five * 5;
        set10 += ten * 10;
        set20 += twenty * 20;
        set30 += thirty * 30;

    }

     total = set1 + set2 + set3 + set5 + set10 + set20 + set30;

    set11.textContent = set1;
    set22.textContent = set2;
    set33.textContent = set3;
    set44.textContent = set5;
    set55.textContent = set10;
    set66.textContent = set20;
    set77.textContent = set30;
    set88.textContent = total;



});
};
