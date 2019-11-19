/// <reference path="jquery-3.4.1.js" />

$(() => {


function printPrime(min, max){
let primaryArr = []
    const minVal = parseInt(Math.sqrt(min));
    const maxVal = parseInt(Math.sqrt(max));
for (let i = minVal; i < maxVal; i++) {
    console.log( -- i)
    if (i %2 === 0){
        primaryArr.push(i)
    }
    
}

console.log(primaryArr)

}


    $("#one").click(() => {
        const oneNum = parseInt(prompt("give me the smaller number"));
        const twoNum = parseInt(prompt("give me the bigger number"));

        printPrime(oneNum,twoNum)
});

    }); //RF
    
 