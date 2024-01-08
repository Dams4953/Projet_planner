export let deleteTask = () => {


    function functionDeleteTask(event) {
        event.preventDefault();
        const taskElement = event.target.parentElement;
        const taskId = taskElement.id;

        taskElement.remove();

        let tasks = JSON.parse(localStorage.getItem('Tableau'));
        tasks = tasks.filter(task => task.id !== taskId);
        localStorage.setItem('Tableau', JSON.stringify(tasks));
    }


    function initialDeleteFunction() {
        const deleteIcons = document.querySelectorAll('.delete-icon');

        deleteIcons.forEach(icon => {
            icon.addEventListener('click', functionDeleteTask);
        });
    }

    initialDeleteFunction();

}

