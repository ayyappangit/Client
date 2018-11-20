$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3007/api/todo"
    }).then(function (data) {
        $('.todo-Name').append(data.TaskTitle);
        $('.todo-Desc').append(data.TaskDesc);
    });
});