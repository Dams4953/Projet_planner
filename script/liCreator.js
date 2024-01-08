import { time } from './time.js';
import { deleteTask } from "./delete.js";

export let liCreator = () => {
    let liContainer = document.getElementById('list__container');
    let tab = JSON.parse(localStorage.getItem('Tableau') || '[]');

    for (let elem of tab) {
        let li = document.createElement('li');
        li.id = elem.id;
        //ajout date et heure
        let idDateTime = new Date(elem.idDate);
        let timeLeft = time(idDateTime);
        //fin du date et heure
        li.innerHTML = elem.nom + ' - ' + timeLeft + ' <button type="button" class="delete-icon">🗑️</button>';
        liContainer.append(li);
        // Debut creation du bouton de modification

        let buttonModification = document.createElement('button');
        buttonModification.innerHTML = "&#x270E;";
        buttonModification.className="button__Modification";
        li.append(buttonModification);

        // Fin creation du bouton de modification

        // Écouteur d'événement pour la suppression
        let deleteIcon = li.querySelector('.delete-icon');
        deleteIcon.addEventListener('click', deleteTask);
    }
}