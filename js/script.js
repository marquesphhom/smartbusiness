const sidebar = document.querySelector('.sidebar');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

sidebar.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

function getDate(element){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let time = `${day}/${month+1}/${year} ${hour}:${minute}:${second}`;
    const h1 = document.createElement('h1');
    h1.textContent = time;
    element.appendChild(h1);
}

let myInterval = setInterval(() => {
    right.innerHTML = '';
    getDate(right)
}, 1000)
