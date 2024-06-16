const displayItems = ['Yasith Ishara Perera', "I'm a Software Engineer", 'Direct Entry Program 12', 'We are born to code'];

const spanElm = document.getElementById('display-span');

let arrayIndex = 0;
let letterIndex = 0;
let displayText;

let count = 0;
let doErase = false;

let waitTimer = 0;

setInterval(function () {
    /* if array reached end, go to the beginning */
    if (arrayIndex === displayItems.length) {
        arrayIndex = 0;
    }

    /* select one item of array */
    let sentence = displayItems[arrayIndex];
    if (!doErase && ++count % 3 === 0) {
        displayText = sentence.substring(0, ++letterIndex);
        spanElm.innerText = displayText;
        if (letterIndex === sentence.length) {
            doErase = true;
        }

    } else if (doErase && ++waitTimer >= 40) {
        /*wait timer used to wait before erasing*/
        displayText = sentence.substring(0, --letterIndex);
        spanElm.innerText = displayText;
        if (letterIndex === 0) {
            doErase = false;
            waitTimer = 0;
            arrayIndex++;
        }
    }
}, 50);