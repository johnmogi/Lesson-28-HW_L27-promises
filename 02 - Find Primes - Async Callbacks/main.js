function findPrimes() {
    const min = +prompt("Enter minimum number: ");
    const max = +prompt("Enter maximum number: ");
    getPrimes(min, max, totalPrimes => console.log(totalPrimes), err => alert(err.message));
}

function getPrimes(min, max, successCallback, errorCallback) {
    setTimeout(() => {

        if (min > max) {
            errorCallback({ message: "Minimum must be lower than or equal to maximum" });
            return;
        }
        const primes = [];
        for (let i = min; i <= max; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }
        successCallback(primes);
        
    }, 2000);
}

function isPrime(n) {

    n = Math.abs(n); // ערך מוחלט

    const sqrt = Math.sqrt(n);

    for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    if (n === 1) {
        return false;
    }

    return true;
}

