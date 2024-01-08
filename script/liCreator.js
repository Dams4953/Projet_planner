// création des li quand on demarre la page
export let liCreator = () =>{
    let liContainer = document.getElementById('list__container');
    let tab = [];
    let tableau = localStorage.getItem('Tableau');
        if (tableau){
            tab = JSON.parse(tableau);
            for (let elem of tab){
                let li = document.createElement('li');
                li.id = elem.id;
                li.innerHTML = elem.nom;

                // Debut creation du bouton de modification

                let buttonModification = document.createElement('button');
                buttonModification.innerHTML = "&#x270E;";
                buttonModification.className="button__Modification";
                li.append(buttonModification);

                // Fin creation du bouton de modification

                liContainer.append(li);
            }
        }
    }