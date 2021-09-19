// Movement Animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Moving Animation Event
const MAGIC_NUMBER = 15;
container.addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / MAGIC_NUMBER,
        yAxis = (window.innerHeight / 2 - e.pageY) / MAGIC_NUMBER;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});