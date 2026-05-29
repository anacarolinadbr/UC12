//getElementebyID ("id") captura um elemento via id
const btn = document.getElementById("btn")
//QuerySelect("seletor") captura um elementop por tag, classe ou id
const div = document.querySelector("div")
const texto = document.querySelector("h1")
const titulo = document.querySelectorAll("h2")
const btn2 = document.getElementById("btn2")



//Para dar função ao botão, adicionamos um evento a ele
//eventos podem ser de vários tipos, mas vamos usar de um clique
//addEventListen adiciona um evento, ao evento, e precisamos passar dois parametros
//primeiro é qual ação vai disparar este evento, sempre entre aspas
//segundo é qual função o evento vai disparar
/*btn.addEventListener("click", () => {
   if (div.style.backgroundColor == "tomato") { 
    div.style.backgroundColor = "white"
    texto.styles.color = "black"
   } else {
    div.style.backgroundColor = "tomato"
    texto.style.color = "white"
   }
})

btn2.addEventListener("click", () => {
    //for 'comum'
    for(let i = 0; i < titulo.length; i++){
        titulo[i].style.color = "blue"
    }
// forEach
    titulos.forEach((titulo) => {
        titulo.style.color = "blue"
    })
})
//for of
for (let titulo of titulos) {
    titulo.style.color = "blue"
}

btn3.addEventListener("click", () => {
    if(texto.textContent == "Este texto vai ser trocado"){
        texto.textContent = "trocou"
    } else {
        texto.textContent - "este texto vai ser trocado"
    }
})*/
const btn4 = document.getElementById("botaocao")
const foto = document.getElementById("foto")

const foto1 = "https://irisveterinaria.com.br/wp-content/uploads/2022/10/Confira-5-curiosidades-sobre-como-e-a-visao-do-cachorro.jpg"
const foto2 = "https://img.magnific.com/fotos-gratis/cachorro-fofo-usando-oculos_23-2148917262.jpg"

btn4.addEventListener("click", () => {
    if (foto.src === foto1) {
        foto.src = foto2
    } else {
        foto.src = foto1
    }
})

