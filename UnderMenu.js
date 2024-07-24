class UnderMenu {
	constructor() {}
	update() {}
	createElement() {
		this.element = document.createElement('div');
		this.element.classList.add('UnderMenu');
		// Ting der skal tilføjes her:
		// UMP skal tage input fra Player.js som så viser spillerens nuværende udseende og animeres ved at lytte til at bevæge sig ved heros bevægelse.
		// Informationer såsom HP/MP/EXP skal også vises i UMP Preview
		// Knapper skal have deres funktionalitet
		this.element.innerHTML = `
		<div class ="UnderMenuContainer">
			<div class = "UMPreview">
				<div class = "UMPPlayer" draggable="false">
					<div class = "UMPFACE UMPIdle" draggable="false"></div>
					<div class = "UMPSKIN UMPIdle" draggable="false"></div>
				</div>
			</div>
			<div id="UMOptionsID" class ="UMOptions">
				<button id="UMPlayer">Player</button>
				<button id="UMInventory">Inventory</button>
				<button id="UMSave">Save</button>
				<button id="UMConfig">Config</button>
			</div>
		</div>`;
	}

	init(container) {
		this.createElement();
		container.appendChild(this.element);
	}
}
