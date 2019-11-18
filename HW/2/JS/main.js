$(() => {
    const userPrice = prompt("how much?")

    function addVat(userPrice) {
        validatePrice(userPrice)
        const vat = 17;
        return (userPrice / 100) * (vat + 100);
    }

    function validatePrice(userPrice) {
        if (userPrice < 1) {
            alert("retry- use a positive number")
            return false
        }
    }
    console.group(addVat(userPrice));

});