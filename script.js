const icon = document.getElementById("icon");
const ul = document.getElementById("elements");

icon.addEventListener('click',() => {
    ul.classList.toggle('menu');
})