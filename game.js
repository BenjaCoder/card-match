import StartScene from './StartScene.js';
import ChangeLogScene from './ChangeLogScene.js';

let cardData = [
    { id: 1, name: "Elemental HERO Avian", image: "card1.png" },
    { id: 2, name: "Elemental HERO Burstinatrix", image: "card2.png" },
    { id: 3, name: "Elemental HERO Clayman", image: "card3.png" },
    { id: 4, name: "Elemental HERO Sparkman", image: "card4.png" },
    { id: 1, name: "Elemental HERO Avian", image: "card1.png" },
    { id: 2, name: "Elemental HERO Burstinatrix", image: "card2.png" },
    { id: 3, name: "Elemental HERO Clayman", image: "card3.png" },
    { id: 4, name: "Elemental HERO Sparkman", image: "card4.png" },
    // Add more cards as needed
];

cardData = shuffle(cardData);

let cards = [];
let cardBack;
let firstCard, secondCard;
let score = 0;
let scoreText;
let timeLeft = 20
let timerText;
const cardScaling = 0.8

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
        this.time.delayedCall(1000, () => {checkForVictory.call(this)});
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
    
     preload() {
        this.load.image('cardBack', '/assets/card_back.png');
        cardData.forEach(card => {
            this.load.image(card.id, `/assets/${card.image}`);
        });
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
    scene: [StartScene, ChangeLogScene, MainGameScene]
};

const game = new Phaser.Game(config);