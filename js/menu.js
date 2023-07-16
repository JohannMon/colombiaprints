const hamburguerBtn = document.querySelector('.hamburguer-btn');
const navegacion = document.querySelector('.navegacion');

hamburguerBtn.addEventListener('click', () => {
    navegacion.classList.toggle('navegacion--visible');
});
