export let filterHours = (etat) => {
    let sentence = "#list__container__"+etat+" li";
    let sentencewithoutli = "#list__container__"+etat;
    let liArray = Array.from(document.querySelectorAll(sentence));
    liArray.sort((a, b) => {
        let timeA = extractTime(a); 
        let timeB = extractTime(b); 
        return timeA - timeB;
    });
    let ul = document.querySelector(sentencewithoutli)
    for (let elem of liArray) {
        ul.append(elem);
    }
}

function extractTime(liElement) {

    let timeStringHours = liElement.textContent.match(/\d+ days/);
    if(!timeStringHours){
        timeStringHours = liElement.textContent.match(/\d+ hours/);
    }
    if (timeStringHours) {
        return parseInt(timeStringHours[0]);
    } else {
        return 0; 
    }
}
