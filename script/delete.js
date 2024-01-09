
export function functionDeleteTask(event) {
    const taskElement = event.target.parentElement.parentElement;
    const taskId = taskElement.id;

    taskElement.remove();

    let tasks = JSON.parse(localStorage.getItem('Tableau'));
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('Tableau', JSON.stringify(tasks));
}


  

