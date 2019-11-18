function findPrimes() {
    try {
        const min = +prompt("Enter minimum number: ");
        const max = +prompt("Enter maximum number: ");
        const primes = getPrimes(min, max);
        console.log(primes);
    }
    catch (err) {
        alert(err.message);
    }
}

function getPrimes(min, max) {
    if (min > max) {
        throw new Error("Minimum must be lower than or equal to maximum");
    }
    const primes = [];
    for (let i = min; i <= max; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
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

