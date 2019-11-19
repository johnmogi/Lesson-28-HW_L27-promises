/// <reference path="jquery-3.4.1.js" />

$(() => {
    // const colorArr = ["red", "green", "blue", "yellow", "magenta", "cyan", "black", "white", "gray" ]
 
    let numArray = []


    function getPrice(nums) {
        numArray = [1,2,3,10]
        getAverage(numArray);  
    
    }

    function getPrice2(nums) {
      numArray =[]
        getAverage(numArray);  
    }
 
    function getPrice3(nums) {
        numArray = null
          getAverage(numArray);  
      }
      function getPrice4(nums) {
        numArray = "";
          getAverage(numArray);  
      }
    function getAverage(average){
       
var total=0;
for(var i in numArray) { total += numArray[i]; }


try {
    if(numArray.length>0 || numArray != "" ){

        const avgNum = total / numArray.length
        alert("Success : the average num is: "+ avgNum)
return avgNum
    }
    else{
    
            throw new Error();
    
    }
}
catch (err) {
    alert("Error :  please try again, the numbers array is : " +  numArray)
    // console.log(numArray)
}
}



    $("#one").click(() => {
    getPrice();
});
$("#two").click(() => {
    getPrice2();
});
$("#three").click(() => {
    getPrice3();
});
$("#four").click(() => {
    getPrice4();
});
    }); //RF
    
