function generateRandomNumberAsync() {
    // getRandomNumAsync(10, x => alert("Random Number: " + x), err => alert("Error: " + err.message));
    
    // const myPromise = getRandomNumAsync(-10);
    // myPromise.then(x => alert("Random Number: " + x));
    // myPromise.catch(err => alert("Error: " + err.message));

    getRandomNumAsync(-10)
        .then(x => alert("Random Number: " + x))
        .catch(err => alert("Error: " + err.message));
}

function getRandomNumAsync(limit) {
    return new Promise((successCallback, errorCallback) => {
        setTimeout(() => {
            try {
                const n = Math.floor(Math.random() * limit);
                Math.PI.toPrecision(limit); // הדמיה למצב שבו יש קריסה
                successCallback(n);
            }
            catch (err) {
                errorCallback(err);
            }
        }, 3000);
    });
}

