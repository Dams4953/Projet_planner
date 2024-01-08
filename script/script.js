import { creationObject } from "./tableau.js";
import { liCreator } from "./liCreator.js";   
import { modificationLiPopup } from "./update.js";

    let buttonConfirmer = document.getElementById('confirmer');
    buttonConfirmer.addEventListener('click', creationObject);
    liCreator();
// button de modification
    let btnModification = document.querySelectorAll('.button__Modification');
    for (let elem of btnModification){
        elem.addEventListener('click', modificationLiPopup);
    }
    // fin du boutton de modification

    