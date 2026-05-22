let allCards = [
    {colour: 'red', fill: 'solid', shape: 'round', amount: '1'},
    {colour: 'red', fill: 'solid', shape: 'diamond', amount: '1'},
    {colour: 'red', fill: 'solid', shape: 'squiggle', amount: '1'},
    {colour: 'red', fill: 'empty', shape: 'round', amount: '1'},
    {colour: 'red', fill: 'empty', shape: 'diamond', amount: '1'},
    {colour: 'red', fill: 'empty', shape: 'squiggle', amount: '1'},
    {colour: 'red', fill: 'striped', shape: 'round', amount: '1'},
    {colour: 'red', fill: 'striped', shape: 'diamond', amount: '1'},
    {colour: 'red', fill: 'striped', shape: 'squiggle', amount: '1'},
    {colour: 'purple', fill: 'solid', shape: 'round', amount: '1'},
    {colour: 'purple', fill: 'solid', shape: 'diamond', amount: '1'},
    {colour: 'purple', fill: 'solid', shape: 'squiggle', amount: '1'},
    {colour: 'purple', fill: 'empty', shape: 'round', amount: '1'},
    {colour: 'purple', fill: 'empty', shape: 'diamond', amount: '1'},
    {colour: 'purple', fill: 'empty', shape: 'squiggle', amount: '1'},
    {colour: 'purple', fill: 'striped', shape: 'round', amount: '1'},
    {colour: 'purple', fill: 'striped', shape: 'diamond', amount: '1'},
    {colour: 'purple', fill: 'striped', shape: 'squiggle', amount: '1'},
    {colour: 'green', fill: 'solid', shape: 'round', amount: '1'},
    {colour: 'green', fill: 'solid', shape: 'diamond', amount: '1'},
    {colour: 'green', fill: 'solid', shape: 'squiggle', amount: '1'},
    {colour: 'green', fill: 'empty', shape: 'round', amount: '1'},
    {colour: 'green', fill: 'empty', shape: 'diamond', amount: '1'},
    {colour: 'green', fill: 'empty', shape: 'squiggle', amount: '1'},
    {colour: 'green', fill: 'striped', shape: 'round', amount: '1'},
    {colour: 'green', fill: 'striped', shape: 'diamond', amount: '1'},
    {colour: 'green', fill: 'striped', shape: 'squiggle', amount: '1'},
    {colour: 'red', fill: 'solid', shape: 'round', amount: '2'},
    {colour: 'red', fill: 'solid', shape: 'diamond', amount: '2'},
    {colour: 'red', fill: 'solid', shape: 'squiggle', amount: '2'},
    {colour: 'red', fill: 'empty', shape: 'round', amount: '2'},
    {colour: 'red', fill: 'empty', shape: 'diamond', amount: '2'},
    {colour: 'red', fill: 'empty', shape: 'squiggle', amount: '2'},
    {colour: 'red', fill: 'striped', shape: 'round', amount: '2'},
    {colour: 'red', fill: 'striped', shape: 'diamond', amount: '2'},
    {colour: 'red', fill: 'striped', shape: 'squiggle', amount: '2'},
    {colour: 'purple', fill: 'solid', shape: 'round', amount: '2'},
    {colour: 'purple', fill: 'solid', shape: 'diamond', amount: '2'},
    {colour: 'purple', fill: 'solid', shape: 'squiggle', amount: '2'},
    {colour: 'purple', fill: 'empty', shape: 'round', amount: '2'},
    {colour: 'purple', fill: 'empty', shape: 'diamond', amount: '2'},
    {colour: 'purple', fill: 'empty', shape: 'squiggle', amount: '2'},
    {colour: 'purple', fill: 'striped', shape: 'round', amount: '2'},
    {colour: 'purple', fill: 'striped', shape: 'diamond', amount: '2'},
    {colour: 'purple', fill: 'striped', shape: 'squiggle', amount: '2'},
    {colour: 'green', fill: 'solid', shape: 'round', amount: '2'},
    {colour: 'green', fill: 'solid', shape: 'diamond', amount: '2'},
    {colour: 'green', fill: 'solid', shape: 'squiggle', amount: '2'},
    {colour: 'green', fill: 'empty', shape: 'round', amount: '2'},
    {colour: 'green', fill: 'empty', shape: 'diamond', amount: '2'},
    {colour: 'green', fill: 'empty', shape: 'squiggle', amount: '2'},
    {colour: 'green', fill: 'striped', shape: 'round', amount: '2'},
    {colour: 'green', fill: 'striped', shape: 'diamond', amount: '2'},
    {colour: 'green', fill: 'striped', shape: 'squiggle', amount: '2'},
    {colour: 'red', fill: 'solid', shape: 'round', amount: '3'},
    {colour: 'red', fill: 'solid', shape: 'diamond', amount: '3'},
    {colour: 'red', fill: 'solid', shape: 'squiggle', amount: '3'},
    {colour: 'red', fill: 'empty', shape: 'round', amount: '3'},
    {colour: 'red', fill: 'empty', shape: 'diamond', amount: '3'},
    {colour: 'red', fill: 'empty', shape: 'squiggle', amount: '3'},
    {colour: 'red', fill: 'striped', shape: 'round', amount: '3'},
    {colour: 'red', fill: 'striped', shape: 'diamond', amount: '3'},
    {colour: 'red', fill: 'striped', shape: 'squiggle', amount: '3'},
    {colour: 'purple', fill: 'solid', shape: 'round', amount: '3'},
    {colour: 'purple', fill: 'solid', shape: 'diamond', amount: '3'},
    {colour: 'purple', fill: 'solid', shape: 'squiggle', amount: '3'},
    {colour: 'purple', fill: 'empty', shape: 'round', amount: '3'},
    {colour: 'purple', fill: 'empty', shape: 'diamond', amount: '3'},
    {colour: 'purple', fill: 'empty', shape: 'squiggle', amount: '3'},
    {colour: 'purple', fill: 'striped', shape: 'round', amount: '3'},
    {colour: 'purple', fill: 'striped', shape: 'diamond', amount: '3'},
    {colour: 'purple', fill: 'striped', shape: 'squiggle', amount: '3'},
    {colour: 'green', fill: 'solid', shape: 'round', amount: '3'},
    {colour: 'green', fill: 'solid', shape: 'diamond', amount: '3'},
    {colour: 'green', fill: 'solid', shape: 'squiggle', amount: '3'},
    {colour: 'green', fill: 'empty', shape: 'round', amount: '3'},
    {colour: 'green', fill: 'empty', shape: 'diamond', amount: '3'},
    {colour: 'green', fill: 'empty', shape: 'squiggle', amount: '3'},
    {colour: 'green', fill: 'striped', shape: 'round', amount: '3'},
    {colour: 'green', fill: 'striped', shape: 'diamond', amount: '3'},
    {colour: 'green', fill: 'striped', shape: 'squiggle', amount: '3'},
];
let boardCards = [];
let allSets = [];
let selectedCards = [];
let hiddenCards = [];

for (let i = 0; i < 12; i++) {
    let randomCard = allCards[Math.floor(Math.random() * allCards.length)];
    allCards.splice(allCards.findIndex(card => JSON.stringify(card) === JSON.stringify(randomCard)), 1);
    boardCards.push(randomCard);
    updateImages(boardCards[i], i);
    document.getElementById(`card${i}`).addEventListener('click', () => {
        clickCard(i);
    });
}
findSets();

function updateImages(cardNumber, place) {
    if (cardNumber.amount == '2') {
        document.getElementsByClassName(`img${place}layer2`)[0].src = `images/${cardNumber.colour}/${cardNumber.shape}/${cardNumber.fill}.jpg`;
        document.getElementsByClassName(`img${place}layer2`)[1].src = `images/${cardNumber.colour}/${cardNumber.shape}/${cardNumber.fill}.jpg`;
        document.getElementsByClassName(`img${place}layer3`)[0].src = 'images/blank.jpg';
        document.getElementsByClassName(`img${place}layer3`)[1].src = 'images/blank.jpg';
        document.getElementsByClassName(`img${place}layer3`)[2].src = 'images/blank.jpg';
    } else if (cardNumber.amount == '1') {
        document.getElementsByClassName(`img${place}layer2`)[0].src = 'images/blank.jpg';
        document.getElementsByClassName(`img${place}layer2`)[1].src = 'images/blank.jpg';
        document.getElementsByClassName(`img${place}layer3`)[0].src = 'images/blank.jpg';
        document.getElementsByClassName(`img${place}layer3`)[1].src = `images/${cardNumber.colour}/${cardNumber.shape}/${cardNumber.fill}.jpg`;
        document.getElementsByClassName(`img${place}layer3`)[2].src = 'images/blank.jpg';
    } else if (cardNumber.amount == '3') {
        document.getElementsByClassName(`img${place}layer2`)[0].src = 'images/blank.jpg';
        document.getElementsByClassName(`img${place}layer2`)[1].src = 'images/blank.jpg';
        document.getElementsByClassName(`img${place}layer3`)[0].src = `images/${cardNumber.colour}/${cardNumber.shape}/${cardNumber.fill}.jpg`;
        document.getElementsByClassName(`img${place}layer3`)[1].src = `images/${cardNumber.colour}/${cardNumber.shape}/${cardNumber.fill}.jpg`;
        document.getElementsByClassName(`img${place}layer3`)[2].src = `images/${cardNumber.colour}/${cardNumber.shape}/${cardNumber.fill}.jpg`;
    }
}

function clickCard(i) {
    function sayMistake(place1, place2, place3) {
        if (place1 == place2 && place2 !== place3) {
            document.getElementById('title').innerText = 'So close but you have two ' + place1 + 's and one ' + place3;
        } else if (place3 == place2 && place2 !== place1) {
            document.getElementById('title').innerText = 'So close but you have two ' + place2 + 's and one ' + place1;
        } else if (place1 == place3 && place1 !== place2) {
            document.getElementById('title').innerText = 'So close but you have two ' + place1 + 's and one ' + place2;
        }
        fitText();
        document.querySelectorAll('.card').forEach(card => card.style.border = '2px solid #fff');
    }

    function check(type) {
        return ((selectedCards[0][type] == selectedCards[1][type] && selectedCards[1][type] == selectedCards[2][type]) || selectedCards[0][type] !== selectedCards[1][type] && selectedCards[1][type] !== selectedCards[2][type] && selectedCards[0][type] !== selectedCards[2][type]);
    }
    
    if (selectedCards.length <= 3 && document.getElementById(`card${i}`).style.opacity !== '0') {
        if (!selectedCards.includes(boardCards[i])) {
            document.getElementById('card' + i).style.border = `2px solid #000`;
            selectedCards.push(boardCards[i]);
        } else {
            document.getElementById('card' + i).style.border = `2px solid #fff`;
            selectedCards = selectedCards.filter(item => item !== boardCards[i]);
        }
    }
    
    if (selectedCards.length == 3) {
        document.querySelectorAll('.card').forEach(card => card.style.border = '2px solid #fff');
        if (check('colour') && check('fill') && check('amount') && check('shape')) {
            document.getElementById('title').innerText = 'Good job thats a set!';
            fitText();
            if (boardCards.length == 15) {
                let toRemove = [];
                for (let x = 0; x < boardCards.length; x++) {
                    if (selectedCards.includes(boardCards[x])) {
                        toRemove.push(x);
                    }
                }
                for (let x = 2; x >= 0; x--) {
                    document.getElementById(`card${toRemove[x]}`).remove();
                    boardCards.splice(toRemove[x], 1);
                }
                for (let x = 0; x < boardCards.length; x++) {
                    let card = document.getElementById('cardContainer').children[x];
                    card.id = `card${x}`;
                    card.querySelectorAll('.layer3 img').forEach(img => {
                        img.className = `img${x}layer3 cardImage`;
                    });
                    card.querySelectorAll('.layer2 img').forEach(img => {
                        img.className = `img${x}layer2 cardImage`;
                    });
                    let newCard = card.cloneNode(true);
                    card.parentNode.replaceChild(newCard, card);
                    newCard.addEventListener('click', () => clickCard(x));
                }
            } else {
                for (let x = 0; x < boardCards.length; x++) {
                    if (selectedCards.includes(boardCards[x])) {
                        if (allCards.length > 0) {
                            let randomCard = allCards[Math.floor(Math.random() * allCards.length)];
                            allCards.splice(allCards.findIndex(card => JSON.stringify(card) === JSON.stringify(randomCard)), 1);
                            boardCards.splice(x, 1, randomCard);
                            updateImages(boardCards[x], x);
                        } else {
                            document.getElementById('cardContainer').children[x].style.opacity = '0';
                            hiddenCards.push(x);
                        }
                    }
                }
            }
        } else if (check('colour') && check('fill') && check('amount') && !check('shape')) {
            sayMistake(selectedCards[0].shape, selectedCards[1].shape, selectedCards[2].shape);
        } else if (check('colour') && check('fill') && !check('amount') && check('shape')) {
            sayMistake(selectedCards[0].amount, selectedCards[1].amount, selectedCards[2].amount);
        } else if (check('colour') && !check('fill') && check('amount') && check('shape')) {
            sayMistake(selectedCards[0].fill, selectedCards[1].fill, selectedCards[2].fill);
        } else if (!check('colour') && check('fill') && check('amount') && check('shape')) {
            sayMistake(selectedCards[0].colour, selectedCards[1].colour, selectedCards[2].colour);
        } else {
            document.getElementById('title').innerText = 'Thats not a set';
            fitText();
        }
        selectedCards = [];
        findSets();
        if (allCards.length == 0 && allSets.length == 0) {
            document.getElementById('title').innerText = 'Game Over! You found all the sets!';
            fitText();
        }
    }
}

function findSets() {
    allSets = [];
    for (let s = 0; s < boardCards.length; s++) {
        for (let e = 0; e < boardCards.length; e++) {
            for (let t = 0; t < boardCards.length; t++) {
                if (s < e && e < t) {
                    if ((boardCards[s].colour !== boardCards[e].colour && boardCards[s].colour !== boardCards[t].colour && boardCards[e].colour !== boardCards[t].colour || boardCards[s].colour == boardCards[e].colour && boardCards[s].colour == boardCards[t].colour && boardCards[e].colour == boardCards[t].colour) && (boardCards[s].fill !== boardCards[e].fill && boardCards[s].fill !== boardCards[t].fill && boardCards[e].fill !== boardCards[t].fill || boardCards[s].fill == boardCards[e].fill && boardCards[s].fill == boardCards[t].fill && boardCards[e].fill == boardCards[t].fill) && (boardCards[s].amount !== boardCards[e].amount && boardCards[s].amount !== boardCards[t].amount && boardCards[e].amount !== boardCards[t].amount || boardCards[s].amount == boardCards[e].amount && boardCards[s].amount == boardCards[t].amount && boardCards[e].amount == boardCards[t].amount) && (boardCards[s].shape !== boardCards[e].shape && boardCards[s].shape !== boardCards[t].shape && boardCards[e].shape !== boardCards[t].shape || boardCards[s].shape == boardCards[e].shape && boardCards[s].shape == boardCards[t].shape && boardCards[e].shape == boardCards[t].shape)) {
                        allSets.push([s, e, t]);
                    }
                }
            }
        }
    }
    for (let x = 0; x < hiddenCards.length; x++) {
        allSets = allSets.filter(set => !set.includes(hiddenCards[x]));
    }
    if (allSets.length == 0) {
        if (allCards.length == 0) {
            document.getElementById('title').innerText = 'Game Over! You found all the sets!';
        } else {
            document.getElementById('title').innerText = 'There are no sets! Add more cards to continue.';
        }
        fitText();
    }
}

function addd3() {
    if (boardCards.length == 12) {
        if (allCards.length >= 3) {
            has15Cards = true;
            for (let i = 12; i < 15; i++) {
                let randomCard = allCards[Math.floor(Math.random() * allCards.length)];
                allCards.splice(allCards.findIndex(card => JSON.stringify(card) === JSON.stringify(randomCard)), 1);
                boardCards.push(randomCard);

                let newCard = document.createElement('div');
                let layer3 = document.createElement('div');
                let layer2 = document.createElement('div');
                newCard.classList.add('card');
                layer3.classList.add('layer3');
                layer2.classList.add('layer2');
                newCard.id = `card${i}`;
                document.getElementById('cardContainer').appendChild(newCard);
                newCard.appendChild(layer3);
                newCard.appendChild(layer2);

                for (let x = 0; x < 3; x++) {
                    let newImage = document.createElement('img');
                    newImage.src = 'images/blank.jpg';
                    newImage.classList.add(`img${i}layer3`);
                    newImage.classList.add('cardImage');
                    layer3.appendChild(newImage);
                }
                for (let x = 0; x < 2; x++) {
                    let newImage = document.createElement('img');
                    newImage.src = 'images/blank.jpg';
                    newImage.classList.add(`img${i}layer2`);
                    newImage.classList.add('cardImage');
                    layer2.appendChild(newImage);
                }

                document.getElementById(`card${i}`).addEventListener('click', () => {
                    clickCard(i);
                });
            }
            for (let i = 0; i < boardCards.length; i++) {
                updateImages(boardCards[i], i);
            }
            findSets();
            if (allSets.length == 1) {
                document.getElementById('title').innerText = `There is now ${allSets.length} set`;
            } else {
                document.getElementById('title').innerText = `There are now ${allSets.length} sets`;
            }
        } else {
            document.getElementById('title').innerText = "There isn't enough cards left to add more";
        }
    } else {
        document.getElementById('title').innerText = "You can't add any more";
    }
    fitText();
}

function giveHint() {
    if (allSets.length > 0) {
        selectedCards = [];
        let hintPlace = allSets[Math.floor(Math.random() * allSets.length)][Math.floor(Math.random() * 2)];
        document.querySelectorAll('.card').forEach(card => card.style.border = '2px solid #fff');
        document.getElementById(`card${hintPlace}`).style.border = '2px solid #000';
        selectedCards.push(boardCards[hintPlace]);
    }
}

function showAmount() {
    if (allSets.length == 0) {
        document.getElementById('title').innerText = 'There are no sets';
    } else if (allSets.length == 1) {
        document.getElementById('title').innerText = 'There is 1 set';
    } else {
        document.getElementById('title').innerText = `There are ${allSets.length} sets`;
    }
    fitText();
}

function alignSidebar() {
    document.getElementById("sideBar").style.top = `${document.getElementById("cardContainer").getBoundingClientRect().top}px`;
}
function fitText() {
    let fontSize = 40;
    document.getElementById("title").style.fontSize = fontSize + "px";
    document.getElementById("title").offsetWidth;

    while (document.getElementById("title").offsetWidth > window.innerWidth * 0.95 && fontSize > 10) {
        fontSize--;
        document.getElementById("title").style.fontSize = fontSize + "px";
    }
}

window.addEventListener('load', () => requestAnimationFrame(fitText));
window.addEventListener('resize', fitText);
window.addEventListener("resize", alignSidebar);
window.addEventListener("load", alignSidebar);
