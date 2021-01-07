VanillaTilt.init(document.querySelectorAll(".glass-tilt .row .card"), {
    max: 25,
    speed: 400,
    glare: true
});

const stackSec = document.querySelector('.three-dim-stack');
const stackRow = document.querySelector('.three-dim-stack .row');

let width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

if (width <= 1100) {
    stackRow.addEventListener('mouseover', expandSection);
    stackRow.addEventListener('mouseleave', contractSection);
}

if (width > 1100) {
    stackRow.removeEventListener('mouseover', expandSection);
    stackRow.removeEventListener('mouseleave', contractSection);
}

window.addEventListener('resize', checkBrowserSize);

function checkBrowserSize() {
    let width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    
    if (width <= 1050) {
        stackRow.addEventListener('mouseover', expandSection);
        stackRow.addEventListener('mouseleave', contractSection);
    }
    
    if (width > 1050) {
        stackRow.removeEventListener('mouseover', expandSection);
        stackRow.removeEventListener('mouseleave', contractSection);
    }
}
// stackRow.addEventListener('mouseover', expandSection);
// stackRow.addEventListener('mouseleave', contractSection);

function expandSection() {
    stackSec.style.height = '1200px';
}

function contractSection() {
    stackSec.style.height = '500px';
}