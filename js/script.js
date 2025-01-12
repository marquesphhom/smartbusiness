const sidebar = document.querySelector('.sidebar');
const left = document.querySelector('.left');


left.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

sidebar.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})