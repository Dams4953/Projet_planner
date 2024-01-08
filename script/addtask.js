import { modificationLiPopup } from "./update.js";
import { time } from './time.js';
import { deleteTask } from "./delete.js";

export let addTask = (object) => {



    // Validation titre 3 à 256 caractères
    if (object.nom.length < 3 || object.nom.length > 256) {
        alert("Le titre doit contenir entre 3 et 256 caractères.");
        return;
    }

     // Validation description 5 à 1024
     if (object.description.length < 5 || object.description.length > 1024) {
        alert("La description doit contenir entre 5 et 1024 caractères.");
        return;
    }


    let liContainer = document.getElementById('list__container');
    let li = document.createElement('li');
    li.id = object.id;
    

    // Ajout date et heure
    let idDateTime = new Date(object.idDate);
    let timeLeft = time(idDateTime);

    li.innerHTML = object.nom + ' - ' + timeLeft + ' <button type="button" class="delete-icon">🗑️</button>';

    // Création du bouton de modification
    let buttonModification = document.createElement('button');
    buttonModification.innerHTML = "&#x270E;";
    buttonModification.className = "button__Modification";
    li.append(buttonModification);
    buttonModification.addEventListener('click', modificationLiPopup);

    liContainer.append(li);

    // Écouteur d'événement pour la suppression
    let deleteIcon = li.querySelector('.delete-icon');
    deleteIcon.addEventListener('click', deleteTask);
}
