class OverworldEvent {
	constructor({ map, event }) {
		this.map = map;
		this.event = event;
	}

	stand(resolve) {
		const who = this.map.gameObjects[this.event.who];
		who.startBehavior(
			{
				map: this.map,
			},
			{
				type: 'stand',
				direction: this.event.direction,
				time: this.event.time,
			}
		);

		// opsætning af en handler til at fuldføre når en person er færdig med bevægelse og derefter fuldføre event
		const completeHandler = (e) => {
			if (e.detail.whoId === this.event.who) {
				document.removeEventListener('PersonStandomplete', completeHandler);
				resolve();
			}
		};
		document.addEventListener('PersonStandComplete', completeHandler);
	}

	walk(resolve) {
		const who = this.map.gameObjects[this.event.who];
		who.startBehavior(
			{
				map: this.map,
			},
			{
				type: 'walk',
				direction: this.event.direction,
				retry: true,
			}
		);

		// opsætning af en handler til at fuldføre når en person er færdig med bevægelse og derefter fuldføre event
		const completeHandler = (e) => {
			if (e.detail.whoId === this.event.who) {
				document.removeEventListener('PersonWalkingComplete', completeHandler);
				resolve();
			}
		};
		document.addEventListener('PersonWalkingComplete', completeHandler);
	}

	textMessage(resolve) {
		if (this.event.faceHero) {
			const obj = this.map.gameObjects[this.event.faceHero];
			obj.direction = utils.oppositeDirection(
				this.map.gameObjects['hero'].direction
			);
		}
		const message = new TextMessage({
			text: this.event.text,
			textwho: this.event.textwho,
			background: this.event.background,
			forground: this.event.forground,
			onComplete: () => resolve(),
		});
		message.init(document.querySelector('.game-container'));
	}

	changeMap(resolve) {
		const sceneTransition = new SceneTransition();
		sceneTransition.init(document.querySelector('.game-container'), () => {
			this.map.overworld.startMap(window.OverworldMaps[this.event.map]);
			resolve();

			sceneTransition.fadeOut();
		});
	}

	ccreator(resolve) {
		const ccreator = new Ccreator({
			onComplete: () => resolve(),
		});
		ccreator.init(document.querySelector('.game-container'));
	}

	init() {
		return new Promise((resolve) => {
			this[this.event.type](resolve);
		});
	}
}
