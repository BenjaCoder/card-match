import StartScene from './scenes/StartScene.js';
import ChangeLogScene from './scenes/ChangeLogScene.js';
import OptionsScene from './scenes/OptionsScene.js';

let cardData = [
    {
        theme: 'Elemental HERO',
        cards: [
            { id: 6310, name: "Elemental HERO Avian", image: "6310.png" },
            { id: 6311, name: "Elemental HERO Burstinatrix", image: "6311.png" },
            { id: 6312, name: "Elemental HERO Clayman", image: "6312.png" },
            { id: 6313, name: "Elemental HERO Sparkman", image: "6313.png" },
        ]
    },
    {
        theme: 'Magnets',
        cards: [
            { id: 4744, name: "Alpha The Magnet Warrior", image: "4744.png" },
            { id: 4763, name: "Beta The Magnet Warrior", image: "4763.png" },
            { id: 4792, name: "Gamma The Magnet Warrior", image: "4792.png" },
            { id: 5002, name: "Valkyrion the Magna Warrior", image: "5002.png" },
        ]
    },
    {
        theme: 'Bakura',
        cards: [
            { id: 5219, name: "The Portrait's Secret", image: "5219.png" },
            { id: 5220, name: "The Gross Ghost of Fled Dreams", image: "5220.png" },
            { id: 5221, name: "Headless Knight", image: "5221.png" },
            { id: 5222, name: "Dark Necrofear", image: "5222.png" }
        ]
    },
    {
        theme: 'XYZ-Dragon Cannon',
        cards: [
            { id: 5504, name: "X-Head Cannon", image: "5504.png" },
            { id: 5552, name: "Y-Dragon Head", image: "5552.png" },
            { id: 5555, name: "Z-Metal Tank", image: "5555.png" },
            { id: 5556, name: "XYZ-Dragon Cannon", image: "5556.png" }
        ]
    },
    {
        theme: 'Destiny HERO',
        cards: [
            { id: 6658, name: "Destiny HERO - Doom Lord", image: "6658.png" },
            { id: 6659, name: "Destiny HERO - Captain Tenacious", image: "6659.png" },
            { id: 6660, name: "Destiny HERO - Diamond Dude", image: "6660.png" },
            { id: 6661, name: "Destiny HERO - Dreadmaster", image: "6661.png" }
        ]
    },
    {
        theme: 'Alexis',
        cards: [
            { id: 6472, name: "Blade Skater", image: "6472.png" },
            { id: 6482, name: "Etoile Cyber", image: "6482.png" },
            { id: 6485, name: "Cyber Blader", image: "6485.png" },
            { id: 6666, name: "Cyber Prima", image: "6666.png" }
        ]
    },
    {
        theme: 'Forbidden One',
        cards: [
            { id: 4023, name: "Right Leg of the Forbidden One", image: "4023.png" },
            { id: 4024, name: "Left Leg of the Forbidden One", image: "4024.png" },
            { id: 4025, name: "Right Arm of the Forbidden One", image: "4025.png" },
            { id: 4026, name: "Left Arm of the Forbidden One", image: "4026.png" }
        ]
    },
    {
        theme: 'Cyber Dragon',
        cards: [
            { id: 6390, name: "Cyber Dragon", image: "6390.png" },
            { id: 6396, name: "Cyber Twin Dragon", image: "6396.png" },
            { id: 6397, name: "Cyber End Dragon", image: "6397.png" },
            { id: 6588, name: "Proto-Cyber Dragon", image: "6588.png" }
        ]
    }
];

let cards = [];
let cardBack;
let firstCard, secondCard;
let score = 0;
let scoreText;
let timeLeft = 20
let timerText;
const cardScaling = 0.7

function flipCard(card) {
    this.tweens.add({
        targets: card,
        scaleX: 0,
        duration: 300,
        onComplete: () => {
            card.setTexture(card.isFlipped ? card.cardId : 'cardBack');
            this.tweens.add({
                targets: card,
                scaleX: cardScaling,
                duration: 300
            });
        }
    });
    card.isFlipped = !card.isFlipped;
}

function checkMatch() {
    if (firstCard.cardId === secondCard.cardId) {
        score += 10;
        scoreText.setText(`Score: ${score}`);
        firstCard.disableInteractive();
        secondCard.disableInteractive();
        firstCard = null;
        secondCard = null;
        this.time.delayedCall(1000, () => { checkForVictory.call(this) });
    } else {
        this.time.delayedCall(1000, () => {
            score -= 5;
            scoreText.setText(`Score: ${score}`);
            flipCard.call(this, firstCard);
            flipCard.call(this, secondCard);
            firstCard = null;
            secondCard = null;
        })
    }
}

function endGame() {
    this.add.text(400, 300, 'Game Over', { fontSize: '64px', fill: '#fff', backgroundColor: 'red' }).setOrigin(0.5);
    this.scene.pause();
}

function checkForVictory() {
    if (cards.every(card => card.isFlipped)) {
        this.add.text(400, 300, 'You win!', { fontSize: '64px', fill: '#fff', backgroundColor: 'red' }).setOrigin(0.5);
        this.scene.pause();
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

class MainGameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainGameScene'});
    }

    init(data) {
        this.theme = data.theme;
    }
    
     preload() {
        this.load.image('cardBack', '/assets/card_back.png');
        let myCardData = '';
        cardData.forEach((themeSet, index) => {
            if (themeSet.theme == this.theme)
                myCardData = cardData[index];
        });
        let myCards = myCardData.cards;
        myCards = [...myCards].concat([...myCards])
        myCards.forEach(card => {
            this.load.image(card.id, `/assets/${card.image}`);
        });
        cardData = shuffle(myCards);
    }
    
     create() {
        cardBack = this.add.group();
        let startX = 120;
        let startY = 200;
        scoreText = this.add.text(50, 10, 'Score: 0', { fontSize: '32px', fill: '#fff'});
        timerText = this.add.text(580, 10, `Time: ${timeLeft}`, { fontSize: '32px', fill: '#fff' });
    
        cardData.forEach((card, index) => {
            let xOffset = index;
            if (index > 3) {
                startY = 440;
                xOffset = index - 4;
            }
            let cardSprite = this.add.sprite(startX + xOffset * 180, startY, 'cardBack').setInteractive();
            cardSprite.setScale(cardScaling)
            cardSprite.cardId = card.id;
            cardSprite.isFlipped = false;
    
            cardSprite.on('pointerdown', function() {
                if (!firstCard) {
                    firstCard = this;
                    flipCard.call(this.scene, this);
                } else if (!secondCard && this !== firstCard) {
                    secondCard = this;
                    flipCard.call(this.scene, this);
                    checkMatch.call(this.scene);
                }
            });
            cards.push(cardSprite);
        });
    
        this.time.addEvent({
            delay: 1000,
            callback: () => {
                timeLeft--;
                timerText.setText('Time: ' + timeLeft);
                if (timeLeft <= 0) {
                    endGame.call(this);
                }
            },
            loop: true
        })
    }
    
     update() {
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [StartScene, OptionsScene, ChangeLogScene, MainGameScene]
};

const game = new Phaser.Game(config);