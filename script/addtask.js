import { modificationLiPopup } from "./update.js";
export let addTask = (object) =>{
    let liContainer = document.getElementById('list__container');
    let li = document.createElement('li');
    li.id = object.id;
    li.innerHTML = object.nom;
     // Debut creation du bouton de modification

     let buttonModification = document.createElement('button');
     buttonModification.innerHTML = "&#x270E;";
     buttonModification.className="button__Modification";
     li.append(buttonModification);
     buttonModification.addEventListener('click', modificationLiPopup);
     // Fin creation du bouton de modification
    liContainer.append(li);
}