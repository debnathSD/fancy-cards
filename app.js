// Movement Animation refs
const card = document.querySelector('.card'),
    container = document.querySelector('.container'),
    title = document.querySelector('.title'),
    cardImg = document.querySelector('.card-img img'),
    purchase = document.querySelector('.purchase button'),
    description = document.querySelector('.info h3'),
    attributes = document.querySelector('.attributes');

// Moving Animation Event
const MAGIC_NUMBER = 20;
container.addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / MAGIC_NUMBER,
        yAxis = (window.innerHeight / 2 - e.pageY) / MAGIC_NUMBER;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Work on Animate In
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';

    // Popout of card in 3D
    title.style.transform = "translateZ(150px)";
    cardImg.style.transform = "translateZ(250px) rotateZ(-45deg)";
    purchase.style.transform = "translateZ(75px)";
    description.style.transform = "translateZ(125px)";
    attributes.style.transform = "translateZ(100px)";
});

// Preserve previous state on Animate Out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    // Discard all Popouts
    title.style.transform = "translateZ(0px)";
    cardImg.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    attributes.style.transform = "translateZ(0px)";
});