class Sprite {
	constructor(config) {
		// Set up af image
		this.image = new Image();
		this.image.src = config.src;
		this.image.onload = () => {
			this.isLoaded = true;
		};

		// Face / Ansigt
		this.face = new Image();
		this.useFace = config.useFace || false;
		if (this.useFace) {
			this.face.src = 'images/CCreator/facetypes/faceType1Black.png';
		}
		this.face.onload = () => {
			this.isFaceLoaded = true;
		};
		// Hair / Hår
		this.hair = new Image();
		this.useHair = config.useHair || false;
		if (this.useHair) {
			this.hair.src = 'images/CCreator/hairtypes/hairtype1Black.png';
		}
		this.hair.onload = () => {
			this.isHairLoaded = true;
		};

		// Skygge
		this.shadow = new Image();
		// hvis vi ikke ønsker skygge, så skal den ikke downloade
		this.useShadow = true; //config.useShadow || false
		if (this.useShadow) {
			this.shadow.src = 'images/characters/shadow.png';
		}
		this.shadow.onload = () => {
			this.isShadowLoaded = true;
		};

		// Konfiguration af animation og intial state
		this.animations = config.animations || {
			'idle-down': [
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0],
				[6, 0],
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0],
			],
			'idle-right': [
				[0, 1],
				[0, 1],
				[0, 1],
				[0, 1],
				[0, 1],
				[6, 1],
				[0, 1],
				[0, 1],
				[0, 1],
				[0, 1],
			],
			'idle-up': [
				[0, 2],
				[0, 2],
				[0, 2],
				[0, 2],
				[0, 2],
				[6, 2],
				[0, 2],
				[0, 2],
				[0, 2],
				[0, 2],
			],
			'idle-left': [
				[0, 3],
				[0, 3],
				[0, 3],
				[0, 3],
				[0, 3],
				[6, 3],
				[0, 3],
				[0, 3],
				[0, 3],
				[0, 3],
			],
			'walk-down': [
				[1, 0],
				[2, 0],
				[3, 0],
				[4, 0],
				[5, 0],
			],
			'walk-right': [
				[1, 1],
				[2, 1],
				[3, 1],
				[4, 1],
				[5, 1],
			],
			'walk-up': [
				[1, 2],
				[2, 2],
				[3, 2],
				[4, 2],
				[5, 2],
			],
			'walk-left': [
				[1, 3],
				[2, 3],
				[3, 3],
				[4, 3],
				[5, 3],
			],
		};
		this.currentAnimation = 'idle-right'; // config.currentAnimation || 'idle-down';
		this.currentAnimationFrame = 0;
		// Hastighed af bevægelse af animations frames.
		this.animationFrameLimit = config.animationFrameLimit || 8;
		this.animationFrameProgress = this.animationFrameLimit;

		//Reference til game object
		this.gameObject = config.gameObject;
	}

	get frame() {
		return this.animations[this.currentAnimation][this.currentAnimationFrame];
	}

	setAnimation(key) {
		if (this.currentAnimation !== key) {
			this.currentAnimation = key;
			this.currentAnimationFrame = 0;
			this.animationFrameProgress = this.animationFrameLimit;
		}
	}
	updateAnimationProgress() {
		//Downtick frame progress
		if (this.animationFrameProgress > 0) {
			this.animationFrameProgress -= 1;
			return;
		}

		//reset counter
		this.animationFrameProgress = this.animationFrameLimit;
		this.currentAnimationFrame += 1;

		if (this.frame === undefined) {
			this.currentAnimationFrame = 0;
		}
	}

	draw(ctx, cameraPerson) {
		const x = this.gameObject.x - 8 + utils.withGrid(10.5) - cameraPerson.x;
		const y = this.gameObject.y - 18 + utils.withGrid(6) - cameraPerson.y;

		this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);

		const [frameX, frameY] = this.frame;

		// Skin Layer
		this.isLoaded &&
			ctx.drawImage(this.image, frameX * 32, frameY * 32, 32, 32, x, y, 32, 32);
		// Ansigt Layer
		this.isFaceLoaded &&
			ctx.drawImage(this.face, frameX * 32, frameY * 32, 32, 32, x, y, 32, 32);
		// Hår Layer
		this.isHairLoaded &&
			ctx.drawImage(this.hair, frameX * 32, frameY * 32, 32, 32, x, y, 32, 32);
		//
		this.updateAnimationProgress();
	}
}
// frameX*32, ventre crop
// frameY*32, top crop
// 32 bredde af crop
// 32, højde af crop
// x * 16 - 8, positionering
// y * 16 - 18, positionering
// 32, 32 //
