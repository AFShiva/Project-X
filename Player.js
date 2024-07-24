class Player {
	constructor(config) {}
}

function setSkinColor(name) {
	function skinColor() {
		// Funktioner til at ændre skintype i hver map.
		window.OverworldMaps.DemoRoom.gameObjects.hero.sprite.image.attributes.src.value = `/images/CCreator/skintypes/${name}.png`;
		window.OverworldMaps.Beach.gameObjects.hero.sprite.image.attributes.src.value = `/images/CCreator/skintypes/${name}.png`;
	}
	function setSkinUMP() {
		// Til UMP skin visning
		document.querySelector('.UMPSKIN').classList.add(`${name}`);
	}
	skinColor();
	setSkinUMP();
}
//
function setFaceType(name) {
	function faceType() {
		// Funktioner til at ændre face i hver map.
		window.OverworldMaps.DemoRoom.gameObjects.hero.sprite.face.src = `/images/CCreator/facetypes/${name}.png`;
		window.OverworldMaps.Beach.gameObjects.hero.sprite.face.src = `/images/CCreator/facetypes/${name}.png`;
	}
	function setFaceUMP() {
		// Til UMP skin visning
		document.querySelector('.UMPFACE').classList.add(`${name}`);
	}
	faceType();
	setFaceUMP();
}
//
function setHairType(name) {
	function hairType() {
		// Funktioner til at ændre hår i hver map.
		window.OverworldMaps.DemoRoom.gameObjects.hero.sprite.hair.src = `/images/CCreator/hairtypes/${name}.png`;
		window.OverworldMaps.Beach.gameObjects.hero.sprite.hair.src = `/images/CCreator/hairtypes/${name}.png`;
	}
	// Til UMP hair visning
	hairType();
}

// Funktion til at fjern UMP-retninger.
function UMPIdle() {
	document.querySelector('.UMPSKIN').classList.add('UMPIdle');
	document.querySelector('.UMPFACE').classList.add('UMPIdle');

	document.querySelector('.UMPSKIN').classList.remove('UMPWalkright');
	document.querySelector('.UMPFACE').classList.remove('UMPWalkright');
	document.querySelector('.UMPSKIN').classList.remove('UMPWalkup');
	document.querySelector('.UMPFACE').classList.remove('UMPWalkup');
	document.querySelector('.UMPSKIN').classList.remove('UMPWalkleft');
	document.querySelector('.UMPFACE').classList.remove('UMPWalkleft');
	document.querySelector('.UMPSKIN').classList.remove('UMPWalkdown');
	document.querySelector('.UMPFACE').classList.remove('UMPWalkdown');
}
