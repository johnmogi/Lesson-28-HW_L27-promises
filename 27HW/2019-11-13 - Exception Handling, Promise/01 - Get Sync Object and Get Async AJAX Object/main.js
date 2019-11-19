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
    const ajax = new XMLHttpRequest();
    ajax.open("GET", url);
    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                callback(JSON.parse(ajax.responseText));
            }
        }
    };
    ajax.send();
}
