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
        console.log(this.price  * 0.17)
    //    let newPrice = this.price * 0.17
        
    }
}

let firstCologne = new Perfume ();
firstCologne.name = "Eau De JavaScript";
firstCologne.company = "microTransActive";
firstCologne.amount = 30;
firstCologne.gender = "Male";
firstCologne.price = 199;
firstCologne.vat()
// console.log(firstCologne)