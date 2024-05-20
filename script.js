let randomCard;
let placeFound;
let boardCards = [];
let set = [];
let allSets = [];
let have15Cards = false;
let hintsLeft = 5;
let player1Colour = '#F8B195';
let player2Colour = '#F67280';
let player3Colour = '#C06C84';
let player4Colour = '#6C567B';
let currentPlayer;
let player1Score = 0;
let player2Score = 0;
let player3Score = 0;
let player4Score = 0;
let currentPlayerColour;
let canClick = true;
let isCounting = true;
let amountOfPlayers = 0;
let canUseButtons = true;

var allCards = [
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
let allCards2 = JSON.parse(JSON.stringify(allCards));

function createCards() {
    for (let i = 0; i < 12; i++) {
        if (canUseButtons) {
            randomCard = allCards[Math.floor(Math.random() * allCards.length)];
            for (let x = 0; x < allCards.length; x++) {
                if (allCards[x] == randomCard) {
                    placeFound = x;
                    break;
                }
            }
            allCards.splice(placeFound, 1);
            boardCards.push(randomCard);
            let colour = boardCards[i].colour;
            let shape = boardCards[i].shape;
            let fill = boardCards[i].fill;
            let amount = boardCards[i].amount;
            if (amount == '1') {
                document.getElementsByClassName('img' + i +'layer3')[1].src = `images/${colour}/${shape}/${fill}.jpg`;
            } else if (amount == '2') {
                document.getElementsByClassName('img' + i + 'layer2')[0].src = `images/${colour}/${shape}/${fill}.jpg`;
                document.getElementsByClassName('img' + i + 'layer2')[1].src = `images/${colour}/${shape}/${fill}.jpg`;
            } else if (amount == '3') {
                document.getElementsByClassName('img' + i + 'layer3')[0].src = `images/${colour}/${shape}/${fill}.jpg`;
                document.getElementsByClassName('img' + i + 'layer3')[1].src = `images/${colour}/${shape}/${fill}.jpg`;
                document.getElementsByClassName('img' + i + 'layer3')[2].src = `images/${colour}/${shape}/${fill}.jpg`;
            }
    
            document.getElementById(`card${i}`).addEventListener('click', () => {
                cardEventListener(i);
            });
        }
    }
}
createCards();

document.getElementById('add3Cards').addEventListener('click', () => {
    if (canUseButtons) {
        if (!have15Cards) {
            for (let i = 0; i < 3; i++) {
                const newCard = document.createElement('div');
                newCard.classList.add('card');
                newCard.id = `card${i + 12}`;
                document.getElementById('cardContainer').appendChild(newCard);
                const layer3 = document.createElement('div');
                layer3.classList.add('layer3');
                newCard.appendChild(layer3);
                const layer2 = document.createElement('div');
                layer2.classList.add('layer2');
                newCard.appendChild(layer2);
                for (let x = 0; x < 3; x++) {
                    const newimg = document.createElement('img');
                    newimg.src = 'images/blank.jpg';
                    newimg.alt = 'blank';
                    newimg.classList.add(`img${i + 12}layer3`);
                    layer3.appendChild(newimg);
                }
                for (let x = 0; x < 2; x++) {
                    const newimg = document.createElement('img');
                    newimg.src = 'images/blank.jpg';
                    newimg.alt = 'blank';
                    newimg.classList.add(`img${i + 12}layer2`);
                    layer2.appendChild(newimg);
                }
                document.getElementById('cardContainer').style.gridTemplateColumns = 'repeat(5, 1fr)';
                randomCard = allCards[Math.floor(Math.random() * allCards.length)];
                for (let e = 0; e < allCards.length; e++) {
                    if (allCards[e] == randomCard) {
                        placeFound = e;
                        break;
                    }
                }
                allCards.splice(placeFound, 1);
                boardCards.push(randomCard);
    
                let colour = boardCards[i + 12].colour;
                let shape = boardCards[i + 12].shape;
                let fill = boardCards[i + 12].fill;
                let amount = boardCards[i + 12].amount;
                if (amount == '1') {
                    document.getElementsByClassName(`img${i + 12}layer3`)[1].src = `images/${colour}/${shape}/${fill}.jpg`;
                } else if (amount == '2') {
                    document.getElementsByClassName(`img${i + 12}layer2`)[0].src = `images/${colour}/${shape}/${fill}.jpg`;
                    document.getElementsByClassName(`img${i + 12}layer2`)[1].src = `images/${colour}/${shape}/${fill}.jpg`;
                } else if (amount == '3') {
                    document.getElementsByClassName(`img${i + 12}layer3`)[0].src = `images/${colour}/${shape}/${fill}.jpg`;
                    document.getElementsByClassName(`img${i + 12}layer3`)[1].src = `images/${colour}/${shape}/${fill}.jpg`;
                    document.getElementsByClassName(`img${i + 12}layer3`)[2].src = `images/${colour}/${shape}/${fill}.jpg`;
                }
                document.getElementById(`card${i + 12}`).addEventListener('click', () => {
                    document.getElementById(`card${i + 12}`).style.border = `2px solid ${currentPlayerColour}`;
                    set.push(boardCards[i + 12]);
                    cardEventListener(i + 12);
                });
            }
            have15Cards = true;
            findSets();
            say(`There are ${allSets.length} sets now.`);
        } else {
            say('You already have 15 cards');
        }
    }
});

document.getElementById('hint').addEventListener('click', () => {
    if (canUseButtons) {
        hintsLeft -= 1;
        if (hintsLeft == 1) {
            say(`You have ${hintsLeft} hint left.`);
        } else {
            say(`You have ${hintsLeft} hints left.`);
        }
        if (hintsLeft > 0) {
            let setToHint = allSets[Math.floor(Math.random() * allSets.length)];
            let card = document.getElementById(`card${setToHint.e}`);
            card.style.boxShadow = '5px 5px 10px rgba(247, 197, 79), -5px -5px 10px rgba(247, 197, 79)';
            card.style.transition = 'box-shadow 0.5s ease';
            setTimeout(() => {
                card.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.5)';
            }, 1000);
        } else {
            say('You are out of hints.');
        }
    }
});

document.getElementById('showAmount').addEventListener('click', () => {
    if (canUseButtons) {
        say(`There are ${allSets.length} sets.`);
    }
});

function say(thingToSay) {
    document.getElementById('title').innerText = thingToSay;
}

function show(thingToShow) {
    document.getElementById(thingToShow).style.display = 'block';
}

function hide(thingToHide) {
    document.getElementById(thingToHide).style.display = 'none';
}

function cardEventListener(i) {
    if (!canClick) {
        if (set.length <= 3 && boardCards[i] !== set[0] && boardCards[i] !== set[1] && boardCards[i] !== set[2]) {
            document.getElementById('card' + i).style.border = `2px solid ${currentPlayerColour}`;
            set.push(boardCards[i]);
        }
        if (set.length == 3) {
            isCounting = false;
            canClick = true;
            let colour = false;
            let fill = false;
            let amount = false;
            let shape = false;
            if (set[0].colour !== set[1].colour && set[0].colour !== set[2].colour && set[1].colour !== set[2].colour || set[0].colour == set[1].colour && set[0].colour == set[2].colour && set[1].colour == set[2].colour) {
                colour = true;
            }
            if (set[0].fill !== set[1].fill && set[0].fill !== set[2].fill && set[1].fill !== set[2].fill || set[0].fill == set[1].fill && set[0].fill == set[2].fill && set[1].fill == set[2].fill) {
                fill = true;
            }
            if (set[0].amount !== set[1].amount && set[0].amount !== set[2].amount && set[1].amount !== set[2].amount || set[0].amount == set[1].amount && set[0].amount == set[2].amount && set[1].amount == set[2].amount) {
                amount = true;
            }
            if (set[0].shape !== set[1].shape && set[0].shape !== set[2].shape && set[1].shape !== set[2].shape || set[0].shape == set[1].shape && set[0].shape == set[2].shape && set[1].shape == set[2].shape) {
                shape = true;
            }
            if (colour && fill && amount && shape) {
                if (currentPlayerColour == player1Colour) {
                    player1Score += 1;
                    document.getElementById('player1Score').innerText = player1Score;
                } else if (currentPlayerColour == player2Colour) {
                    player2Score += 1;
                    document.getElementById('player2Score').innerText = player2Score;
                } else if (currentPlayerColour == player3Colour) {
                    player3Score += 1;
                    document.getElementById('player3Score').innerText = player3Score;
                } else if (currentPlayerColour == player4Colour) {
                    player4Score += 1;
                    document.getElementById('player4Score').innerText = player4Score;
                }
                say('Good job thats a set!');
                findSets();
                if (have15Cards) {
                    for (let x = 0; x < boardCards.length; x++) {
                        document.getElementById(`card${x}`).style.border = '2px solid #fff';
                    }
                    document.getElementById('card12').remove();
                    document.getElementById('card13').remove();
                    document.getElementById('card14').remove();
                    document.getElementById('cardContainer').style.gridTemplateColumns = 'repeat(4, 1fr)';
                    have15Cards = false;
                    for (let x = 0; x < boardCards.length; x++) {
                        for (let e = 0; e < 3; e++) {
                            if (set[e] == boardCards[x]) {
                                boardCards.splice(x, 1);
                            }
                        }
                    }
                    for (let x = 0; x < boardCards.length; x++) {
                        let colour = boardCards[x].colour;
                        let shape = boardCards[x].shape;
                        let fill = boardCards[x].fill;
                        let amount = boardCards[x].amount;
                        if (amount == '1') {
                            document.getElementsByClassName('img' + x + 'layer3')[0].src = 'images/blank.jpg';
                            document.getElementsByClassName('img' + x +'layer3')[1].src = `images/${colour}/${shape}/${fill}.jpg`;
                            document.getElementsByClassName('img' + x + 'layer3')[2].src = 'images/blank.jpg';
                            document.getElementsByClassName('img' + x + 'layer2')[0].src = 'images/blank.jpg';
                            document.getElementsByClassName('img' + x + 'layer2')[1].src = 'images/blank.jpg';
                        } else if (amount == '2') {
                            document.getElementsByClassName('img' + x + 'layer3')[0].src = 'images/blank.jpg';
                            document.getElementsByClassName('img' + x +'layer3')[1].src = 'images/blank.jpg';
                            document.getElementsByClassName('img' + x + 'layer3')[2].src = 'images/blank.jpg';
                            document.getElementsByClassName('img' + x + 'layer2')[0].src = `images/${colour}/${shape}/${fill}.jpg`;
                            document.getElementsByClassName('img' + x + 'layer2')[1].src = `images/${colour}/${shape}/${fill}.jpg`;
                        } else if (amount == '3') {
                            document.getElementsByClassName('img' + x + 'layer3')[0].src = `images/${colour}/${shape}/${fill}.jpg`;
                            document.getElementsByClassName('img' + x + 'layer3')[1].src = `images/${colour}/${shape}/${fill}.jpg`;
                            document.getElementsByClassName('img' + x + 'layer3')[2].src = `images/${colour}/${shape}/${fill}.jpg`;
                            document.getElementsByClassName('img' + x + 'layer2')[0].src = 'images/blank.jpg';
                            document.getElementsByClassName('img' + x + 'layer2')[1].src = 'images/blank.jpg';
                        }
                    }
                } else {
                    for (let x = 0; x < boardCards.length; x++) {
                        document.getElementById(`card${x}`).style.border = '2px solid #fff';
                    }
                    for (let x = 0; x < boardCards.length; x++) {
                        for (let e = 0; e < 3; e++) {
                            if (set[e] == boardCards[x]) {
                                randomCard = allCards[Math.floor(Math.random() * allCards.length)];
                                for (let y = 0; y < allCards.length; y++) {
                                    if (allCards[y] == randomCard) {
                                        placeFound = y;
                                        break;
                                    }
                                }
                                boardCards.splice(x, 1);
                                allCards.splice(placeFound, 1);
                                boardCards.splice(x, 0, randomCard);
                                let colour = boardCards[x].colour;
                                let shape = boardCards[x].shape;
                                let fill = boardCards[x].fill;
                                let amount = boardCards[x].amount;
                                if (amount == '1') {
                                    document.getElementsByClassName('img' + x + 'layer3')[0].src = 'images/blank.jpg';
                                    document.getElementsByClassName('img' + x +'layer3')[1].src = `images/${colour}/${shape}/${fill}.jpg`;
                                    document.getElementsByClassName('img' + x + 'layer3')[2].src = 'images/blank.jpg';
                                    document.getElementsByClassName('img' + x + 'layer2')[0].src = 'images/blank.jpg';
                                    document.getElementsByClassName('img' + x + 'layer2')[1].src = 'images/blank.jpg';
                                } else if (amount == '2') {
                                    document.getElementsByClassName('img' + x + 'layer3')[0].src = 'images/blank.jpg';
                                    document.getElementsByClassName('img' + x +'layer3')[1].src = 'images/blank.jpg';
                                    document.getElementsByClassName('img' + x + 'layer3')[2].src = 'images/blank.jpg';
                                    document.getElementsByClassName('img' + x + 'layer2')[0].src = `images/${colour}/${shape}/${fill}.jpg`;
                                    document.getElementsByClassName('img' + x + 'layer2')[1].src = `images/${colour}/${shape}/${fill}.jpg`;
                                } else if (amount == '3') {
                                    document.getElementsByClassName('img' + x + 'layer3')[0].src = `images/${colour}/${shape}/${fill}.jpg`;
                                    document.getElementsByClassName('img' + x + 'layer3')[1].src = `images/${colour}/${shape}/${fill}.jpg`;
                                    document.getElementsByClassName('img' + x + 'layer3')[2].src = `images/${colour}/${shape}/${fill}.jpg`;
                                    document.getElementsByClassName('img' + x + 'layer2')[0].src = 'images/blank.jpg';
                                    document.getElementsByClassName('img' + x + 'layer2')[1].src = 'images/blank.jpg';
                                }
                            }
                        }
                    }
                }
                if (allCards.length == 0) {
                    for (let x = 0; x < boardCards.length; x++) {
                        document.getElementsByClassName('img' + x + 'layer3')[0].src = 'images/blank.jpg';
                        document.getElementsByClassName('img' + x + 'layer3')[1].src = 'images/blank.jpg';
                        document.getElementsByClassName('img' + x + 'layer3')[2].src = 'images/blank.jpg';
                        document.getElementsByClassName('img' + x + 'layer2')[0].src = 'images/blank.jpg';
                        document.getElementsByClassName('img' + x + 'layer2')[1].src = 'images/blank.jpg';
                    }
                    boardCards = [];
                    show('endOverlay');
                    canUseButtons = false;
                    say('Good Job!');
                    let winner;
                    if (amountOfPlayers == 4) {
                        if (player1Score > player2Score && player1Score > player3Score && player1Score > player4Score) {
                            winner = 'Player 1 Wins';
                        } else if (player2Score > player1Score && player1Score > player2Score && player2Score > player4Score) {
                            winner = 'Player 2 Wins';
                        } else if (player3Score > player1Score && player3Score > player2Score && player3Score > player4Score) {
                            winner = 'Player 3 Wins';
                        } else if (player4Score > player1Score && player4Score > player2Score && player4Score > player3Score) {
                            winner = 'Player 4 Wins';
                        } else if (player1Score == player2Score && player1Score > player3Score && player1Score > player4Score) {
                            winner = 'Player 1 and Player 2 Tied!';
                        } else if (player2Score == player3Score && player2Score > player4Score && player2Score > player1Score) {
                            winner = 'Player 2 and Player 3 Tied!';
                        } else if (player3Score == player4Score && player3Score > player1Score && player3Score > player2Score) {
                            winner = 'Player 3 and Player 4 Tied!';
                        } else if (player1Score == player4Score && player1Score > player2Score && player1Score > player3Score) {
                            winner = 'Player 1 and Player 4 Tied!';
                        } else if (player1Score == player3Score && player1Score > player2Score && player1Score > player4Score) {
                            winner = 'Player 1 and Player 3 Tied!';
                        } else if (player2Score == player4Score && player2Score > player1Score && player2Score > player3Score) {
                            winner = 'Player 2 and Player 4 Tied!';
                        } else if (player1Score == player2Score && player1Score == player3Score && player1Score > player4Score) {
                            winner = 'Player 1, Player 2 and Player 3 Tied!';
                        } else if (player2Score == player3Score && player2Score == player4Score && player2Score > player1Score) {
                            winner = 'Player 2, Player 3 and Player 4 Tied!';
                        } else if (player1Score == player3Score && player1Score == player4Score && player1Score > player2Score) {
                            winner = 'Player 1, Player 3 and Player 4 Tied!';
                        } else if (player1Score == player2Score && player1Score == player4Score && player1Score > player3Score) {
                            winner = 'Player 1, Player 2 and Player 4 Tied!';
                        } else if (player1Score == player2Score && player1Score == player3Score && player1Score == player4Score) {
                            winner = 'Everyone Tied!';
                        }
                        document.getElementById('score1').innerText = "Player 1's Sets: " + player1Score;
                        document.getElementById('score2').innerText = "Player 2's Sets: " + player2Score;
                        document.getElementById('score3').innerText = "Player 3's Sets: " + player3Score;
                        document.getElementById('score4').innerText = "Player 4's Sets: " + player4Score;
                    } else if (amountOfPlayers == 3) {
                        if (player1Score > player2Score && player1Score > player3Score) {
                            winner = 'Player 1 Wins';
                        } else if (player2Score > player1Score && player1Score > player2Score) {
                            winner = 'Player 2 Wins';
                        } else if (player3Score > player1Score && player3Score > player2Score) {
                            winner = 'Player 3 Wins';
                        } else if (player3Score == player1Score && player1Score > player2Score) {
                            winner = 'Player 1 and Player 3 Tied!';
                        } else if (player1Score == player2Score && player2Score > player2Score) {
                            winner = 'Player 1 and Player 2 Tied!';
                        } else if (player2Score == player3Score && player2Score > player1Score) {
                            winner = 'Player 2 and Player 3 Tied!';
                        } else if (player2Score == player3Score && player2Score == player1Score) {
                            winner = 'Everyone Tied!';
                        }
                        document.getElementById('score1').innerText = "Player 1's Sets: " + player1Score;
                        document.getElementById('score2').innerText = "Player 2's Sets: " + player2Score;
                        document.getElementById('score3').innerText = "Player 3's Sets: " + player3Score;
                    } else if (amountOfPlayers == 2) {
                        if (player1Score > player2Score) {
                            winner = 'Player 1 Wins!';
                        } else if (player1Score < player2Score) {
                            winner = 'Player 2 Wins!';
                        } else if (player1Score == player2Score) {
                            winner = 'Its a Tie!';
                        }
                        document.getElementById('score1').innerText = "Player 1's Sets: " + player1Score;
                        document.getElementById('score2').innerText = "Player 2's Sets: " + player2Score;
                    } else if (amountOfPlayers == 1) {
                        winner = 'Good Job You Found All The Sets!';
                        document.getElementById('score1').innerText = "Your Sets: " + player1Score;
                    }
                    document.getElementById('winner').innerText = winner;
                }
            } else {
                if (colour && fill && amount && !shape) {
                    if (set[0].shape == set[1].shape && set[1].shape !== set[2].shape) {
                        say('So close but you have two ' + set[0].shape + 's and one ' + set[2].shape);
                    } else if (set[2].shape == set[1].shape && set[1].shape !== set[0].shape) {
                        say('So close but you have two ' + set[1].shape + 's and one ' + set[0].shape);
                    } else if (set[0].shape == set[2].shape && set[0].shape !== set[1].shape) {
                        say('So close but you have two ' + set[0].shape + 's and one ' + set[1].shape);
                    }
                    notASet();
                } else if (colour && fill && !amount && shape) {
                    if (set[0].amount == set[1].amount && set[1].amount !== set[2].amount) {
                        say('So close but you have two ' + set[0].amount + 's and one ' + set[2].amount);
                    } else if (set[2].amount == set[1].amount && set[1].amount !== set[0].amount) {
                        say('So close but you have two ' + set[1].amount + 's and one ' + set[0].amount);
                    } else if (set[0].amount == set[2].amount && set[0].amount !== set[1].amount) {
                        say('So close but you have two ' + set[0].amount + 's and one ' + set[1].amount);
                    }
                    notASet();
                } else if (colour && !fill && amount && shape) {
                    if (set[0].fill == set[1].fill && set[1].fill !== set[2].fill) {
                        say('So close but you have two ' + set[0].fill + 's and one ' + set[2].fill);
                    } else if (set[2].fill == set[1].fill && set[1].fill !== set[0].fill) {
                        say('So close but you have two ' + set[1].fill + 's and one ' + set[0].fill);
                    } else if (set[0].fill == set[2].fill && set[0].fill !== set[1].fill) {
                        say('So close but you have two ' + set[0].fill + 's and one ' + set[1].fill);
                    }
                    notASet();
                } else if (!colour && fill && amount && shape) {
                    if (set[0].colour == set[1].colour && set[1].colour !== set[2].colour) {
                        say('So close but you have two ' + set[0].colour + 's and one ' + set[2].colour);
                    } else if (set[2].colour == set[1].colour && set[1].colour !== set[0].colour) {
                        say('So close but you have two ' + set[1].colour + 's and one ' + set[0].colour);
                    } else if (set[0].colour == set[2].colour && set[0].colour !== set[1].colour) {
                        say('So close but you have two ' + set[0].colour + 's and one ' + set[1].colour);
                    }
                    notASet();
                } else {
                    say('Thats not a set.');
                    notASet();
                }
            }
            set = [];
        }
    }
}

function notASet() { 
    for (let x = 0; x < boardCards.length; x++) {
        document.getElementById('card' + x).style.border = '2px solid #fff';
    }
}

function findSets() {
    allSets = [];
    for (let s = 0; s < boardCards.length - 1; s++) {
        for (let e = 0; e < boardCards.length; e++) {
            for (let t = 0; t < boardCards.length; t++) {
                if (s !== e && t !== s && e !== t && s - 1 < e && e - 1 < t) {
                    let colour = false;
                    let fill = false;
                    let amount = false;
                    let shape = false;
                    if (boardCards[s].colour !== boardCards[e].colour && boardCards[s].colour !== boardCards[t].colour && boardCards[e].colour !== boardCards[t].colour || boardCards[s].colour == boardCards[e].colour && boardCards[s].colour == boardCards[t].colour && boardCards[e].colour == boardCards[t].colour) {
                        colour = true;
                    }
                    if (boardCards[s].fill !== boardCards[e].fill && boardCards[s].fill !== boardCards[t].fill && boardCards[e].fill !== boardCards[t].fill || boardCards[s].fill == boardCards[e].fill && boardCards[s].fill == boardCards[t].fill && boardCards[e].fill == boardCards[t].fill) {
                        fill = true;
                    }
                    if (boardCards[s].amount !== boardCards[e].amount && boardCards[s].amount !== boardCards[t].amount && boardCards[e].amount !== boardCards[t].amount || boardCards[s].amount == boardCards[e].amount && boardCards[s].amount == boardCards[t].amount && boardCards[e].amount == boardCards[t].amount) {
                        amount = true;
                    }
                    if (boardCards[s].shape !== boardCards[e].shape && boardCards[s].shape !== boardCards[t].shape && boardCards[e].shape !== boardCards[t].shape || boardCards[s].shape == boardCards[e].shape && boardCards[s].shape == boardCards[t].shape && boardCards[e].shape == boardCards[t].shape) {
                        shape = true;
                    }
                    if (colour && fill && amount && shape) {
                        allSets.push({s, e, t});
                    }
                }
            }
        }
    }
    if (allSets.length == 0) {
        say('There are no sets.');
    }
}
findSets();

function countdown(playerColour, number) {
    if (canUseButtons) {
        document.getElementById('player' + number).addEventListener('click', () => {
            if (canClick) {
                canClick = false;
                currentPlayerColour = playerColour;
                let timeLeft = 10;
                document.getElementById('player' + number).innerText = timeLeft;
                const timer = setInterval(() => {
                    if (isCounting) {
                        timeLeft -= 1;
                        document.getElementById('player' + number).innerText = timeLeft;
                        if (timeLeft === 0) {
                            clearInterval(timer);
                            canClick = true;
                            document.getElementById('player' + number).innerText = 'Player ' + number;
                            set = [];
                            for (let x = 0; x < boardCards.length; x++) {
                                document.getElementById(`card${x}`).style.border = '2px solid #fff';
                            }
                        }
                    } else {
                        document.getElementById('player' + number).innerText = 'Player ' + number;
                        clearInterval(timer);
                        canClick = true;
                        isCounting = true;
                    }
                }, 1000);
            }
        });
    }
}
countdown(player1Colour, 1);
countdown(player2Colour, 2);
countdown(player3Colour, 3);
countdown(player4Colour, 4);

hide('gameOverlay');
hide('part1');
hide('part2');
hide('part3');
hide('part4');
hide('endOverlay');
document.getElementById('player1').style.backgroundColor = player1Colour;
document.getElementById('player2').style.backgroundColor = player2Colour;
document.getElementById('player3').style.backgroundColor = player3Colour;
document.getElementById('player4').style.backgroundColor = player4Colour;
document.getElementById('1player').addEventListener('click', () => {
    show('gameOverlay');
    hide('startOverlay');
    show('playerButtons');
    show('part1');
    amountOfPlayers = 1;
});
document.getElementById('2player').addEventListener('click', () => {
    show('gameOverlay');
    hide('startOverlay');
    show('playerButtons');
    show('part1');
    show('part2');
    amountOfPlayers = 2
});
document.getElementById('3player').addEventListener('click', () => {
    show('gameOverlay');
    hide('startOverlay');
    show('playerButtons');
    show('part1');
    show('part2');
    show('part3');
    amountOfPlayers = 3
});
document.getElementById('4player').addEventListener('click', () => {
    show('gameOverlay');
    hide('startOverlay');
    show('playerButtons');
    show('part1');
    show('part2');
    show('part3');
    show('part4');
    amountOfPlayers = 4;
});

function updateCards(amount, letter) {
    if (amount == '1') {
        document.getElementsByClassName('img' + letter + 'layer3')[0].src = 'images/blank.jpg';
        document.getElementsByClassName('img' + letter +'layer3')[1].src = `images/${colour}/${shape}/${fill}.jpg`;
        document.getElementsByClassName('img' + letter + 'layer3')[2].src = 'images/blank.jpg';
        document.getElementsByClassName('img' + letter + 'layer2')[0].src = 'images/blank.jpg';
        document.getElementsByClassName('img' + letter + 'layer2')[1].src = 'images/blank.jpg';
    } else if (amount == '2') {
        document.getElementsByClassName('img' + letter + 'layer3')[0].src = 'images/blank.jpg';
        document.getElementsByClassName('img' + letter +'layer3')[1].src = 'images/blank.jpg';
        document.getElementsByClassName('img' + letter + 'layer3')[2].src = 'images/blank.jpg';
        document.getElementsByClassName('img' + letter + 'layer2')[0].src = `images/${colour}/${shape}/${fill}.jpg`;
        document.getElementsByClassName('img' + letter + 'layer2')[1].src = `images/${colour}/${shape}/${fill}.jpg`;
    } else if (amount == '3') {
        document.getElementsByClassName('img' + letter + 'layer3')[0].src = `images/${colour}/${shape}/${fill}.jpg`;
        document.getElementsByClassName('img' + letter + 'layer3')[1].src = `images/${colour}/${shape}/${fill}.jpg`;
        document.getElementsByClassName('img' + letter + 'layer3')[2].src = `images/${colour}/${shape}/${fill}.jpg`;
        document.getElementsByClassName('img' + letter + 'layer2')[0].src = 'images/blank.jpg';
        document.getElementsByClassName('img' + letter + 'layer2')[1].src = 'images/blank.jpg';
    }
}

function restart() {
    say('Look for sets');
    allCards = JSON.parse(JSON.stringify(allCards2));
    canUseButtons = true;
    hide('endOverlay');
    player1Score = 0;
    player2Score = 0;
    player3Score = 0;
    player4Score = 0;
    document.getElementById('player1Score').innerText = player1Score;
    document.getElementById('player2Score').innerText = player2Score;
    document.getElementById('player3Score').innerText = player3Score;
    document.getElementById('player4Score').innerText = player4Score;
    hintsLeft = 5;
    createCards();
}