/// <reference path="jquery-3.4.1.js" />

function getUsers() {
    getAjaxData(
        "https://jsonplaceholder.typicode.com/users",
        users => {
            for(const u of users) {
                $("body").append("<br>" + u.name);
            }
        },
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


