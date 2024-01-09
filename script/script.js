import { creationObject } from "./tableau.js";
import { liCreator } from "./liCreator.js";   
import { modificationLiPopup } from "./update.js";
import { filterHours } from "./filtrehours.js";

    let buttonConfirmer = document.getElementById('confirmer');
    buttonConfirmer.addEventListener('click', creationObject);
    liCreator();
// button de modification
    let btnModification = document.querySelectorAll('.button__Modification');
    for (let elem of btnModification){
        elem.addEventListener('click', modificationLiPopup);
    }
    // fin du boutton de modification

    //button de filtre des heures
    let buttonFiltre = document.getElementById('filtreHour');
    buttonFiltre.addEventListener('click' , filterHours);
    //fin du bouton de filtre des heures
