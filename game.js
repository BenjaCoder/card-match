import StartScene from './scenes/StartScene.js';
import ChangeLogScene from './scenes/ChangeLogScene.js';
import OptionsScene from './scenes/OptionsScene.js';

let cardData = [
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
        theme: 'Aromage',
        cards: [
            { id: 11818, name: "Aromage Jasmine", image: "11818.png" },
            { id: 11819, name: "Aromage Cananga", image: "11819.png" },
            { id: 11820, name: "Aromage Rosemary", image: "11820.png" },
            { id: 11821, name: "Aromage Bergamot", image: "11821.png" }
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
        theme: 'Blackwing',
        cards: [
            { id: 8011, name: "Blackwing - Gale the Whirlwind", image: "8011.png" },
            { id: 8012, name: "Blackwing - Bora the Spear", image: "8012.png" },
            { id: 8013, name: "Blackwing - Sirocco", image: "8013.png" },
            { id: 8036, name: "Blackwing Armor Master", image: "8036.png" }
        ]
    },
    {
        theme: 'Bonz',
        cards: [
            { id: 4102, name: "Armored Zombie", image: "4102.png" },
            { id: 4103, name: "Dragon Zombie", image: "4103.png" },
            { id: 4104, name: "Clown Zombie", image: "4104.png" },
            { id: 4105, name: "Pumpking the King of Ghosts", image: "4105.png" }
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
        theme: 'Elemental HERO',
        cards: [
            { id: 6310, name: "Elemental HERO Avian", image: "6310.png" },
            { id: 6311, name: "Elemental HERO Burstinatrix", image: "6311.png" },
            { id: 6312, name: "Elemental HERO Clayman", image: "6312.png" },
            { id: 6313, name: "Elemental HERO Sparkman", image: "6313.png" },
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
        theme: 'Fossil',
        cards: [
            { id: 15365, name: "Weathering Soldier", image: "15365.png" },
            { id: 15366, name: "Fossil Warrior Skull Bone", image: "15366.png" },
            { id: 15367, name: "Fossil Warrior Skull Knight", image: "15367.png" },
            { id: 7253, name: "Fossil Warrior Skull King", image: "7253.png" }
        ]
    },
    {
        theme: 'Gate Guardian',
        cards: [
            { id: 4377, name: "Sanga of the Thunder", image: "4377.png" },
            { id: 4378, name: "Kazejin", image: "4378.png" },
            { id: 4379, name: "Suijin", image: "4379.png" },
            { id: 4380, name: "Gate Guardian", image: "4380.png" }
        ]
    },
    {
        theme: 'Greiger',
        cards: [
            { id: 7998, name: "Summon Reactor SK", image: "7998.png" },
            { id: 7999, name: "Flying Fortress SKY FIRE", image: "7999.png" },
            { id: 8000, name: "Trap Reactor Y FI", image: "8000.png" },
            { id: 8002, name: "Spell Reactor RE", image: "8002.png" }
        ]
    },
    {
        theme: 'Kuriboh',
        cards: [
            { id: 16397, name: "Kuribah", image: "16397.png" },
            { id: 16398, name: "Kuribee", image: "16398.png" },
            { id: 16399, name: "Kuriboo", image: "16399.png" },
            { id: 16400, name: "Kuribeh", image: "16400.png" }
        ]
    },
    {
        theme: 'Lumis/Umbra',
        cards: [
            { id: 5090, name: "Shining Abyss", image: "5090.png" },
            { id: 5093, name: "Grand Tiki Elder", image: "5093.png" },
            { id: 5095, name: "Melchid the Four-Faced Beast", image: "5095.png" },
            { id: 5096, name: "Nuvia the Wicked", image: "5096.png" }
        ]
    },
    {
        theme: 'Magician Girl',
        cards: [
            { id: 12356, name: "Lemon Magician Girl", image: "12356.png" },
            { id: 12358, name: "Chocolate Magician Girl", image: "12358.png" },
            { id: 12497, name: "Berry Magician Girl", image: "12497.png" },
            { id: 12498, name: "Apple Magician Girl", image: "12498.png" }
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
        theme: 'Ojama',
        cards: [
            { id: 5761, name: "Ojama Green", image: "5761.png" },
            { id: 5811, name: "Ojama Yellow", image: "5811.png" },
            { id: 5812, name: "Ojama Black", image: "5812.png" },
            { id: 6126, name: "Ojama King", image: "6126.png" }
        ]
    },
    {
        theme: 'Pegasus',
        cards: [
            { id: 4733, name: "Manga Ryu-Ran", image: "4733.png" },
            { id: 4734, name: "Toon Mermaid", image: "4734.png" },
            { id: 4735, name: "Toon Summoned Skull", image: "4735.png" },
            { id: 4773, name: "Blue-Eyes Toon Dragon", image: "4773.png" }
        ]
    },
    {
        theme: 'Phantom Beast',
        cards: [
            { id: 6954, name: "Phantom Beast Cross-Wing", image: "6954.png" },
            { id: 6955, name: "Phantom Beast Wild Horn", image: "6955.png" },
            { id: 6956, name: "Phantom Beast Thunder Pegasus", image: "6956.png" },
            { id: 6957, name: "Phantom Beast Rock Lizard", image: "6957.png" }
        ]
    },
    {
        theme: 'Rafael',
        cards: [
            { id: 20001, name: "Backup Gardna", image: "20001.png" },
            { id: 5705, name: "Guardian Grarl", image: "5705.png" },
            { id: 5706, name: "Guardian Elma", image: "5706.png" },
            { id: 5710, name: "Guardian Kay'est", image: "5710.png" }
        ]
    },
    {
        theme: 'Rex Raptor',
        cards: [
            { id: 4017, name: "Sword Arm of Dragon", image: "4017.png" },
            { id: 4038, name: "Two-Headed King Rex", image: "4038.png" },
            { id: 4085, name: "Meazowler", image: "4085.png" },
            { id: 4086, name: "Uraby", image: "4086.png" }
        ]
    },
    {
        theme: 'Ruin/Demise',
        cards: [
            { id: 13743, name: "Ruin, Angel of Oblivion", image: "4017.png" },
            { id: 13744, name: "Demise, Agent of Armageddon", image: "4038.png" },
            { id: 6612, name: "Ruin, Queen of Oblivion", image: "6612.png" },
            { id: 6613, name: "Demise, King of Armageddon", image: "6613.png" }
        ]
    },
    {
        theme: 'Team Taiyou',
        cards: [
            { id: 4190, name: "Genin", image: "4190.png" },
            { id: 4191, name: "Eyearmor", image: "4191.png" },
            { id: 4198, name: "Key Mace", image: "4198.png" },
            { id: 4036, name: "Kurama", image: "4036.png" }
        ]
    },
    {
        theme: 'Tyler Sisters',
        cards: [
            { id: 5284, name: "Amazoness Swords Woman", image: "5284.png" },
            { id: 5647, name: "Amazoness Tiger", image: "5647.png" },
            { id: 8963, name: "Amazoness Queen", image: "8963.png" },
            { id: 13146, name: "Amazoness Spy", image: "13146.png" }
        ]
    },
    {
        theme: 'Vehicroid',
        cards: [
            { id: 6386, name: "Steamroid", image: "6386.png" },
            { id: 6387, name: "Drillroid", image: "6387.png" },
            { id: 6738, name: "Sumbarineroid", image: "6738.png" },
            { id: 6739, name: "Super Vehicroid Jumbo Drill", image: "6739.png" }
        ]
    },
    {
        theme: 'Venom',
        cards: [
            { id: 7180, name: "Venom Snake", image: "7180.png" },
            { id: 7181, name: "Venom Boa", image: "7181.png" },
            { id: 7182, name: "Venom Serpent", image: "7182.png" },
            { id: 7194, name: "Venom Cobra", image: "7194.png" }
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
        theme: 'Yusei\'s Last Stand',
        cards: [
            { id: 7686, name: "Sonic Chick", image: "7686.png" },
            { id: 7688, name: "Spedd Warrior", image: "7688.png" },
            { id: 7701, name: "Quillbolt Hedgehog", image: "7701.png" },
            { id: 9799, name: "Sonic Warrior", image: "9799.png" }
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