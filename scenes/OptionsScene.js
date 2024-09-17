export default class OptionsScene extends Phaser.Scene {
    constructor() {
        super({ key: 'OptionsScene' });
    }

    preload() {
        this.load.image('buttonEHERO', './assets/buttonEHERO.png');
        this.load.image('buttonMagnets', './assets/buttonMagnets.png');
        this.load.image('buttonBakura', './assets/buttonBakura.png');
        this.load.image('buttonXYZ', './assets/buttonXYZ.png');
        this.load.image('backButton', './assets/backButton.png');
    }

    create() {
        this.add.text(400, 80, `Options`, { fontFamily: 'Calibri', fontSize: '64px', fill:'#fff', fontWeight: 'bold' }).setOrigin(0.5)
        const buttonEHERO = this.add.sprite(250, 210, 'buttonEHERO').setInteractive();
        const buttonMagnets = this.add.sprite(550, 210, 'buttonMagnets').setInteractive();
        const buttonBakura = this.add.sprite(250, 350, 'buttonBakura').setInteractive();
        const buttonXYZ = this.add.sprite(550, 350, 'buttonXYZ').setInteractive();
        const backButton = this.add.sprite(400, 500, 'backButton').setInteractive();
        let buttonThemeScale = 1.2;
        let backButtonScale = 0.70;
        buttonEHERO.setScale(buttonThemeScale);
        buttonMagnets.setScale(buttonThemeScale);
        buttonBakura.setScale(buttonThemeScale);
        buttonXYZ.setScale(buttonThemeScale);
        backButton.setScale(backButtonScale);

        buttonEHERO.on('pointerdown', () => {
            this.tweens.add({
                targets: buttonEHERO,
                scaleX: buttonThemeScale * 0.92,
                scaleY: buttonThemeScale * 0.92,
                duration: 150,
                yoyo: true,
                onComplete: () => {
                    this.scene.start('MainGameScene', {
                        theme: 'Elemental HERO'
                    });
                }
            });
        });

        buttonMagnets.on('pointerdown', () => {
            this.tweens.add({
                targets: buttonMagnets,
                scaleX: buttonThemeScale * 0.92,
                scaleY: buttonThemeScale * 0.92,
                duration: 150,
                yoyo: true,
                onComplete: () => {
                    this.scene.start('MainGameScene', {
                        theme: 'Magnet Warriors'
                    });
                }
            });
        });

        buttonBakura.on('pointerdown', () => {
            this.tweens.add({
                targets: buttonBakura,
                scaleX: buttonThemeScale * 0.92,
                scaleY: buttonThemeScale * 0.92,
                duration: 150,
                yoyo: true,
                onComplete: () => {
                    this.scene.start('MainGameScene', {
                        theme: 'Bakura'
                    });
                }
            });
        });

        buttonXYZ.on('pointerdown', () => {
            this.tweens.add({
                targets: buttonXYZ,
                scaleX: buttonThemeScale * 0.92,
                scaleY: buttonThemeScale * 0.92,
                duration: 150,
                yoyo: true,
                onComplete: () => {
                    this.scene.start('MainGameScene', {
                        theme: 'XYZ Dragon Cannon'
                    });
                }
            });
        });
    
        backButton.on('pointerdown', () => {
            this.tweens.add({
                targets: backButton,
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