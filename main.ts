class Perfume  {
    public name: string;
    public company: string;
    public amount: number;
    public gender: string;
    public price: number;
    // private cogenderlor: string = "Black";

    
    public constructor(name: string, company: string, amount: number, gender: string, price: number) {
        this.name = name;
        this.company = company;
        this.amount = amount;
        this.gender = gender;
        this.price = price;
    }
    public vat() {
        let vatPrice = this.price + (this.price  * 0.17)
        console.log("this perfume ( " + this.name + " ) costs: " + vatPrice)
        return vatPrice
     
    //    let newPrice = this.price * 0.17
        
    }
}
class Employee  {
    public firstName: string;
    public lastName: string;
    public adress: string;
    public salary: number;

public constructor(firstName: string, lastName: string, adress: string, salary: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.adress = adress;
    this.salary = salary;

}
public display() : void {
document.write(
    "First Name" + this.firstName + `<br/>`
   + "Last Name" + this.lastName + `<br/>`
   + "Adress" + this.adress + `<br/>`
   + "Salary" + this.salary + `<br/>`
)
}
}
let firstCologne = new Perfume ();
firstCologne.name = "Eau De JavaScript";
firstCologne.company = "microTransActive";
firstCologne.amount = 30;
firstCologne.gender = "Male";
firstCologne.price = 100;
firstCologne.vat()
// console.log(firstCologne)
let scndCologne = new Perfume ();
scndCologne.name = "type Scripte Pour Elle";
scndCologne.company = "Javel";
scndCologne.amount = 99;
scndCologne.gender = "female";
scndCologne.price = 250;
scndCologne.vat()

let frstEmployee = new Employee ();
frstEmployee.firstName = "George";
frstEmployee.lastName = "Burns";
frstEmployee.salary = 999999;
frstEmployee.adress = "Pardes Hanna";
frstEmployee.display()

let scndEmployee = new Employee ();
scndEmployee.firstName = "Moana";
scndEmployee.lastName = "a lot";
scndEmployee.salary = 666;
scndEmployee.adress = "know where";
scndEmployee.display()