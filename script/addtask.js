import { modificationLiPopup } from "./update.js";
import { time } from './time.js';
import { functionDeleteTask } from "./delete.js";

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