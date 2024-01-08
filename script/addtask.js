//import des fichiers
import { time } from './time.js';
import { deleteTask } from "./delete.js";

export let addTask = (object) => {

    let liContainer = document.getElementById('list__container');
    let li = document.createElement('li');
    li.id = object.id;
    //ajout date et heure
    let idDateTime = new Date(object.idDate);
    let timeLeft = time(idDateTime);
    //fin du date et heure
    li.innerHTML = object.nom + ' - ' + timeLeft + ' <button type="button" class="delete-icon">🗑️</button>';
    liContainer.append(li);

    // écouteur évent suppression
    let deleteIcon = li.querySelector('.delete-icon');
    deleteIcon.addEventListener('click', deleteTask);

}



