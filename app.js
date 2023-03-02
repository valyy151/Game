class Player {
	constructor() {
		this.positionX = 0;
		this.positionY = 0;
		this.player = document.getElementById('player');
	}
	moveLeft() {
		this.positionX--;
		this.player.style.left = this.positionX + 'vw';
	}

	moveRight() {
		this.positionX++;
		this.player.style.left = this.positionX + 'vw';
	}
}

const player = new Player();

document.addEventListener('keydown', (e) => {
	if (e.key === 'ArrowLeft') {
		player.moveLeft();
	} else if (e.key === 'ArrowRight') {
		player.moveRight();
	}
});
