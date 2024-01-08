// creation du popup
import { time } from './time.js';
import { deleteTask } from "./delete.js";


export let modificationLiPopup = (e) => {
    let tableau = localStorage.getItem('Tableau');
    let tab = JSON.parse(tableau);
    for (let elem of tab) {
        if (elem.id === e.target.parentNode.id) {
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
        let description = document.getElementById('description__Modifier').value;
        let achevement = document.getElementById('achevement__Modifier').value;
        // modifier le tableau dans le localStorage
        for (let elem of tab) {
            if (elem.id === e.target.parentNode.id) {
                elem.nom = nom;
                elem.description = description;
                elem.achevement = achevement;
            }
        }
        let tabJson = JSON.stringify(tab);
        localStorage.setItem('Tableau', tabJson);

        // modifier le li
        div.remove();
        for (let object of tab){
            if (object.id === e.target.parentNode.id) {
                let li = document.getElementById(e.target.parentNode.id);
                li.remove();
                let liContainer;
                if (object.achevement == "todo"){
                    liContainer = document.getElementById('list__container__todo');
                }
                else if (object.achevement == "doing"){
                    liContainer = document.getElementById('list__container__doing');
                }
                else{
                    liContainer = document.getElementById('list__container__done');
                }
                let nomLi = document.createElement('li');
                nomLi.id = object.id;
                liContainer.appendChild(nomLi);
                //ajout date et heure
                let idDateTime = new Date(object.idDate);
                let timeLeft = time(idDateTime);
                //fin du date et heure
                nomLi.innerHTML = object.nom + ' - ' + timeLeft + ' <button type="button" class="delete-icon">🗑️</button>';
                // Debut creation du bouton de modification

                let buttonModification = document.createElement('button');
                buttonModification.innerHTML = "&#x270E;";
                buttonModification.className = "button__Modification";
                nomLi.append(buttonModification);
                buttonModification.addEventListener('click', modificationLiPopup);
                // Fin creation du bouton de modification

                // écouteur évent suppression
                let deleteIcon = nomLi.querySelector('.delete-icon');
                deleteIcon.addEventListener('click', deleteTask);
                //rajouter en fonction du css et de ce qu'on veut mettre en visible
        }}
    });
}
