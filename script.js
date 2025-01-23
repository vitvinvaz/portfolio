const icon = document.getElementById("icon");
const ul = document.getElementById("elements")
const links = document.querySelectorAll("#header ul li")

icon.addEventListener('click',() => {
    if (ul.style.left === "100%" || ul.style.left === "") {
        ul.style.left = "0";
    } else {
        ul.style.left = "100%";
    }
})

links.forEach(link => {
    link.addEventListener('click', (event) => {
        setTimeout(() => {
            ul.style.left = "100%";
        }, 200);
    });
});