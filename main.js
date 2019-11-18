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
        var vatPrice = this.price + (this.price * 0.17);
        console.log("this perfume ( " + this.name + " ) costs: " + vatPrice);
        return vatPrice;
        //    let newPrice = this.price * 0.17
    };
    return Perfume;
}());
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, adress, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.adress = adress;
        this.salary = salary;
    }
    Employee.prototype.socialSecurity = function () {
        var tenPercent = this.salary / 10;
        return tenPercent;
        //    let newPrice = this.price * 0.17
    };
    Employee.prototype.display = function () {
        document.write("First-Name: " + this.firstName + "<br/>"
            + "Last-Name: " + this.lastName + "<br/>"
            + "Adress: " + this.adress + "<br/>"
            + "Salary: " + this.salary + "$" + "<br/>"
            + "Social security: " + this.socialSecurity(this.salary) + "$" + "<br/>");
    };
    return Employee;
}());
var firstCologne = new Perfume();
firstCologne.name = "Eau De JavaScript";
firstCologne.company = "microTransActive";
firstCologne.amount = 30;
firstCologne.gender = "Male";
firstCologne.price = 100;
firstCologne.vat();
// console.log(firstCologne)
var scndCologne = new Perfume();
scndCologne.name = "type Scripte Pour Elle";
scndCologne.company = "Javel";
scndCologne.amount = 99;
scndCologne.gender = "female";
scndCologne.price = 250;
scndCologne.vat();
var frstEmployee = new Employee();
frstEmployee.firstName = "George";
frstEmployee.lastName = "Burns";
frstEmployee.salary = 999999;
frstEmployee.adress = "Pardes Hanna";
frstEmployee.display();
frstEmployee.socialSecurity(frstEmployee.salary);
var scndEmployee = new Employee();
scndEmployee.firstName = "Moana";
scndEmployee.lastName = "a lot";
scndEmployee.salary = 666;
scndEmployee.adress = "know where";
scndEmployee.display();
