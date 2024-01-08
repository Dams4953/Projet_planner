import { addTask } from "./addtask.js";
export let creationObject = () => {

    // Chercher le tableau dans le localStorage
    let tab = [];
    let tableau = localStorage.getItem('Tableau');
    if (tableau) {
        tab = JSON.parse(tableau);
    }

    // Créer l'object
    let object = {};

    // un identifiant unique (généré à la création, non modifiable par l'utilisateur)
    const id = 'id_' + new Date().getTime() + '_' + Math.random().toString(36).substr(2, 9);
    object.id = id;


    // une date de création (générée à la création, non modifiable par l'utilisateur)
    let dateCreation = Date.now();
    object.date = dateCreation;

    // un nom (obligatoire, doit être une chaîne de 3 caractères minimum et 256 caractères maximum)
    let nomElement = document.getElementById('nom').value;
    object.nom = nomElement;

    // une description (facultatif, doit être une chaîne d'un minimum de 5 caractères et d'un maximum de 1024 caractères)
    let descriptionElement = document.getElementById('description').value;
    object.description = descriptionElement;

    // un statut d'achèvement de to do, doingou done) (obligatoire, par défaut sur to do)
    let achevementElement = document.getElementById('achevement').value;
    object.achevement = achevementElement;

    // une date d'échéance (obligatoire, par défaut "2 semaines à compter de la création", doit être une date valide)
    let idDateElement = document.getElementById('idDate');
    let idTimeElement = document.getElementById('idTime');
    let idDateTime;

    // Vérifier si une date a été saisie, sinon définir par défaut à 2 semaines
    if (idDateElement.value) {
        idDateTime = new Date(idDateElement.value + 'T' + idTimeElement.value);
    } else {
        let defaultDate = new Date();
        defaultDate.setDate(defaultDate.getDate() + 14);
        idDateTime = defaultDate;
    }

object.idDate = idDateTime.toISOString();


    // Mettre le tableau dans le localStorage
    tab.push(object);
    let tabjson = JSON.stringify(tab);
    localStorage.setItem('Tableau', tabjson);
    addTask(object);
}