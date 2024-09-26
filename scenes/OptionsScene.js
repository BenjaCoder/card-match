export default class OptionsScene extends Phaser.Scene {
    constructor() {
        super({ key: 'OptionsScene' });
    }

    preload() {
        this.load.image('backButton', './assets/backButton.png');
    }

    create() {
        const themes = [
            ['Elemental HERO', 'Magnets', 'Bakura', 'XYZ-Dragon Cannon'],
            ['Alexis', 'Cyber Dragon', 'Destiny HERO', 'Forbidden One']
        ]

        let day = new Date().getDate();
        let index = day % 2;
        let todaysSet = themes[index];
        let scaleXY = 0.92;
        
        this.add.text(400, 80, 'Options', { fontFamily: 'Calibri', fontSize: '64px', fill:'#fff', fontWeight: 'bold' }).setOrigin(0.5)

        for (let i = 0; i < todaysSet.length; i++) {
            let x = i % 2 == 1 ? 550 : 250;
            let y = i < 2 ? 210 : 350;
            let button = this.add.rectangle(x, y, 200, 50, 0xffffff).setInteractive();
            let text = this.add.text(x, y, todaysSet[i], { fontFamily: 'Calibri', fontSize: '24px', fill: '#086' }).setOrigin(0.5);

            button.on('pointerdown', () => {
                this.tweens.add({
                    targets: [button, text],
                    scaleX: scaleXY,
                    scaleY: scaleXY,
                    duration: 150,
                    yoyo: true,
                    onComplete: () => {
                        this.scene.start('MainGameScene', {
                            theme: todaysSet[i]
                        });
                    }
                });
            });
        }
        
        const backButton = this.add.sprite(400, 500, 'backButton').setInteractive();
        let backButtonScale = 0.70;

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