/// <reference path ="jquery-3.4.1.js" />
$(() => {
    const userPrice = +prompt("how much?")

    function addVat(userPrice) {
        try {
            validatePrice(userPrice)
            const vat = 17;
            const total = (userPrice / 100) * (vat + 100);
            return total
        } catch (err) {

            alert("retry- use a positive number")
        }
    }

    function validatePrice(userPrice, errorCallback) {
        if (userPrice < 1) {
            errorCallback({
                message: "Minimum must be lower than or equal to maximum"
            });
        }
        // if (userPrice == isNaN) {
        //     errorCallback({
        //         message: "try again with a number"
        //     });
        // }
    }
    alert(addVat(userPrice))

});