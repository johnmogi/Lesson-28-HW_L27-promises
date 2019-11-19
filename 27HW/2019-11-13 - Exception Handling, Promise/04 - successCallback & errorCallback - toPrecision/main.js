function generateRandomNumberAsync() {
    getRandomNumAsync(10, n => alert("Random Number: " + n), err => alert("Error: " + err.message));
}

function getRandomNumAsync(limit, successCallback, errorCallback) {
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
}

