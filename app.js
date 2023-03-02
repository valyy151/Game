class Player {
	constructor() {
		this.positionX = 0;
		this.positionY = 0;
		this.player = document.getElementById('player');
	}
	moveLeft() {
		this.positionX -= 2;
		this.player.style.left = this.positionX + 'vw';
	}

	moveRight() {
		this.positionX += 2;
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

class Obstacle {
	constructor() {
		this.positionX = Math.random() * 100 + 'vw';
		this.positionY = 100;

		this.createObstacle();
	}

	createObstacle() {
		this.newObstacle = document.createElement('div');
		this.newObstacle.className = 'obstacle';
		this.newObstacle.style.left = this.positionX;
		const board = document.getElementById('board');

		board.appendChild(this.newObstacle);
	}

	move() {
		this.positionY--;
		this.newObstacle.style.bottom = this.positionY + 'vh';
	}
}

const obstacleArray = [];

setInterval(() => {
	const obstacle = new Obstacle();
	obstacleArray.push(obstacle);
}, 1000);

setInterval(() => {}, 50);
