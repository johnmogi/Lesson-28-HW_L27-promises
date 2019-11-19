/// <reference path ="jquery-3.4.1.js" />
$(() => {
    const userPrice = +prompt("how much?")

    function addVat(userPrice) {
        try {
            if (userPrice >= 1) {
                console.log(userPrice + 10)
            }
        } catch (err) {
            if (userPrice < 1) {
                console.log("something went wrong")

            }


        }
    }
    addVat(userPrice)
});