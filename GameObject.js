class GameObject {
	constructor(config) {
		this.id = null;
		this.isMounted = false;
		this.x = config.x || 0;
		this.y = config.y || 0;
		this.direction = config.direction || 'down';
		// til sprites
		this.sprite = new Sprite({
			gameObject: this,
			src: config.src, //Player.skin,
			useFace: config.useFace || false,
			useHair: config.useHair || false,
		});

		this.behaviorLoop = config.behaviorLoop || [];
		this.behaviorLoopIndex = 0;
		//tillader talking med action
		this.talking = config.talking || [];
	}
	mount(map) {
		this.isMounted = true;
		map.addWall(this.x, this.y);

		// Hvis vi har en behavior loop, så start efter en lille delay
		setTimeout(() => {
			this.doBehaviorEvent(map);
		}, 10);
	}

	update() {}

	async doBehaviorEvent(map) {
		// Stop med at gøre noget hvis en cutscene sker eller der ikke findes config til bevægelse.
		if (
			map.isCutscenePlaying ||
			this.behaviorLoop.length === 0 ||
			this.isStanding
		) {
			return;
		}
		// Sæt event op med relevant informatiuon
		let eventConfig = this.behaviorLoop[this.behaviorLoopIndex];
		eventConfig.who = this.id;
		// Skab en event af vores næste event config
		const eventHandler = new OverworldEvent({ map, event: eventConfig });
		await eventHandler.init();

		// Sætter næste event til at køre
		this.behaviorLoopIndex += 1;
		if (this.behaviorLoopIndex === this.behaviorLoop.length) {
			this.behaviorLoopIndex = 0;
		}

		// gentag igen
		this.doBehaviorEvent(map);
	}
}
