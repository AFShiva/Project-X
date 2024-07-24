class Overworld {
	constructor(config) {
		this.element = config.element;
		this.canvas = this.element.querySelector('.game-canvas');
		this.ctx = this.canvas.getContext('2d');
		this.map = null;
	}
	// Tegne funktion
	draw() {
		// Ryd hele Canvas
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		//Skab Kamera person
		const cameraPerson = this.map.gameObjects.hero;
		// updaterer alle objekter
		Object.values(this.map.gameObjects).forEach((object) => {
			object.update({
				arrow: this.directionInput.direction,
				map: this.map,
			});
		});

		// Tegn laverste layer
		this.map.drawLowerImage(this.ctx, cameraPerson);
		// Tegn Game Objects
		Object.values(this.map.gameObjects)
			.sort((a, b) => {
				return a.y - b.y;
			})
			.forEach((object) => {
				object.sprite.draw(this.ctx, cameraPerson);
			});
		// Tegn øverste layer
		this.map.drawUpperImage(this.ctx, cameraPerson);
		// Tegn UMP baggrund
		this.map.drawUmpBackImage(this.ctx, cameraPerson);
		this.map.drawUmpForImage(this.ctx, cameraPerson);
	}
	//game loop starter her
	startGameLoop() {
		// fps beregning
		const fps = 60;
		let now;
		let then = Date.now();
		let interval = 1000 / fps;
		let delta;
		const step = () => {
			if (!this.map.isPaused) {
				requestAnimationFrame(step);
			}
			now = Date.now();
			delta = now - then;

			if (delta > interval) {
				then = now - (delta % interval);
				this.draw();
			}
		};
		step();
	}

	bindActionInput() {
		new KeyPressListener('Enter', () => {
			//er der noget at snakke til?
			this.map.checkForActionCutscene();
		});
		new KeyPressListener('KeyZ', () => {
			//er der noget at snakke til?
			this.map.checkForActionCutscene();
		});
		new KeyPressListener('Space', () => {
			//er der noget at snakke til?
			this.map.checkForActionCutscene();
		});
	}

	//lytter efter hero position ændring
	bindHeroPositionCheck() {
		document.addEventListener('PersonWalkingComplete', (e) => {
			if (e.detail.whoId === 'hero') {
				//hero position har ændret sig, er der noget spændende?
				this.map.checkForFootstepCutscene();
			}
		});
	}

	startMap(mapConfig) {
		this.map = new OverworldMap(mapConfig);
		this.map.overworld = this;
		this.map.mountObjects();
	}

	init() {
		this.undermenu = new UnderMenu();
		this.undermenu.init(document.querySelector('.game-container'));

		this.startMap(window.OverworldMaps.DemoRoom);

		this.bindActionInput();
		this.bindHeroPositionCheck();

		this.directionInput = new DirectionInput();
		this.directionInput.init();

		//start gameloop
		this.startGameLoop();

		//Custom Cutscenes
		this.map.startCutscene([{ type: 'ccreator' }]);
	}
}
