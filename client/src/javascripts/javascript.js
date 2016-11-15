$(document).ready(function() {

})

function loadTodo() {
    let html = ''
    $.ajax({
        url: `http://localhost:3000/api/todo`,
        method: "get",
        success: function(data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                html += ``
            }
            $('#all_question').append(html)

        }
    })

}

function createTodo() {
    var vm = new Vue({
        el: '#form-todo'
    })

    axios.post('http://localhost:3000/api/todo', {
            todo:
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
}
