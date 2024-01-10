
$(document).ready(function () {
    $(".task").on("click", function () {
        // Check if the task is already in the "Done" category
        if ($(this).parent().hasClass("done")) {
            alert("Task is already done!");
            return;
        }

        // Move the task to the next category
        $(this).appendTo($(this).parent().next().find("ul"));
    });
});