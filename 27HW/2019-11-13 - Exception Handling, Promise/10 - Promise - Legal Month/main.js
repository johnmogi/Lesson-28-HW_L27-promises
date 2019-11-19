function showMonthTotalDays() {
    const month = +prompt("Enter month (1 to 12)");
    totalDays(month)
        .then(days => alert(days))
        .catch(err => alert("Error: " + err));
}

function totalDays(month) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (month >= 1 && month <= 12) {
                if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
                    resolve(31);
                }
                else if(month === 4 || month === 6 || month === 9 || month === 11) {
                    resolve(30);
                }
                else {
                    resolve("28 or 29");
                }
            }
            else {
                reject("Month must be 1 to 12");
            }
        }, 2000);
    });
}