var Perfume = /** @class */ (function () {
    // private cogenderlor: string = "Black";
    function Perfume(name, company, amount, gender, price) {
        this.name = name;
        this.company = company;
        this.amount = amount;
        this.gender = gender;
        this.price = price;
    }
    Perfume.prototype.vat = function () {
        console.log(this.price * 0.17);
        //    let newPrice = this.price * 0.17
    };
    return Perfume;
}());
var firstCologne = new Perfume();
firstCologne.name = "Eau De JavaScript";
firstCologne.company = "microTransActive";
firstCologne.amount = 30;
firstCologne.gender = "Male";
firstCologne.price = 199;
firstCologne.vat();
// console.log(firstCologne)
