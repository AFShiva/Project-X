class TextMessage {
	constructor({ text, textwho, background, forground, onComplete }) {
		this.text = text;
		this.textwho = textwho;
		this.background = background;
		this.forground = forground;
		this.onComplete = onComplete;
		this.element = null;
	}

	createElement() {
		this.talkingDone = 'false';
		document.getElementById('UMOptionsID').style.visibility = 'hidden';
		document.querySelector('.UMPSKIN').classList.remove('UMPIdle');
		document.querySelector('.UMPFACE').classList.remove('UMPIdle');
		// Skab element
		this.element = document.createElement('div');
		this.element.classList.add('TextMessage');
		this.element.setAttribute('id', 'TextMessageID');
		// Html til tekst-boks
		// Skab 4 elementer ligesom text.who der lytter til hvem snakker, og hvem der idle. ved hero så skal de hente img src fra Player.js.
		this.element.innerHTML = `
			<p class="TextMessage_p"></p>
			<div class="${this.textwho}"></div>
			<div id="TextMessage_bg" style="left: 0px; bottom: 28px; position: absolute"><img draggable="false" src="images/textground/${this.background}.png"></div>
			<div id="TextMessage_fg" style="left: 0px; bottom: -4px; position: absolute"> <img draggable="false" src="images/textground/${this.forground}.png"></div>
			<button class="TextMessage_button" id="textbutton">Next</button>
			`;
		document.getElementById('UMOptionsID').style.visibility = 'hidden';
		//Init typewriter effekt.
		this.revealingText = new RevealingText({
			element: this.element.querySelector('.TextMessage_p'),
			text: this.text,
		});
		// Lytter til klik på next knappen
		this.element.querySelector('button').addEventListener('click', () => {
			this.done();
			/* 			this.onComplete(); */
		});

		// lytter til enter knappen
		this.EnterListener = new KeyPressListener('Enter', () => {
			document.getElementById('UMOptionsID').style.visibility = 'hidden';
			this.element
				.querySelector('.TextMessage_button')
				.classList.toggle('is-pressed');
			setTimeout(() => {
				this.element
					.querySelector('.TextMessage_button')
					.classList.toggle('is-pressed');
			}, 200);
			this.done();
		});

		// lytter til Z knappen
		this.ZListener = new KeyPressListener('KeyZ', () => {
			document.getElementById('UMOptionsID').style.visibility = 'hidden';
			this.element
				.querySelector('.TextMessage_button')
				.classList.toggle('is-pressed');
			setTimeout(() => {
				this.element
					.querySelector('.TextMessage_button')
					.classList.toggle('is-pressed');
			}, 200);
			this.done();
		});

		// lytter til mellemrum knappen
		this.SpaceListener = new KeyPressListener('Space', () => {
			document.getElementById('UMOptionsID').style.visibility = 'hidden';
			this.element
				.querySelector('.TextMessage_button')
				.classList.toggle('is-pressed');
			setTimeout(() => {
				this.element
					.querySelector('.TextMessage_button')
					.classList.toggle('is-pressed');
			}, 200);
			this.done();
		});
	}

	done() {
		if (this.revealingText.isDone) {
			this.element.remove();
			this.EnterListener.unbind();
			this.SpaceListener.unbind();
			this.ZListener.unbind();
			this.onComplete();
			this.talkingDone = 'true';
		} else {
			this.revealingText.warpToDone();
		}
		if (this.talkingDone == 'true') {
			document.getElementById('UMOptionsID').style.visibility = 'visible';
			setTimeout(() => {
				this.talkingDone == 'false';
			}, 200);
		}
	}

	init(container) {
		UMPIdle();
		this.createElement();
		container.appendChild(this.element);
		this.revealingText.init();
	}
}
