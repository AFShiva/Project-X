class OverworldMap {
	constructor(config) {
		this.overworld = null;
		this.gameObjects = config.gameObjects;
		this.cutsceneSpaces = config.cutsceneSpaces || {};
		// til vægge
		this.walls = config.walls || {};
		// til lavest layer (underspilleren)
		this.lowerImage = new Image();
		this.lowerImage.src = config.lowerSrc;
		// til øverste layer (overspilleren)
		this.upperImage = new Image();
		this.upperImage.src = config.upperSrc;
		// Til ump baggrund
		this.umpBackImage = new Image();
		this.umpBackImage.src = config.umpBackImage;
		// til ump forground
		this.umpForImage = new Image();
		this.umpForImage.src = config.umpForImage;
		// Spilles der en cutscene
		this.isCutscenePlaying = false;
	}
	drawLowerImage(ctx, cameraPerson) {
		ctx.drawImage(
			this.lowerImage,
			utils.withGrid(10.5) - cameraPerson.x,
			utils.withGrid(6) - cameraPerson.y
		);
	}
	drawUpperImage(ctx, cameraPerson) {
		ctx.drawImage(
			this.upperImage,
			utils.withGrid(10.5) - cameraPerson.x,
			utils.withGrid(6) - cameraPerson.y
		);
	}
	// Tegn UMP baggrund og forgrund.
	drawUmpBackImage(ctx, cameraPerson) {
		ctx.drawImage(
			this.umpBackImage,
			cameraPerson.y * 0.5 + cameraPerson.x * 0.35 - 700,
			185
		);
	}
	drawUmpForImage(ctx, cameraPerson) {
		ctx.drawImage(
			this.umpForImage,
			cameraPerson.y * 0.7 - cameraPerson.x * 0.7 - 700,
			264
		);
	}

	isSpaceTaken(currentX, currentY, direction) {
		const { x, y } = utils.nextPosition(currentX, currentY, direction);
		return this.walls[`${x},${y}`] || false;
	}

	mountObjects() {
		Object.keys(this.gameObjects).forEach((key) => {
			let object = this.gameObjects[key];
			object.id = key;
			// TODO: determine if this object should actually mount
			object.mount(this);
		});
	}
	// til Cutscenes
	async startCutscene(events) {
		this.isCutscenePlaying = true;
		//Start loop af async events
		// vent til hver er færdig

		for (let i = 0; i < events.length; i++) {
			const eventHandler = new OverworldEvent({
				event: events[i],
				map: this,
			});
			await eventHandler.init();
		}
		this.isCutscenePlaying = false;

		// reset NPC til at køre deres idle behavior
		Object.values(this.gameObjects).forEach((object) =>
			object.doBehaviorEvent(this)
		);
	}

	checkForActionCutscene() {
		const hero = this.gameObjects['hero'];
		const nextCoords = utils.nextPosition(hero.x, hero.y, hero.direction);
		const match = Object.values(this.gameObjects).find((object) => {
			return `${object.x},${object.y}` === `${nextCoords.x},${nextCoords.y}`;
		});
		if (!this.isCutscenePlaying && match && match.talking.length) {
			this.startCutscene(match.talking[0].events);
		}
	}

	checkForFootstepCutscene() {
		const hero = this.gameObjects['hero'];
		const match = this.cutsceneSpaces[`${hero.x},${hero.y}`];
		if (!this.isCutscenePlaying && match) {
			this.startCutscene(match[0].events);
		}
	}

	//Bevægelige vægge
	addWall(x, y) {
		this.walls[`${x},${y}`] = true;
	}
	removeWall(x, y) {
		delete this.walls[`${x},${y}`];
	}
	moveWall(wasX, wasY, direction) {
		this.removeWall(wasX, wasY);
		const { x, y } = utils.nextPosition(wasX, wasY, direction);
		this.addWall(x, y);
	}
}

window.OverworldMaps = {
	DemoRoom: {
		// Alle maps skal have: lowerSrc, upperSrc , umpBackImage, umpForImage.
		lowerSrc:
			'https://raw.githubusercontent.com/AFShiva/Project-X/main/images/maps/DemoLower.png',
		upperSrc:
			'https://raw.githubusercontent.com/AFShiva/Project-X/main/images/maps/DemoUpper.png',
		umpBackImage:
			'https://raw.githubusercontent.com/AFShiva/Project-X/main/images/umpImages/GrassBG.png',
		umpForImage:
			'https://raw.githubusercontent.com/AFShiva/Project-X/main/images/umpImages/GrassFG.png',
		gameObjects: {
			hero: new Person({
				isPlayerControlled: true,
				x: utils.withGrid(22),
				y: utils.withGrid(11),
				src: '',
				useFace: true,
				useHair: true,
			}),
			npcA: new Person({
				x: utils.withGrid(22),
				y: utils.withGrid(14),
				src: 'https://raw.githubusercontent.com/AFShiva/Project-X/main/images/characters/people/npc1.png',
				behaviorLoop: [
					{ type: 'stand', direction: 'left', time: 300 },
					{ type: 'stand', direction: 'up', time: 1800 },
					{ type: 'stand', direction: 'right', time: 300 },
					{ type: 'stand', direction: 'up', time: 1800 },
				],
				talking: [
					{
						events: [
							{
								// Type: 'textMessage' beskrivelse nedenfor.
								// Max text uden mellemrun 35 anslag pr linje.
								// Max 319 anslag med mellemrum uden Textwho.
								// Max 3 linjer / 80 anslag med mellemrun i en textMessage-event med textwho.
								// text: hvad der skal siges?.
								// textwho : textHero (venstre) eller textNpc (højre)?.
								// background: kan undgås, dermed vil ump bruges. men hvilken baggrund? navn på billedet.
								// forground: samme som ovenfor, hvilken forground? navn på billedet.
								// faceHero: Hvem skal kigge mod hero? "npcA" osv.
								type: 'textMessage',
								text: 'Welcome my friend!',
								textwho: 'textNpc',
								faceHero: 'npcA',
							},
							{
								type: 'textMessage',
								text: 'Thank you!',
								textwho: 'textHero',
								faceHero: 'npcA',
							},
							{ who: 'npcA', type: 'walk', direction: 'right', time: 300 },
						],
					},
				],
			}),
			npcB: new Person({
				x: utils.withGrid(30),
				y: utils.withGrid(12),
				src: 'https://raw.githubusercontent.com/AFShiva/Project-X/main/images/characters/people/npc2.png',

				/* 				behaviorLoop: [
					{ type: 'walk', direction: 'left' },
					{ type: 'stand', direction: 'up', time: 300 },
					{ type: 'walk', direction: 'up' },
					{ type: 'walk', direction: 'right' },
					{ type: 'walk', direction: 'down' },
				], */
			}),
		},
		walls: {
			//box 20x20 width 9x9 height, X og Y position.
			// Venstre
			[utils.asGridCoord(18, 8)]: true,
			[utils.asGridCoord(18, 9)]: true,
			[utils.asGridCoord(18, 10)]: true,
			[utils.asGridCoord(18, 11)]: true,
			[utils.asGridCoord(18, 12)]: true,
			[utils.asGridCoord(18, 13)]: true,
			[utils.asGridCoord(18, 14)]: true,
			//Bund
			[utils.asGridCoord(19, 15)]: true,
			[utils.asGridCoord(20, 15)]: true,
			[utils.asGridCoord(21, 15)]: true,
			[utils.asGridCoord(23, 15)]: true,
			[utils.asGridCoord(24, 15)]: true,
			[utils.asGridCoord(25, 15)]: true,
			[utils.asGridCoord(26, 15)]: true,
			[utils.asGridCoord(27, 15)]: true,
			[utils.asGridCoord(28, 15)]: true,
			[utils.asGridCoord(29, 15)]: true,
			[utils.asGridCoord(30, 15)]: true,
			[utils.asGridCoord(31, 15)]: true,
			[utils.asGridCoord(32, 15)]: true,
			[utils.asGridCoord(33, 15)]: true,
			[utils.asGridCoord(34, 15)]: true,
			[utils.asGridCoord(35, 15)]: true,
			[utils.asGridCoord(36, 15)]: true,
			// Højre
			[utils.asGridCoord(37, 8)]: true,
			[utils.asGridCoord(37, 9)]: true,
			[utils.asGridCoord(37, 10)]: true,
			[utils.asGridCoord(37, 11)]: true,
			[utils.asGridCoord(37, 12)]: true,
			[utils.asGridCoord(37, 13)]: true,
			[utils.asGridCoord(37, 14)]: true,
			// Top
			[utils.asGridCoord(19, 7)]: true,
			[utils.asGridCoord(19, 7)]: true,
			[utils.asGridCoord(20, 7)]: true,
			[utils.asGridCoord(21, 7)]: true,
			[utils.asGridCoord(22, 7)]: true,
			[utils.asGridCoord(23, 7)]: true,
			[utils.asGridCoord(24, 7)]: true,
			[utils.asGridCoord(25, 7)]: true,
			[utils.asGridCoord(26, 7)]: true,
			[utils.asGridCoord(27, 7)]: true,
			[utils.asGridCoord(28, 7)]: true,
			[utils.asGridCoord(29, 7)]: true,
			[utils.asGridCoord(30, 7)]: true,
			[utils.asGridCoord(31, 7)]: true,
			[utils.asGridCoord(32, 7)]: true,
			[utils.asGridCoord(33, 7)]: true,
			[utils.asGridCoord(34, 7)]: true,
			[utils.asGridCoord(35, 7)]: true,
			[utils.asGridCoord(36, 7)]: true,
		},
		cutsceneSpaces: {
			[utils.asGridCoord(30, 11)]: [
				{
					events: [
						{ who: 'npcB', type: 'walk', direction: 'left' },
						{ who: 'npcB', type: 'walk', direction: 'left' },
						{
							type: 'textMessage',
							textwho: 'textNpc',
							text: 'Du skal gå tilbage nu!',
							background: 'GrassBG',
							forground: 'GrassFG',
						},
						{ who: 'hero', type: 'walk', direction: 'left' },
						{ who: 'hero', type: 'walk', direction: 'left' },
						{ who: 'hero', type: 'walk', direction: 'left' },
					],
				},
			],
			[utils.asGridCoord(22, 16)]: [
				{
					events: [{ type: 'changeMap', map: 'Beach' }],
				},
			],
		},
	},
	Beach: {
		lowerSrc:
			'https://raw.githubusercontent.com/AFShiva/Project-X/main/images/maps/BeachLower.png',
		upperSrc:
			'https://raw.githubusercontent.com/AFShiva/Project-X/main/images/maps/BeachUpper.png',
		umpBackImage:
			'https://raw.githubusercontent.com/AFShiva/Project-X/main/images/umpImages/BeachBG.png',
		umpForImage:
			'https://raw.githubusercontent.com/AFShiva/Project-X/main/images/umpImages/BeachFG.png',
		gameObjects: {
			hero: new Person({
				isPlayerControlled: true,
				x: utils.withGrid(20),
				y: utils.withGrid(12),
				src: '',
				useFace: true,
				useHair: true,
			}),
			npc2: new Person({
				x: utils.withGrid(24),
				y: utils.withGrid(12),
				src: 'https://raw.githubusercontent.com/AFShiva/Project-X/main/images/characters/people/npc2.png',
				talking: [
					{
						events: [
							{
								type: 'textMessage',
								text: '(The sun is bright yellow, and no worries in the world)',
								faceHero: 'npc2',
							},
							{
								type: 'textMessage',
								textwho: 'textNpc',
								text: 'This is the dream...',
							},
							{
								type: 'textMessage',
								textwho: 'textNpc',
								text: 'Enjoying the beach on a hot day!',
							},
							{
								type: 'textMessage',
								textwho: 'textHero',
								text: 'You are right Faisal',
							},
							{
								type: 'textMessage',
								textwho: 'textHero',
								text: 'I will now dedicate my life to learning Javascript',
							},
							{ who: 'hero', type: 'walk', direction: 'up', time: 300 },
						],
					},
				],
			}),
		},
		walls: {
			// Venstre
			[utils.asGridCoord(14, 7)]: true,
			[utils.asGridCoord(14, 8)]: true,
			[utils.asGridCoord(14, 9)]: true,
			[utils.asGridCoord(14, 10)]: true,
			[utils.asGridCoord(14, 11)]: true,
			[utils.asGridCoord(14, 12)]: true,
			[utils.asGridCoord(14, 13)]: true,
			[utils.asGridCoord(14, 14)]: true,
			[utils.asGridCoord(14, 15)]: true,
			//Bund
			[utils.asGridCoord(15, 16)]: true,
			[utils.asGridCoord(16, 16)]: true,
			[utils.asGridCoord(17, 16)]: true,
			[utils.asGridCoord(18, 16)]: true,
			[utils.asGridCoord(19, 16)]: true,
			[utils.asGridCoord(20, 16)]: true,
			[utils.asGridCoord(21, 16)]: true,
			[utils.asGridCoord(22, 16)]: true,
			[utils.asGridCoord(23, 16)]: true,
			[utils.asGridCoord(24, 16)]: true,
			[utils.asGridCoord(25, 16)]: true,
			[utils.asGridCoord(26, 16)]: true,
			[utils.asGridCoord(27, 16)]: true,
			[utils.asGridCoord(28, 16)]: true,
			[utils.asGridCoord(29, 16)]: true,
			[utils.asGridCoord(30, 16)]: true,
			[utils.asGridCoord(31, 16)]: true,
			[utils.asGridCoord(32, 16)]: true,
			[utils.asGridCoord(33, 16)]: true,
			[utils.asGridCoord(34, 16)]: true,
			[utils.asGridCoord(35, 16)]: true,
			[utils.asGridCoord(36, 16)]: true,
			[utils.asGridCoord(37, 16)]: true,
			[utils.asGridCoord(38, 16)]: true,

			// Højre
			[utils.asGridCoord(39, 7)]: true,
			[utils.asGridCoord(39, 8)]: true,
			[utils.asGridCoord(39, 9)]: true,
			[utils.asGridCoord(39, 10)]: true,
			[utils.asGridCoord(39, 11)]: true,
			[utils.asGridCoord(39, 12)]: true,
			[utils.asGridCoord(39, 13)]: true,
			[utils.asGridCoord(39, 14)]: true,
			[utils.asGridCoord(39, 15)]: true,
			// Top
			[utils.asGridCoord(15, 6)]: true,
			[utils.asGridCoord(16, 6)]: true,
			[utils.asGridCoord(17, 6)]: true,
			[utils.asGridCoord(18, 6)]: true,
			[utils.asGridCoord(19, 6)]: true,
			[utils.asGridCoord(20, 6)]: true,
			[utils.asGridCoord(21, 6)]: true,
			[utils.asGridCoord(22, 6)]: true,
			[utils.asGridCoord(23, 6)]: true,
			[utils.asGridCoord(24, 6)]: true,
			[utils.asGridCoord(25, 6)]: true,
			[utils.asGridCoord(26, 6)]: true,
			[utils.asGridCoord(27, 6)]: true,
			[utils.asGridCoord(28, 6)]: true,
			[utils.asGridCoord(29, 6)]: true,
			[utils.asGridCoord(30, 6)]: true,
			[utils.asGridCoord(31, 6)]: true,
			[utils.asGridCoord(32, 6)]: true,
			[utils.asGridCoord(33, 6)]: true,
			[utils.asGridCoord(34, 6)]: true,
			[utils.asGridCoord(35, 6)]: true,
			[utils.asGridCoord(36, 6)]: true,
			[utils.asGridCoord(37, 6)]: true,
			[utils.asGridCoord(38, 6)]: true,
			// Extra såsom objekter og andet
			[utils.asGridCoord(32, 11)]: true,
		},
	},
};
