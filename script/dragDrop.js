import $ from 'jquery';

document.addEventListener('DOMContentLoaded', (event) => {
    function makeTasksDraggable() {
        $('.task').attr('draggable', 'true').off('dragstart').on('dragstart', function (event) {
            event.originalEvent.dataTransfer.setData('text/plain', event.target.id);
        });
    }

    makeTasksDraggable();

    $('.toDo_list, .doing_list, .done_list').on('dragover', function (event) {
        event.preventDefault();
    });

    $('.toDo_list, .doing_list, .done_list').on('drop', function (event) {
        event.preventDefault();
        var taskId = event.originalEvent.dataTransfer.getData('text/plain');
        $('#' + taskId).appendTo($(event.target));
        makeTasksDraggable();
    });
});

export { makeTasksDraggable };
