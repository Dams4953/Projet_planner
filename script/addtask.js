import { modificationLiPopup } from "./update.js";
import { time } from './time.js';
import { deleteTask } from "./delete.js";

export let addTask = (object) => {
    let liContainer;
    if (object.achevement == "todo"){
        liContainer = document.getElementById('list__container__todo');
    }
    else if (object.achevement == "doing"){
        liContainer = document.getElementById('list__container__doing');
    }
    else if (object.achevement == "done"){
        liContainer = document.getElementById('list__container__done');
    }
    
    let li = document.createElement('li');
    li.id = object.id;
    //ajout date et heure
    let idDateTime = new Date(object.idDate);
    let timeLeft = time(idDateTime);
    //fin du date et heure
    li.innerHTML = object.nom + ' - ' + timeLeft + ' <button type="button" class="delete-icon">🗑️</button>';
     // Debut creation du bouton de modification

     let buttonModification = document.createElement('button');
     buttonModification.innerHTML = "&#x270E;";
     buttonModification.className="button__Modification";
     li.append(buttonModification);
     buttonModification.addEventListener('click', modificationLiPopup);
     // Fin creation du bouton de modification
    liContainer.append(li);

    // écouteur évent suppression
    let deleteIcon = li.querySelector('.delete-icon');
    deleteIcon.addEventListener('click', deleteTask);

}



