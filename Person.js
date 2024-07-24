class Person extends GameObject {
	constructor(config) {
		super(config);
		this.movingProgressRemaining = 0;
		this.isStanding = false;

		this.isPlayerControlled = config.isPlayerControlled || false;

		this.directionUpdate = {
			up: ['y', -1],
			down: ['y', 1],
			left: ['x', -1],
			right: ['x', 1],
		};
	}

	update(state) {
		if (this.movingProgressRemaining > 0) {
			this.updatePosition();
		} else {
			// flere brug af walk kan komme her
			//
			//
			//
			// Kan bruges hvis der kræves input, og har en arrow trykket.
			if (
				!state.map.isCutscenePlaying &&
				this.isPlayerControlled &&
				state.arrow
			) {
				this.startBehavior(state, {
					type: 'walk',
					direction: state.arrow,
				});
			}
			// Færdig med og gå, og har stået så fjern UMP-retninger.
			if (!state.arrow && !state.map.isCutscenePlaying) {
				UMPIdle();
			}
			this.updateSprite(state);
		}
	}

	startBehavior(state, behavior) {
		// Sætter character direction til hvad end behavior er
		this.direction = behavior.direction;
		if (behavior.type === 'walk') {
			// Stopper her hvis pladsen ikke er fri
			if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
				behavior.retry &&
					setTimeout(() => {
						this.startBehavior(state, behavior);
					}, 10);
				return;
			}

			// Kan bevæge sig
			state.map.moveWall(this.x, this.y, this.direction);
			this.movingProgressRemaining = 16;
			this.updateSprite(state);
		}

		if (behavior.type === 'stand') {
			this.isStanding = true;
			setTimeout(() => {
				utils.emitEvent('PersonStandComplete', {
					whoId: this.id,
				});
				this.isStanding = false;
			}, behavior.time);
		}
	}
	updatePosition() {
		const [property, change] = this.directionUpdate[this.direction];
		this[property] += change;
		this.movingProgressRemaining -= 1;
		if (this.movingProgressRemaining === 0) {
			// Bevægelse er fuldført
			utils.emitEvent('PersonWalkingComplete', {
				whoId: this.id,
			});
		}
	}

	updateSprite() {
		if (this.movingProgressRemaining > 0) {
			this.sprite.setAnimation('walk-' + this.direction);
			// Lytter til om spiller er kontrolleret og hvilket retning, dermed sætter class til dette i UMP
			if (this.isPlayerControlled && this.direction) {
				if (this.direction == 'left') {
					UMPIdle();
					document.querySelector('.UMPSKIN').classList.add('UMPWalkleft');
					document.querySelector('.UMPFACE').classList.add('UMPWalkleft');
				} else if (this.direction == 'right') {
					UMPIdle();
					document.querySelector('.UMPSKIN').classList.add('UMPWalkright');
					document.querySelector('.UMPFACE').classList.add('UMPWalkright');
				} else if (this.direction == 'up') {
					UMPIdle();
					document.querySelector('.UMPSKIN').classList.add('UMPWalkup');
					document.querySelector('.UMPFACE').classList.add('UMPWalkup');
				} else if (this.direction == 'down') {
					UMPIdle();
					document.querySelector('.UMPSKIN').classList.add('UMPWalkdown');
					document.querySelector('.UMPFACE').classList.add('UMPWalkdown');
				} else {
					UMPIdle();
				}
			}
			return;
		}
		this.sprite.setAnimation('idle-' + this.direction);
	}
}
