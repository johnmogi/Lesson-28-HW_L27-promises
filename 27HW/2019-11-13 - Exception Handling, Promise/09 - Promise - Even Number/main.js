
function randomEvenNumber() {
    getRandomEvenNumber(100)
        .then(n => alert("Even Number: " + n))
        .catch(err => alert(err));
}

function getRandomEvenNumber(limit) {
    return new Promise((resolve, reject) => {
        const num = Math.floor(Math.random() * limit);
        if (num % 2 === 0) {
            resolve(num);
        }
        else {
            reject("Error. Can't create an even number :-(");
        }
    });
}
