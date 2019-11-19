/// <reference path="jquery-3.4.1.js" />

function syncCall() {
    const obj = getObject();
    const divObject = document.getElementById("divObject");
    divObject.innerHTML = `
        User ID: ${obj.userId}<br>
        ID: ${obj.id}<br>
        Title: ${obj.title}<br>
        completed: ${obj.completed}`;
}

function getObject() {
    return {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    };
}

function asyncCall() {
    getAjaxData("https://jsonplaceholder.typicode.com/todos/1", obj => {
        const divObject = document.getElementById("divObject");
        divObject.innerHTML = `
            User ID: ${obj.userId}<br>
            ID: ${obj.id}<br>
            Title: ${obj.title}<br>
            completed: ${obj.completed}`;
    });
}

function getAjaxData(url, callback) {
    $.ajax({
        method: "GET",
        url: url,
        error: err => alert("Error: " + err.message),
        success: obj => callback(obj)
    });
}

