let grid = document.querySelector('#grid');
let shuffleCard = document.querySelector('#shuffle');
let sortCard = document.querySelector('.btn_sort');
let grid_numbers = [];

// Generate the Intial mark up.
const gridMarkup = (num) => {
    let div = document.createElement("DIV");
    let txt = document.createTextNode(num);
    div.className = "card  card_" + num + "";
    div.appendChild(txt);
    grid.appendChild(div);
}

// Arrange the cards after sort and shuffle.
const arrangeCard = () => {
    i = 0;
    let cards = document.querySelectorAll('.card');
    console.log(cards);
    cards.forEach(el => {
        el.innerHTML = grid_numbers[i];
        i++;
    });
}

//Generate the Grid.
const generateGrid = () => {
    for (let i = 1; i <= 9; i++) {
        gridMarkup(i);
        grid_numbers.push(i);
    }
}

// Shuffle card function
const shuffleCards = () => {
    let temp;
    let shuffle;
    let length = grid_numbers.length - 1;
    for (var i = length; i > 0; i--) {
        shuffle = Math.floor(Math.random() * (i + 1));
        temp = grid_numbers[i];
        grid_numbers[i] = grid_numbers[shuffle];
        grid_numbers[shuffle] = temp;
    }

    arrangeCard();

}
const sortCards = () => {
    grid_numbers.sort();
    arrangeCard();
}
shuffleCard.addEventListener('click', shuffleCards);
sortCard.addEventListener('click', sortCards);
generateGrid();