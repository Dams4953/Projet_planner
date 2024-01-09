// creation du popup
import { time } from './time.js';
import { functionDeleteTask } from "./delete.js";


export let modificationLiPopup = (e) => {
    let tableau = localStorage.getItem('Tableau');
    let tab = JSON.parse(tableau);
    for (let elem of tab) {
        if (elem.id === e.target.parentNode.parentNode.id) {
            let endroitModification = e.target.parentNode;
            let div = document.createElement('div');
            div.className = "div__modification";

            let nomElement = document.createElement('input');
            nomElement.type = "text";
            nomElement.id = "nom__Modifier";
            nomElement.value = elem.nom;
            div.append(nomElement);

            let descriptionElement = document.createElement('input');
            descriptionElement.type = "text";
            descriptionElement.id = "description__Modifier";
            div.append(descriptionElement);
            descriptionElement.value = elem.description

            let selectElement = document.createElement('select');
            selectElement.id = "achevement__Modifier";

            let option1 = document.createElement('option');
            option1.value = "todo";
            option1.textContent = "TO DO";
            selectElement.appendChild(option1);

            let option2 = document.createElement('option');
            option2.value = "doing";
            option2.textContent = "Doing";
            selectElement.appendChild(option2);

            let option3 = document.createElement('option');
            option3.value = "done";
            option3.textContent = "Done";
            selectElement.appendChild(option3);
            div.appendChild(selectElement);
            let selectedOption = selectElement.querySelector(`option[value="${elem.achevement}"]`);
            if (selectedOption) {
                selectedOption.selected = true;
            }
            let btnmodification = document.createElement('button');
            btnmodification.id = "modifier";
            btnmodification.innerHTML = "Modifier";
            div.append(btnmodification);
            endroitModification.append(div);
            modificationTabLi(e, tab, div);
        }
    }

}

// modification des li et du tableau
let modificationTabLi = (e, tab, div) => {
    let btn = document.getElementById('modifier');
    btn.addEventListener('click', () => {
        let nom = document.getElementById('nom__Modifier').value;

        // début validation titre 3 à 256 caractères
        if (nom.length < 3 || nom.length > 256) {
            alert("Le titre doit contenir entre 3 et 256 caractères.");
            return;
        }
        // fin validation titre 3 à 256 caractères

        let description = document.getElementById('description__Modifier').value;

        // début validation description 5 à 1024
        if (description.length < 5 || description.length > 1024) {
            alert("La description doit contenir entre 5 et 1024 caractères.");
            return;
        }
        // fin validation description 5 à 1024

        let achevement = document.getElementById('achevement__Modifier').value;

        // modifier le tableau dans le localStorage
        for (let elem of tab) {
            if (elem.id === e.target.parentNode.parentNode.id) {
                elem.nom = nom;
                elem.description = description;
                elem.achevement = achevement;
            }
        }
        let tabJson = JSON.stringify(tab);
        localStorage.setItem('Tableau', tabJson);

        // modifier le li
        div.remove();
        for (let object of tab) {
            if (object.id === e.target.parentNode.parentNode.id) {
                let li = document.getElementById(e.target.parentNode.parentNode.id);
                li.remove();
                let liContainer;
                if (object.achevement == "todo") {
                    liContainer = document.getElementById('list__container__todo');
                }
                else if (object.achevement == "doing") {
                    liContainer = document.getElementById('list__container__doing');
                }
                else {
                    liContainer = document.getElementById('list__container__done');
                }
                let nomLi = document.createElement('li');
                nomLi.id = object.id;
                liContainer.appendChild(nomLi);

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
                nomLi.append(divButton);
                //ajout date et heure
                let idDateTime = new Date(object.idDate);
                let timeLeft = time(idDateTime);
                //fin du date et heure

                liContainer.append(nomLi);

                let titreDiv = document.createElement('div');
                titreDiv.className = "div-titre";
                titreDiv.innerHTML = object.nom;
                nomLi.append(titreDiv);

                let timeDiv = document.createElement('div');
                timeDiv.className = "div-time";
                liContainer.append(nomLi);
                nomLi.append(timeDiv);

                timeDiv.innerHTML = timeLeft;


                //Ajout description
                let div = document.createElement('div');
                div.className = "desciptionDiv";
                div.innerHTML = object.description;
                nomLi.append(div);

                // écouteur évent modification
                let modifIcone = nomLi.querySelector('.button__Modification');
                modifIcone.addEventListener('click', modificationLiPopup);

                // écouteur évent suppression
                let deleteIcon = nomLi.querySelector('.delete-icon');
                deleteIcon.addEventListener('click', functionDeleteTask);

            }
        }
    });
}