export default class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
    }

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('startButton', 'assets/button.png');
        this.load.image('logButton', 'assets/logButton.png');
    }

    create() {
        this.add.image(400, 300, 'background');

        const startButton = this.add.sprite(400, 220, 'startButton').setInteractive();
        const logButton = this.add.sprite(400, 470, 'logButton').setInteractive();
        let logButtonScale = 0.35;
        logButton.setScale(logButtonScale);

        startButton.on('pointerdown', () => {
            this.tweens.add({
                targets: startButton,
                scaleX: 0.92,
                scaleY: 0.92,
                duration: 150,
                yoyo: true,
                onComplete: () => {
                    this.scene.start('MainGameScene');
                }
            });
        });

        logButton.on('pointerdown', () => {
            this.tweens.add({
                targets: logButton,
                scaleX: logButtonScale * 0.92,
                scaleY: logButtonScale * 0.92,
                duration: 150,
                yoyo: true,
                onComplete: () => {
                    this.scene.start('ChangeLogScene');
                }
            });
        });
    }
}