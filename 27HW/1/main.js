/// <reference path="jquery-3.4.1.js" />

$(() => {
    // const colorArr = ["red", "green", "blue", "yellow", "magenta", "cyan", "black", "white", "gray" ]
    const userColor = prompt("Choose a color: red, green, blue, yellow, magenta, cyan, black, white, gray")

    function getColor() {
        colorBg("userColor");   
    }
 
    function colorBg(color){
        // console.log(color, userColor)
        if(userColor === "red"|| userColor === "green"|| userColor === "blue"||
        userColor === "yellow"|| userColor === "magenta"|| userColor === "cyan"||
        userColor === "black"|| userColor === "white"|| userColor === "gray"
         ){alert("ok") }
         else{
             alert("please choose one of the offered colors")
         }
    //     else{ 
        $("body").css("background-color", userColor);
    //     }
    }

    getColor();

    }); //RF
    
