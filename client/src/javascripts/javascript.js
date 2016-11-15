$(document).ready(function() {

})

function loadTodo() {
    let html = ''
    $.ajax({
        url: `http://localhost:3000/api/todo`,
        method: "get",
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].status === true) {
                    var element = `<span class="glyphicon glyphicon-ok" style="color:green"></span>`
                    var btnToggle = `<button type="button" class="btn btn-danger"><span class="glyphicon glyphicon-remove"></span></button>`

                } else {
                    var element = `<span class="glyphicon glyphicon-remove" style="color:red"></span>`
                    var btnToggle = `<button type="button" class="btn btn-success"><span class="glyphicon glyphicon-ok"></span></button>`
                }
                html += `
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-4 col-sm-2">
                                <p><strong>Task :</strong></p>
                                <p>${data[i].todo}</p>
                            </div>
                            <div class="col-md-4 col-sm-2">
                                <p><strong>Status :</strong></p>
                                <p>${element}</p>
                            </div>
                            <div class="col-md-4 col-sm-2">
                                <p><strong>Actions :</strong></p>
                                <span>
                                <button type="button" class="btn btn-primary" onclick="formEdit(${data[i].todo_id})">Edit Task  <span class="glyphicon glyphicon-edit"></span></button>
                                ${btnToggle}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                `
            }
            $('#main-container').append(html)

        }
    })

}

function createTodo() {

    html += `
  <form>
      <div class="form-group">
          <label for="formGroupExampleInput">Example label</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
      </div>
      <div class="form-group">
          <label for="formGroupExampleInput2">Another label</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
      </div>
  </form>

  `
}

function formEdit(parameter) {
    $('#formForEdit').remove()
    $.ajax({
        url: `http://localhost:3000/api/todo/${parameter}`,
        method: "get",
        success: function(data) {
            console.log(data);
            html = ''
            html += `
          <form id='formForEdit'>
              <div class="form-group">
                  <label for="form-edit-task">Edit Task</label>
                  <input type="text" class="form-control" id="form-edit-task" value="${data[0].todo}">
              </div>
              <div class="form-group">
              <button type="button" class="btn btn-primary" onclick=functionEdit(${data[0].todo_id})>Submit  <span class="glyphicon glyphicon-edit"></span></button>
              </div>
          </form>
          `
            $('#main-container').append(html)
        }
    })
}

function functionEdit(parameter) {
    let newValue = $('#form-edit-task').val()
    $.ajax({
        url: `http://localhost:3000/api/todo/${parameter}`,
        method: 'put',
        data: {
            todo: newValue
        },
        success: function(data) {
            $('#formForEdit').remove()
            $('#main-container').empty()
            loadTodo()
        }
    })
}
