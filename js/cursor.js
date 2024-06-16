const cursorElm = document
    .createElement('div');

cursorElm.classList.add('cursor', 'hide');

document.body.append(cursorElm);

let tmrId;

const fn = function () {

    cursorElm.style.left = `${e.clientX - cursorElm.offsetWidth / 2}px`;
    cursorElm.style.top = `${e.clientY - cursorElm.offsetHeight / 2}px`;
    if (tmrId) clearTimeout(tmrId);
    if (cursorElm.classList.contains('hide')) {
        cursorElm.classList.remove('hide');
    }
    tmrId = setTimeout(() => {
        cursorElm.classList.add('hide');
    }, 8000);
}

/* adapt this to touch move */

addEventListener('mousemove',
    (e) => {
        cursorElm.style.left = `${e.clientX - cursorElm.offsetWidth / 2}px`;
        cursorElm.style.top = `${e.clientY - cursorElm.offsetHeight / 2}px`;
        if (tmrId) clearTimeout(tmrId);
        if (cursorElm.classList.contains('hide')) {
            cursorElm.classList.remove('hide');
        }
        tmrId = setTimeout(() => {
            cursorElm.classList.add('hide');
        }, 8000);
    });

document.addEventListener('mouseenter', () => {
    cursorElm.classList.remove('hide');
});

document.addEventListener('mouseleave', () => {
    cursorElm.classList.add('hide');
});

export {cursorElm};