import { creationObject } from "./tableau.js";
import { liCreator } from "./liCreator.js";   
import { modificationLiPopup } from "./update.js";
import { filterHours } from "./filtrehours.js";


    let buttonConfirmer = document.getElementById('confirmer');
    buttonConfirmer.addEventListener('click', creationObject);
    
   
// Ecoute pour le enter
let enter = (e) =>{
    if(e.key === 'Enter'){
        creationObject();
    }
    }
    document.addEventListener('keyup', enter);

    
    liCreator();
// button de modification
    let btnModification = document.querySelectorAll('.button__Modification');
    for (let elem of btnModification){
        elem.addEventListener('click', modificationLiPopup);
    }
    // fin du boutton de modification
    //button de filtre des heures

    let buttonFiltre = document.getElementById('filtreHour');
    buttonFiltre.addEventListener('click' , () => filterHours("todo"));
    buttonFiltre.addEventListener('click' , () => filterHours("doing"));
    buttonFiltre.addEventListener('click' , () => filterHours("done"));
    //fin du bouton de filtre des heures