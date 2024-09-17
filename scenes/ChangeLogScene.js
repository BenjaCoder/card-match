export default class ChangeLogScene extends Phaser.Scene {
    constructor() {
        super({ key: 'ChangeLogScene' });
    }

    preload() {
        this.load.image('backButton', './assets/backButton.png');
    }

    create() {
        this.add.text(400, 100, `Change Log`, { fontFamily: 'Calibri', fontSize: '64px', fill:'#fff', fontWeight: 'bold' }).setOrigin(0.5)
        createChangeLog(this);
        const button = this.add.sprite(400, 500, 'backButton').setInteractive();
        let backButtonScale = 0.70;
        button.setScale(backButtonScale)
    
        button.on('pointerdown', () => {
            this.tweens.add({
                targets: button,
                scaleX: backButtonScale * 0.92,
                scaleY: backButtonScale * 0.92,
                duration: 150,
                yoyo: true,
                onComplete: () => {
                    this.scene.start('StartScene');
                }
            });
        });
    }
}

const changeList = [
    {
        'date': '2024-09-17',
        'changes': ['Added OptionsScene with options for different card themes', 'Increased card image size']
    },
    {
        'date': '2024-09-16',
        'changes': ['Refactored StartScene and ChangeLogScene into their own files']
    },
    {
        'date': '2024-09-15',
        'changes': ['Added ChangeLogScene to track updates to the game']
    },
    {
        'date': '2024-09-14',
        'changes': ['Added StartScene with button to start the game']
    },
    {
        'date': '2024-09-12',
        'changes': ['Created initial version of the game']
    },
    
]

function createChangeLog(scene) {
    let changeLog = ''
    let i = 0;
    let j = 0
    while (j < 4) {
        changeLog += `\n${changeList[i].date}\n`
        changeList[i].changes.forEach(change => {
            changeLog += `• ${change}\n`
            j++;
        });
        i++;
    }
    // for (let i = 0; i < 4; i++) {
    //     changeLog += `\n${changeList[i].date}\n`
    //     changeList[i].changes.forEach(change => {
    //         changeLog += `• ${change}\n`
    //     });
    // }
    scene.add.text(400, 280, changeLog, { fontFamily: 'Calibri', fontSize: '24px', fill: '#fff', wordWrap: true }).setOrigin(0.5)
}