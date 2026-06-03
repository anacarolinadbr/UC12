
const btn = document.getElementById("btn")
const btnRem = document.getElementById("btn-remover")
const texto = document.getElementById("texto")
const texto2 = document.getElementById("texto2")
const btn2 = document.getElementById("btn2")

/*
btn.addEventListener("click", () => {
    //  Criamos um elemento de tag p
    const paragrafo = document.createElement("p")

    //precisamos dar um conteudo a ele
    paragrafo.textContent = "Novo texto criado"

    //precisamos dizer onde ele ficara no html
    div.appendChild(paragrafo)


})

btnRem.addEventListener("click", () =>{
    const paragrafos = div.querySelectorAll("p") 
    if(paragrafos.length > 0) {
    paragrafos[0].remove()}
})*/


btn.addEventListener("click", () => {
    texto.textContent = "texto trocado";
});

btn2.addEventListener("click", () =>{
    texto2.remove();
})

const container2 = document.querySelector("#container2");
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", () => {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = "Novo texto criado";
    container2.appendChild(paragrafo);
});