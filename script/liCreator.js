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
                liContainer.append(li);
            }
        }
    }