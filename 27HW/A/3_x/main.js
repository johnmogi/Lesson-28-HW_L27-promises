/// <reference path="jquery-3.4.1.js" />

$(() => {
    // const colorArr = ["red", "green", "blue", "yellow", "magenta", "cyan", "black", "white", "gray" ]
    const userPrice = prompt("Ask for quote (vat+17% will be incl.)")

    function getPrice() {
        addVatToPrice(userPrice);   
    }
 
    function addVatToPrice(price){
        if(userPrice >0 && userPrice != isNaN ){
            const percent = (+userPrice *0.17)
         const total = +userPrice + percent
  
alert("the final price is : " +total)
            // let vat = percent/17 
        //    vat=  vat /10
        //     const sum= +userPrice + +vat
        //     alert(sum)
         }
         else{
             alert("please try again")
         }
    //     else{ 
        
        // $("body").css("background-color", userColor);
    //     }
    }

    getPrice();

    }); //RF
    
