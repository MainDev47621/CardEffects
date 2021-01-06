VanillaTilt.init(document.querySelectorAll(".glass-tilt .row .card"), {
    max: 25,
    speed: 400,
    glare: true
});

const stackSec = document.querySelector('.three-dim-stack');
const stackRow = document.querySelector('.three-dim-stack .row');

if (window.innerWidth <= 1568) {
    stackRow.addEventListener('mouseover', expandSection);
    stackRow.addEventListener('mouseleave', contractSection);
} else {
    stackRow.removeEventListener('mouseover', expandSection);
    stackRow.removeEventListener('mouseleave', contractSection);
}
// stackRow.addEventListener('mouseover', expandSection);
// stackRow.addEventListener('mouseleave', contractSection);

function expandSection() {
    stackSec.style.height = '1200px';
}

function contractSection() {
    stackSec.style.height = '500px';
}