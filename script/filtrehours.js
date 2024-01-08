export let filterHours = () => {
    let liArray = Array.from(document.querySelectorAll('li'));
    liArray.sort((a, b) => {
        let timeA = extractTime(a); 
        let timeB = extractTime(b); 
        return timeA - timeB;
    });
    console.log(liArray);
    let list = document.querySelector('.list');
    list.innerHTML = "";
    let ul = document.createElement('ul');
    list.append(ul);
    for (let elem of liArray) {
        ul.append(elem);
    }
}

function extractTime(liElement) {

    let timeStringHours = liElement.textContent.match(/\d+ days/);
    if(!timeStringHours){
        timeStringHours = liElement.textContent.match(/\d+ hours/);
    }
    console.log(timeStringHours);
    if (timeStringHours) {
        return parseInt(timeStringHours[0]);
    } else {
        return 0; 
    }
}
