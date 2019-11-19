/// <reference path="jquery-3.4.1.js" />

$(() => {
    const userPrice = prompt("Ask for quote (vat+17% will be incl.)")
    getPrice()
    

 

function getPrice(price) {
    try {
        if(userPrice >0 && userPrice != isNaN ){
            const percent = (+userPrice *0.17)
         const total = +userPrice + percent
  
alert("the final price is : " +total)
        }
        else{
        
                throw new Error();
        
        }
    }
    catch (err) {
        alert("Something is wrong, please try again")
    }
}


function addVatToPrice() {
    addVatToPrice(userPrice);   
}


    }); //RF