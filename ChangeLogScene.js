export default class ChangeLogScene extends Phaser.Scene {
    constructor() {
        super({ key: 'ChangeLogScene' });
    }

    preload() {
        this.load.image('backButton', 'assets/backButton.png');
    }

    create() {
        this.add.text(400, 100, `Change Log`, { fontFamily: 'Calibri', fontSize: '64px', fill:'#fff', fontWeight: 'bold' }).setOrigin(0.5)
        this.add.text(400, 250, `* added Start button\n\n* added Change log`, { fontFamily: 'Calibri', fontSize: '32px', fill:'#fff' }).setOrigin(0.5)
        const button = this.add.sprite(400, 480, 'backButton').setInteractive();
        let backButtonScale = 0.75;
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
        })
    }
}