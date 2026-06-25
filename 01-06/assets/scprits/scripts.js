/*const h1 = document.querySelector9("h1")
const btn = document.querySelector("button")
const div = document.querySelector("div")

btn.addEventListener("click", () => {

    //Adiciona a classe esolido ao elemento
    //Adiona ua classe SE o elelemnto Não tem ela ainda, ou remoce um aclasse se o elemento ja tem ela 
    //h1.classList.toggle("texto")

    div.classList.toggle("esconder")
})*/

const menu = document.getElementById("menu-desktop")
const btn = document.getElementById("btn-menu")


btn.addEventListener("click", () => {
    menu.classList.toggle("menu-mobile")
})