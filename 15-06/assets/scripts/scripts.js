const cover = './assets/images/imagemfigurinha.png';
const stickers = ['./assets/images/neymar.webp',
'./assets/images/cristiano.webp',
'./assets/images/endrick.webp',
'./assets/images/messi2.webp',
'./assets/images/mbappe.webp',
'./assets/images/paqueta.png',
'./assets/images/alisson.png',
'./assets/images/bellliam.avif' 
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
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}


function startGame(){
    board.innerHTML = "";

    openCards = [];
    pairsFound = 0;
    moves = 0;
    blocked = false;

    movesText.textContent = moves;
    pairsText.textContent = `${pairsFound}/${stickers.length}`;
    winText.textContent = "";

    const gameCards = [...stickers, ...stickers];

    shuffle(gameCards);

    gameCards.forEach(sticker => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.dataset.sticker = sticker;

        const img = document.createElement("img");
        img.src = cover;

        card.appendChild(img);

        card.addEventListener("click", () => flipCard(card));

        board.appendChild(card);
    });
}

function flipCard(card) {
    if (blocked) return;

    if (openCards.includes(card)) return;

    if (card.classList.contains("matched")) return;

    card.querySelector("img").src = card.dataset.sticker;

    openCards.push(card);

    if (openCards.length === 2) {

        moves++;
        movesText.textContent = moves;

        blocked = true;

        checkPair();
    }
}

function checkPair(){
    
    const [card1, card2] = openCards;

    const sticker1 = card1.dataset.sticker;
    const sticker2 = card2.dataset.sticker;

    if (sticker1 === sticker2) {

        card1.classList.add("matched");
        card2.classList.add("matched");

        pairsFound++;

        pairsText.textContent = `${pairsFound}/${stickers.length}`;

        openCards = [];
        blocked = false;

        if (pairsFound === stickers.length) {
            winText.textContent =
                `Parabéns! Você venceu em ${moves} jogadas!`;
        }

    } else {

        setTimeout(() => {

            card1.querySelector("img").src = cover;
            card2.querySelector("img").src = cover;

            openCards = [];
            blocked = false;

        }, 100);
    }
    
}

startGame();
