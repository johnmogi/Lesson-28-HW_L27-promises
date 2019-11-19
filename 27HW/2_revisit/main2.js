
function addVat() {
    const userNum = +prompt("Add vat to this number:");
    addVatToNumber(userNum, response => alert(response), err => alert("Error: " + err));
}

function addVatToNumber(userNum, successCallback, errorCallback) {
    setTimeout(() => {
        if(userNum >= 1) {
            successCallback(userNum + (userNum * 0.17) );
        }
     
        else {
            errorCallback("wrong number or something else- try again");
        }
   
    }, 3000);
}


