let chat = document.querySelector('.thu')
let tall = document.querySelector('.wed')
let tooltips = document.querySelector('.tool-tips')
let tolltips = document.querySelector('.toll-tips')

chat.addEventListener('click', () => {
    tolltips.style.display = 'block';

});

tall.addEventListener('click', (e) => {
    tooltips.style.display = 'block';

});
