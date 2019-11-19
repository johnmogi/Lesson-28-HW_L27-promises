function addVat() {
    userPrice = +prompt("desired amount to add vat to:")
    if (userPrice < 1) {
        alert("error, desired number is too small")
        return false
    }
    addVatNumber(userPrice, err => alert("Error: " + err.message));

}

function addVatNumber(numberU, successCallback, errorCallback) {
    setTimeout(() => {
        try {

            const percent = (numberU * 0.17)

            const n = +numberU + percent
            alert("Total is: " + n)
            // return total
            successCallback();
        } catch (err) {
            errorCallback(err);
        }
    }, 3000);
}