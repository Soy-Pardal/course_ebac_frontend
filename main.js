const listTasks = []

function createMessage(text, type) {
    let message = $(`
    <div style="display:none;" class="statusMessage ${type}">
        <span>
        ${text}
        </span>
    </div>`)
    $('h1').after(message);
    message.slideDown();
    setTimeout(function () {
        message.slideUp(function () {
            message.remove();
        });
    }, 5000);
}

$(document).ready(function () {



    $('#taskForm').on('submit', function (e) {
        e.preventDefault()
    
        const taskDescription = $("#taskInput").val()
        if (listTasks.includes(taskDescription)) {
            createMessage(`A tarefa ${taskDescription} já existe!`, 'falha')
            return
        } else {
            listTasks.push(taskDescription)
            createMessage(`A tarefa ${taskDescription} foi adicionada com sucesso!`, 'sucesso')
            const task = $(`<li style="display:none;">${taskDescription}</li>`)
            task.appendTo('ul')
            task.fadeIn(500)
        }
    
        $("#taskInput").val('')
    })
    
    $('ul').on('click', 'li', function (e) {
        const isStrikethrough = $(this).css('text-decoration').includes('line-through');
        $(this).css('text-decoration', isStrikethrough ? 'none' : 'line-through');
    });






});

