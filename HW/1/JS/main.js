$(() => {
    let status = true;

    function changeBodyColor(color, status) {
        if (status = false) {
            alert("nope")
        }
        $("body").css("background", color);
        // bodyMy.bgcolor = color;
    }
    const userColor = prompt("please choose a color: red, green, blue, yellow, magenta, cyan, black, white, gray")


    function validColor(userColor, status) {
        const colorArray = ["red", "green", "blue", "yellow", "magenta", "cyan", "black", "white", "gray"]
        for (let i = 0; i < colorArray.length; i++) {
            if (colorArray[i] == userColor) {
                const newColor = userColor
                return newColor
            } else {
                alert("error")
                status = false
                return false
            }
        }
    }
    validColor(userColor, status)
    changeBodyColor(userColor, status);
});