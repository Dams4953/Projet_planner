import { modificationLiPopup } from "./update.js";
import { time } from './time.js';
import { functionDeleteTask } from "./delete.js";


export let addTask = (object) => {


        // Validation titre 3 à 256 caractères
        if (object.nom.length < 3 || object.nom.length > 256) {
            alert("The title must contain between 3 and 256 characters.");
            return;
        }

        // Validation description 5 à 1024
        if (object.description.length < 5 || object.description.length > 1024) {
            alert("The description must contain between 5 and 1024 characters.");
            return;
        }


        let liContainer;
        if (object.achevement == "todo") {
            liContainer = document.getElementById('list__container__todo');
        }
        else if (object.achevement == "doing") {
            liContainer = document.getElementById('list__container__doing');
        }
        else if (object.achevement == "done") {
            liContainer = document.getElementById('list__container__done');
        }

        let li = document.createElement('li');
        li.className = 'task'; // Adding 'task' class
        li.setAttribute('draggable', 'true'); // Making the task draggable
        li.id = object.id;

        let divButton = document.createElement('div');
        divButton.className = "div_button";
        let buttonSupp = document.createElement('button');
        buttonSupp.className = "delete-icon";
        buttonSupp.innerHTML = "🚯"
        divButton.append(buttonSupp);


        // Debut creation du bouton de modification
        let buttonModification = document.createElement('button');
        buttonModification.innerHTML = "&#x270E;";
        buttonModification.className = "button__Modification";
        divButton.append(buttonModification);
        // Fin creation du bouton de modification
        li.append(divButton);


        // Ajout date et heure
        let idDateTime = new Date(object.idDate);
        let timeLeft = time(idDateTime);

        let titreDiv = document.createElement('div');
        titreDiv.className = "div-titre";
        titreDiv.innerHTML = object.nom;
        li.append(titreDiv);

        let timeDiv = document.createElement('div');
        timeDiv.className = "div-time";
        liContainer.append(li);
        li.append(timeDiv);

        timeDiv.innerHTML = timeLeft;

        let div = document.createElement('div');
        div.className = "desciptionDiv";
        div.innerHTML = object.description;
        li.append(div);


        // Écouteur d'événement pour la suppression
        buttonSupp.addEventListener('click', functionDeleteTask);

        buttonModification.addEventListener('click', modificationLiPopup);

    };