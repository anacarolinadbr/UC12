
const tela = document.querySelector(".display");
const botoes = document.querySelectorAll("button");

//let para guardar os numeros, calculo
let conta = "";

// forEach vai percorer todos os botoes
botoes.forEach(function(botao) {
    // onclick é para fazer eventos
    botao.onclick = function() {
        // vai pegar o valor do botao que fopi clicado e innerText vai alterar o display
        let valor = botao.innerText;
        if (valor === "C") {
            conta = "";
            //Vai clicar no botao de igual e tentar fazer os calculos
        } else if (valor === "=") {

            try {
                // let para guardar os numeros
                let resultado = 0;
                // includes vai verificar se tem o sinal esperado
                if (conta.includes("+")) {
                    //se tiver, vai separar os numeros 
                    let numero = conta.split("+"); 
                    // vai trasfomar em number e somae
                    resultado = Number(numero[0]) + Number(numero[1]);

            } else if (conta.includes("-")) {
                    let numero = conta.split("-");
                    resultado = Number(numero[0]) - Number(numero[1]);

            } else if (conta.includes("*")) {
                    let numero = conta.split("*");
                    resultado = Number(numero[0]) * Number(numero[1]);

                } else if (conta.includes("/")) {
                    let numero = conta.split("/");
                    resultado = Number(numero[0]) / Number(numero[1]);
                }
                conta = resultado;
            }catch {
                conta = "Erro";
            }

        } else{
            // Se for número ou sinal vai adicionar na conta (do lado) 
            conta += valor;
        }

        // vai mostrar o resultado final na tela 
        tela.innerText = conta;
    };
});