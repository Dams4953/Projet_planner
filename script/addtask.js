export let addTask = (object) =>{
    let liContainer = document.getElementById('list__container');
    let li = document.createElement('li');
    li.id = object.id;
    li.innerHTML = object.nom;
    liContainer.append(li);
}