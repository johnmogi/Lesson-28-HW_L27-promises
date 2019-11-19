
function showSmiley() {
    const type = +prompt("Enter smiley type (1 or 2)");
    getSmileyAsync(type)
        .then(smiley => alert(smiley))
        .catch(err => alert("Error: " + err));
}

function getSmileyAsync(type) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (type === 1) {
                resolve(":-)");
            }
            else if (type === 2) {
                resolve(":-(");
            }
            else {
                reject("Smiley type can be 1 or 2");
            }
        }, 3000);
    });
}


