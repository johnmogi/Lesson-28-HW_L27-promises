/// <reference path="jquery-3.4.1.js" />

$(() => {

    const userPrice = prompt("Ask for quote (vat+17% will be incl.)")
  

 
    $("#one").click(() => {
        getPrice()
    
    });

    $("#two").click(() => {
        getPriceAsync()
    });  

function getPrice(price, successCallback, errorCallback) {
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




function getPriceAsync() {
    getPrice( 
        success => console.log("success"),
        err => alert("Error: " + err.status)
    );
}

function getAjaxData(url, successCallback, errorCallback) {
    $.ajax({
        method: "GET",
        url: url, 
        error: err => errorCallback(err),
        success: response => successCallback(response)
    });
}



    }); //RF