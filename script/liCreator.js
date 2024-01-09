import { time } from './time.js';
import { functionDeleteTask } from "./delete.js";

export let liCreator = () => {
    let tab = JSON.parse(localStorage.getItem('Tableau') || '[]');
    let liContainer;
    for (let elem of tab) {
        if (elem.achevement == "todo") {
            liContainer = document.getElementById('list__container__todo');
        }
        else if (elem.achevement == "doing") {
            liContainer = document.getElementById('list__container__doing');
        }
        else if (elem.achevement == "done") {
            liContainer = document.getElementById('list__container__done');
        }
        let li = document.createElement('li');
        li.id = elem.id;

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

        //ajout date et heure
        let idDateTime = new Date(elem.idDate);
        let timeLeft = time(idDateTime);
        //fin du date et heure



        let titreDiv = document.createElement('div');
        titreDiv.className = "div-titre";
        titreDiv.innerHTML = elem.nom;
        li.append(titreDiv);

        let timeDiv = document.createElement('div');
        timeDiv.className = "div-time";
        liContainer.append(li);
        li.append(timeDiv);

        timeDiv.innerHTML = timeLeft;


        //Ajout description
        let div = document.createElement('div');
        div.className = "desciptionDiv";
        div.innerHTML = elem.description;
        li.append(div);

    
    }
    const deleteIcons = document.querySelectorAll('.delete-icon');
    deleteIcons.forEach(icon => {
        icon.addEventListener('click', functionDeleteTask);
    });
}