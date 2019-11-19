function feedArr1() {
    const numArray = [1, 2, 3, 4]

    checkArrAverage(numArray, response => alert(numArray + " average is : " + response), err => alert("Error: " + err));
}

function feedArr2() {
    const numArray = []
    checkArrAverage(numArray, response => alert(response), err => alert("Error: it appears to be empty" + err));
}

function feedArr3() {
    const numArray = null
    checkArrAverage(numArray, response => alert(response), err => alert("Error: it appears to be null (:" + err));
}

function feedArr4() {
    const numArray = "empty Array"
    checkArrAverage(numArray, response => alert(response), err => alert("Error: it appears to be a string" + err));
}

function checkArrAverage(numArray, successCallback, errorCallback) {
    setTimeout(() => {
        if (numArray.length > 0 || numArray == []) {
            let total = 0;
            for (var i in numArray) {
                total += numArray[i];
            }

            // if(numArray.length>0 || numArray != "" ){

            const avgNum = total / numArray.length
            successCallback(avgNum);

        } else {
            errorCallback("wrong number or something else- try again");
        }

    }, 3000);
}