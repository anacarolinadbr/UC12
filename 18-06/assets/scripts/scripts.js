const cover = './assets/images/imagemfigurinha.png';

const stickers = [
    './assets/images/neymar.webp',
    './assets/images/cristiano.webp',
    './assets/images/endrick.webp',
    './assets/images/messi2.webp',
    './assets/images/mbape.webp',
    './assets/images/paqueta.png',
    './assets/images/alisson.png',
    './assets/images/vinijr.png'
];

const board = document.getElementById("board");
const movesText = document.getElementById("moves");
const pairsText = document.getElementById("pairs");
const winText = document.getElementById("winMessage");

let openCards = [];
let pairsFound = 0;
let moves = 0;
let blocked = false;


function shuffle(array) {
    /*vai percorrer de tras para frente por causa do fisher*/
    for (let i = array.length - 1; i > 0; i--) {

        /*vai escolher uma posição*/
        const a = Math.floor(Math.random() * (i + 1));
        /*aqui vai fazer a troca*/
        [array[i], array[a]] = [array[a], array[i]];
    }

    return array;
}


function startGame() {

    board.innerHTML = "";
    /*fas os pares*/
    const cards = [...stickers, ...stickers];

    /*mistura as cartas*/
    shuffle(cards);

    cards.forEach(image => {

        /*é para criar uma nova div no html*/
        const card = document.createElement("div");
        /*cria a classe e guarda qual imagem pertence*/
        card.classList.add("carta");
        card.dataset.image = image;

        /*cria a umagen*/
        const img = document.createElement("img");
        img.src = cover;

        /*coloca dentro da carta a imagem*/
        card.appendChild(img);

        /*evento e vira, coloca no tabuleiro*/
        card.addEventListener("click", () => flipCard(card));
        board.appendChild(card);
    });
}


function flipCard(card) {

    /*se der tru, que deuas acrtas foram abertas, vai bloquear*/
    if (blocked) return;

    /*verifica se a carta ja esta aberta*/
    if (openCards.includes(card)) return;

    /*verifica se a carta encontou o par*/
    if (card.classList.contains("matched")) return;

    /*aqui vira e guarda a imagem*/
    card.querySelector("img").src = card.dataset.image;
    openCards.push(card);

    /*verifica se duas cartas foram abertas*/
    if (openCards.length === 2) {

        /*adiciona no "JOGADAS"*/
        moves++;
        movesText.textContent = moves;

        blocked = true;

        /*verifica se os pares estao certos e depois volta*/
        setTimeout(checkPair, 1000);
    }
}


function checkPair() {

    /*verifica se duas cartas estão abertas*/
    const card1 = openCards[0];
    const card2 = openCards[1];

    /*verifica se são iguais*/
    if (card1.dataset.image === card2.dataset.image) {

        /*Marca como encontrado e adiciona no PARES*/
        card1.classList.add("matched");
        card2.classList.add("matched");
        pairsFound++;
        pairsText.textContent = pairsFound;

        /*verifica se o jogador venceu o jogo*/
        if (pairsFound === stickers.length) {
            winText.textContent = "Parabens, você ganhou a copa!";
        }

    } else {

        /*se não, vira as cartas parabaixo*/
        card1.querySelector("img").src = cover;
        card2.querySelector("img").src = cover;
    }

    openCards = [];
    blocked = false;
}

startGame();