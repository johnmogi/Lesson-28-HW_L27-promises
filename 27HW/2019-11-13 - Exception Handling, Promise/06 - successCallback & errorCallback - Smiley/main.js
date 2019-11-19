
function showSmiley() {
    const type = +prompt("Enter smiley type (1 or 2)");
    getSmileyAsync(type, smiley => alert(smiley), err => alert("Error: " + err));
}

function getSmileyAsync(type, successCallback, errorCallback) {
    setTimeout(() => {
        if(type === 1) {
            successCallback(":-)");
        }
        else if(type === 2) {
            successCallback(":-(");
        }
        else {
            errorCallback("Smiley type can be 1 or 2");
        }
    }, 3000);
}


