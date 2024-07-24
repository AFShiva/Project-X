class Ccreator {
	constructor({ onComplete }) {
		this.onComplete = onComplete;
		this.element = null;
	}
	createElement() {
		this.skinPicked = false;
		this.element = document.createElement('div');
		this.element.classList.add('CCreator');
		this.element.innerHTML = `
      <div class="carousel">
				<button id ="EyeUp" class ="eye_button eye_button--up is-hidden no_show"><img src="images/CCreator/upButton.png" alt="Up" draggable="false"/></button>
				<button id ="HairUp" class ="hairColor_button hairColor_button--up is-hidden no_show"><img src="images/CCreator/upButton.png" alt="Up" draggable="false"/></button>
				<button id ="HairLeft" class ="hair_button hair_button--left is-hidden no_show"><img src="images/CCreator/leftButton.png" alt="Left" draggable="false"/></button>
				<button id ="FaceLeft" class ="face_button face_button--left is-hidden no_show"><img src="images/CCreator/leftButton.png" alt="Left" draggable="false"/></button>
        <button id ="SkinLeft" class ="skin_button skin_button--left is-hidden">
        <img src="images/CCreator/leftButton.png" alt="Left" draggable="false"/>
        </button>
        <div class = "carousel_track-container ">
        <ul class ="skin_track ">
          <li class ="skin_slide current-slide">
            <img class="carousel_image CCreatorAnimation" id="white" src ="images/CCreator/blanksheet.png" alt = "white" draggable="false" >
          </li>
          <li class ="skin_slide">
            <img class="carousel_image CCreatorAnimation" id="pale" src ="images/CCreator/blanksheet.png" alt = "pale" draggable="false">
          </li>
          <li class ="skin_slide">
            <img class="carousel_image CCreatorAnimation" id="brown" src ="images/CCreator/blanksheet.png" alt = "brown" draggable="false">
          </li>
          <li class ="skin_slide">
            <img class="carousel_image CCreatorAnimation" id="dark" src ="images/CCreator/blanksheet.png" alt = "dark" draggable="false">
          </li>
        </ul>
				<ul class ="face_track no_show">
          <li class ="face_slide faceCurrent_Slide">
            <img class="carousel_image CCreatorAnimation" id="face1Black" src ="images/CCreator/blanksheet.png" alt = "face1" draggable="false" >
          </li>
          <li class ="face_slide">
            <img class="carousel_image CCreatorAnimation" id="face2Black" src ="images/CCreator/blanksheet.png" alt = "face2" draggable="false">
          </li>
          <li class ="face_slide">
            <img class="carousel_image CCreatorAnimation" id="face3Black" src ="images/CCreator/blanksheet.png" alt = "face3" draggable="false">
          </li>
          <li class ="face_slide ">
            <img class="carousel_image CCreatorAnimation" id="face4Black" src ="images/CCreator/blanksheet.png" alt = "face4" draggable="false">
          </li>
        </ul>
				<ul class ="hair_track no_show">
				<li class ="hair_slide hairCurrent_Slide">
					<img class="carousel_image CCreatorAnimation" id="hair1Black" src ="images/CCreator/blanksheet.png" alt = "hair1" draggable="false" >
				</li>
				<li class ="hair_slide">
					<img class="carousel_image CCreatorAnimation" id="hair2Black" src ="images/CCreator/blanksheet.png" alt = "hair2" draggable="false">
				</li>
				<li class ="hair_slide">
					<img class="carousel_image CCreatorAnimation" id="hair3Black" src ="images/CCreator/blanksheet.png" alt = "hair3" draggable="false">
				</li>
				<li class ="hair_slide ">
					<img class="carousel_image CCreatorAnimation" id="hair4Black" src ="images/CCreator/blanksheet.png" alt = "hair4" draggable="false">
				</li>
			</ul>
      </div>
			<button id ="EyeDown" class ="eye_button eye_button--down no_show"><img src="images/CCreator/downButton.png" alt="Down" draggable="false"/></button>
			<button id ="HairDown" class ="hairColor_button hairColor_button--down no_show"><img src="images/CCreator/downButton.png" alt="Down" draggable="false"/></button>
			<button id ="HairRight" class ="hair_button hair_button--right no_show"><img src="images/CCreator/rightButton.png" alt="right" draggable="false"/></button>
			<button id ="FaceRight" class ="face_button face_button--right no_show"><img src="images/CCreator/rightButton.png" alt="right" draggable="false"/></button>
      <button id ="SkinRight" class ="skin_button skin_button--right">
      <img src="images/CCreator/rightButton.png" alt="right" draggable="false"/>
      </button>
      <p class= CCreatorP id="CCreatorPString">Choose your skincolor:</p>
      <div class ="skin_nav">
        <button class="whitebutton current-slide">
        <img src="images/CCreator/skintypes/whiteButton.png" draggable="false" />
        </button>
        <button class="palebutton">
        <img src="images/CCreator/skintypes/paleButton.png" draggable="false" />
        </button>
        <button class="tanbutton">
        <img src="images/CCreator/skintypes/brownButton.png" draggable="false" />
        </button>
        <button class="darkbutton">
        <img src="images/CCreator/skintypes/darkButton.png" draggable="false" />
        </button>
      </div>
			<div class ="face_nav no_show">
				<button class="face1button faceCurrent_Slide no_show">
					<img src="images/CCreator/facetypes/face1Button.png" draggable="false" />
				</button>
				<button class="face2button no_show">
					<img src="images/CCreator/facetypes/face2Button.png" draggable="false" />
				</button>
				<button class="face3button no_show">
					<img src="images/CCreator/facetypes/face3Button.png" draggable="false" />
				</button>
				<button class="face4button no_show">
					<img src="images/CCreator/facetypes/face4Button.png" draggable="false" />
				</button>
			</div>
			<div class ="hair_nav no_show">
				<button class="hair1button hairCurrent_Slide no_show">
					<img src="images/CCreator/hairtypes/hair1Button.png" draggable="false" />
				</button>
				<button class="hair2button no_show">
					<img src="images/CCreator/hairtypes/hair2Button.png" draggable="false" />
				</button>
				<button class="hair3button no_show">
					<img src="images/CCreator/hairtypes/hair3Button.png" draggable="false" />
				</button>
				<button class="hair4button no_show">
					<img src="images/CCreator/hairtypes/hair4Button.png" draggable="false" />
				</button>
			</div>
			<p class= "CCreatorP2 no_show" id="CCreatorPString2"></p>
			<div class = "eye_nav ">
				<button class="eye1button eyeCurrent_Slide no_show">
					<img src="images/CCreator/facetypes/eyeButtonBlack.png" draggable="false" />
				</button>
				<button class="eye2button no_show">
					<img src="images/CCreator/facetypes/eyeButtonBrown.png" draggable="false" />
				</button>
				<button class="eye3button no_show">
					<img src="images/CCreator/facetypes/eyeButtonBlue.png" draggable="false" />
				</button>
				<button class="eye4button no_show">
					<img src="images/CCreator/facetypes/eyeButtonGreen.png" draggable="false" />
				</button>
				</div>
				<div class = "hairColor_nav">
				<button class="hairColor1button hairColorCurrent_Slide no_show">
					<img src="images/CCreator/hairtypes/hairButtonBlack.png" draggable="false" />
				</button>
				<button class="hairColor2button no_show">
					<img src="images/CCreator/hairtypes/hairButtonBrown.png" draggable="false" />
				</button>
				<button class="hairColor3button no_show">
					<img src="images/CCreator/hairtypes/hairButtonBlonde.png" draggable="false" />
				</button>
				<button class="hairColor4button no_show">
					<img src="images/CCreator/hairtypes/hairButtonOrange.png" draggable="false" />
				</button>
				</div>
			<button class="skinSubmitBtn">
			submit!
			</button>
			<button class="faceSubmitBtn no_show">
			submit!
			</button>
			<button class="hairSubmitBtn no_show">
			submit!
			</button>
      </div>
    `;

		// carousel starter her:
		// Tæller starter her:
		this.skinCount = 1;
		// queryselector går ind filerne og leder efter .carousel_track, og gemmer den som const track. dermed definerer denne.
		this.track = this.element.querySelector('.skin_track');
		// gem alle this.slides fra "track" og tag children i en array, og kald denne this.slides.
		this.slides = Array.from(this.track.children);
		// Skin this.slides/sprites/images
		this.whiteSkinSlide = this.track.children[0];
		this.paleSkinSlide = this.track.children[1];
		this.brownSkinSlide = this.track.children[2];
		this.darkSkinSlide = this.track.children[3];
		// find vores skin_button right og kald denne nextButton. (husk når man henter en class at sætte et . foran )//
		this.nextButton = this.element.querySelector('.skin_button--right');
		// find vores skin_button--left og kald denne prevButton.
		this.prevButton = this.element.querySelector('.skin_button--left');
		// find vores .skin_nav og kald denne this.dotsNav.
		this.dotsNav = this.element.querySelector('.skin_nav');
		// find alle børn af this.dotsNav og skab en array ud fra disse.
		this.dots = Array.from(this.dotsNav.children);
		// Skin knapper/dots/buttons
		this.whiteButton = this.element.querySelector('.whitebutton');
		this.paleButton = this.element.querySelector('.palebutton');
		this.brownButton = this.element.querySelector('.tanbutton');
		this.darkButton = this.element.querySelector('.darkbutton');
		// Submit knappen
		this.skinSubmit = this.element.querySelector('.skinSubmitBtn');
		//hent vores width fra vores første slide, og gem denne som slideWitdth
		this.slideWidth = this.slides[0].getBoundingClientRect().width;
		// Arrangerer this.slides til at være ved siden af hinanden.
		this.element.setSlidePosition = (slide, index) => {
			slide.style.left = this.slideWidth * index + 'px';
		};
		this.slides.forEach(this.element.setSlidePosition);
		// Skab en funktion der hedder moveToSlide, denne skal have arguments som skal påvirke track, currentSlide og targetSlide. class currentslide skal altid flyttes fra den nuværende til target slide.
		this.moveToSlide = (track, currentSlide, targetSlide) => {
			this.track.style.cssText = `
      position: absolute;
      top: 50%;
      left: 44.4%;
      transform: scale(2);
    `;
			this.track.style.transform =
				'translateX(-' + targetSlide.style.left + ')';
			this.currentSlide.classList.remove('current-slide');
			targetSlide.classList.add('current-slide');
		};

		// funktion til at updaterter knapperne/dots.
		this.updateDots = (currentDot, targetDot) => {
			// skift current-slide class ud fra currentDot til vores targetDot.
			currentDot.classList.remove('current-slide');
			targetDot.classList.add('current-slide');
		};
		// funktion til at vise/gemme knapper basseret på this.slides index.
		this.hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
			// Gem knapper til forrige hvis vi er ved [0] eller næste ved sidste index.
			if (targetIndex === 0) {
				this.prevButton.classList.add('is-hidden');
				this.nextButton.classList.remove('is-hidden');
			} else if (targetIndex === this.slides.length - 1) {
				this.prevButton.classList.remove('is-hidden');
				this.nextButton.classList.add('is-hidden');
			} else {
				this.prevButton.classList.remove('is-hidden');
				this.nextButton.classList.remove('is-hidden');
			}
		};
		// når jeg klikker til nextButton(højre), bevæg this.slides til højre.
		// find vores nextButton og tilføj en event listener som lytter til click på denne.
		this.nextButton.addEventListener('click', () => {
			// kig i vores track, og find vores .current-slide med queryselector, derfor class og "." foran. og kald denne const currentSlide
			this.currentSlide = this.track.querySelector('.current-slide');
			// find vores currentthis.slides sibling og kald denne nextSlide.
			this.nextSlide = this.currentSlide.nextElementSibling;
			// find antal til at style til venstre.
			// anvend vores funtkion moveToSlide, til at bevæge på track vores current slide til vores targetslide som er nextSlide.
			// opdaterer dots/knapperne i bunden ved skift på next button.
			this.currentDot = this.dotsNav.querySelector('.current-slide');
			this.nextDot = this.currentDot.nextElementSibling;
			this.nextIndex = this.slides.findIndex(
				(slide) => slide === this.nextSlide
			);

			this.moveToSlide(this.track, this.currentSlide, this.nextSlide);
			this.updateDots(this.currentDot, this.nextDot);
			this.hideShowArrows(
				this.slides,
				this.prevButton,
				this.nextButton,
				this.nextIndex
			);
			if (this.skinCount >= 0) {
				this.skinCount++;
			} else {
				console.log('error: something is wrong with skinCount');
			}
		});
		// når jeg klikker på prevButton(Venstre), bevæg this.slides til venstre.
		this.prevButton.addEventListener('click', () => {
			this.currentSlide = this.track.querySelector('.current-slide');
			this.prevSlide = this.currentSlide.previousElementSibling;
			this.currentDot = this.dotsNav.querySelector('.current-slide');
			this.prevDot = this.currentDot.previousElementSibling;
			this.prevIndex = this.slides.findIndex(
				(slide) => slide === this.prevSlide
			);
			this.moveToSlide(this.track, this.currentSlide, this.prevSlide);
			this.updateDots(this.currentDot, this.prevDot);
			this.hideShowArrows(
				this.slides,
				this.prevButton,
				this.nextButton,
				this.prevIndex
			);
			if (this.skinCount <= 4 && this.skinPicked === false) {
				this.skinCount--;
			} else {
				console.log('error: something is wrong with skinCount');
			}
		});

		if (this.skinPicked == false) {
			// når jeg klikker til på knapperne(dotsnav), bevæg this.slides til dette.
			this.dotsNav.addEventListener('click', (e) => {
				// Hvilken knap er blevet clicket på?, dette skal være en button.
				this.targetDot = e.target.closest('button');
				// hvis dette ikke er en knap så stop. return = stop/færdig.
				if (!this.targetDot) return;
				// find i vores track .current-slide og kald denne currentslide.
				this.currentSlide = this.track.querySelector('.current-slide');
				// find vores i vores this.dotsNav .current-slide og kald denne currentDot.
				this.currentDot = this.dotsNav.querySelector('.current-slide');
				// find vores target index, ved at kigge på dots. og deres index.
				this.targetIndex = this.dots.findIndex((dot) => dot === this.targetDot);
				// kald vores targetSlide vores this.slides target index og gå til denne.
				this.targetSlide = this.slides[this.targetIndex];
				//bevæg vores slide ved click på vores knapper.
				this.moveToSlide(this.track, this.currentSlide, this.targetSlide);
				// skift current-slide class ud fra currentDot til vores targetDot.
				this.updateDots(this.currentDot, this.targetDot);
				this.hideShowArrows(
					this.slides,
					this.prevButton,
					this.nextButton,
					this.targetIndex
				);
			});
		} else {
			return;
		}

		if (this.skinPicked == 0) {
			// hver skin knap for sig selv.
			this.whiteButton.addEventListener('click', () => {
				this.skinCount = 1;
			});
			this.paleButton.addEventListener('click', () => {
				this.skinCount = 2;
			});
			this.brownButton.addEventListener('click', () => {
				this.skinCount = 3;
			});
			this.darkButton.addEventListener('click', () => {
				this.skinCount = 4;
			});
		} else {
			return;
		}
		// Lytter til højre/d knappen.
		this.KeyPressListener = new KeyPressListener('KeyD', () => {
			this.track = this.element.querySelector('.skin_track');
			this.currentSlide = this.track.querySelector('.current-slide');
			this.nextButton = this.element.querySelector('.skin_button--right');
			this.tappedRight = false;
			// hvis currentslide har en sibling så tryk, eller return.
			if (this.currentSlide.nextElementSibling && this.skinPicked === false) {
				setTimeout(() => {
					// toggle til at tilsætte css class.
					this.nextButton.classList.toggle('tapped--right');
				}, 250);
				this.tappedRight = true;
			} else {
				return;
			}
			if ((this.tappedRight = true && this.skinPicked === false)) {
				// toggle til at fjerne css class igen.
				this.nextButton.classList.toggle('tapped--right');
				document.getElementById('SkinRight').click();
			} else {
				return;
			}
		});
		this.KeyPressListener = new KeyPressListener('ArrowRight', () => {
			this.track = this.element.querySelector('.skin_track');
			this.currentSlide = this.track.querySelector('.current-slide');
			this.nextButton = this.element.querySelector('.skin_button--right');
			this.tappedRight = false;
			// hvis currentslide har en sibling så tryk, eller return.
			if (this.currentSlide.nextElementSibling && this.skinPicked === false) {
				setTimeout(() => {
					// toggle til at tilsætte css class.
					this.nextButton.classList.toggle('tapped--right');
				}, 250);
				this.tappedRight = true;
			} else {
				return;
			}
			if ((this.tappedRight = true)) {
				// toggle til at fjerne css class igen.
				this.nextButton.classList.toggle('tapped--right');
				document.getElementById('SkinRight').click();
			} else {
				return;
			}
		});
		// Lytter til venstre/a knappen.
		this.KeyPressListener = new KeyPressListener('KeyA', () => {
			this.track = this.element.querySelector('.skin_track');
			this.currentSlide = this.track.querySelector('.current-slide');
			this.prevButton = this.element.querySelector('.skin_button--left');
			this.tappedLeft = false;
			// hvis currentslide har en sibling så tryk, eller return.
			if (
				this.currentSlide.previousElementSibling &&
				this.skinPicked === false
			) {
				setTimeout(() => {
					this.prevButton.classList.toggle('tapped--left');
				}, 250);
				this.tappedLeft = true;
			} else {
				return;
			}
			if ((this.tappedLeft = true && this.skinPicked === false)) {
				this.prevButton.classList.toggle('tapped--left');
				document.getElementById('SkinLeft').click();
			} else {
				return;
			}
		});
		this.KeyPressListener = new KeyPressListener('ArrowLeft', () => {
			this.track = this.element.querySelector('.skin_track');
			this.currentSlide = this.track.querySelector('.current-slide');
			this.prevButton = this.element.querySelector('.skin_button--left');
			this.tappedLeft = false;
			// hvis currentslide har en sibling så tryk, eller return.
			if (
				this.currentSlide.previousElementSibling &&
				this.skinPicked === false
			) {
				setTimeout(() => {
					this.prevButton.classList.toggle('tapped--left');
				}, 250);
				this.tappedLeft = true;
			} else {
				return;
			}
			if ((this.tappedLeft = true && this.skinPicked === false)) {
				this.prevButton.classList.toggle('tapped--left');
				document.getElementById('SkinLeft').click();
			} else {
				return;
			}
		});
		// Til at vælge skin
		this.skinSubmit.addEventListener('click', () => {
			if (this.skinCount == 4) {
				// Til at at fixe se bar hed af darkwalker med brune øjne.
				document.getElementById('dark').style.background =
					'url(../images/CCreator/skintypes/darkwalkerfix.png)';
				setSkinColor('darkwalkerfix');
				this.skinPicked = true;
				this.skinDone();
			} else if (this.skinCount == 3) {
				setSkinColor('brownwalker');
				this.skinPicked = true;
				this.skinDone();
			} else if (this.skinCount == 2) {
				setSkinColor('palewalker');
				this.skinPicked = true;
				this.skinDone();
			} else if (this.skinCount == 1) {
				setSkinColor('whitewalker');
				this.skinPicked = true;
				this.skinDone();
			} else {
				console.log('error at skinSubmit');
			}
		});
		/* Til at identificerer relevante Face type elementer */
		// til reset af animation
		this.resetImg = this.element.querySelectorAll('.carousel_image');
		// facecounter
		this.facePicked = false;
		this.faceCount = 1;
		this.eyeCount = 1;
		// face prev og next
		this.faceLeftBtn = this.element.querySelector('.face_button--left');
		this.faceRightBtn = this.element.querySelector('.face_button--right');
		// face sprites og slides
		this.faceTrack = this.element.querySelector('.face_track');
		this.faceSlides = Array.from(this.faceTrack.children);
		this.face1Slide = this.faceTrack.children[0];
		this.face2Slide = this.faceTrack.children[1];
		this.face3Slide = this.faceTrack.children[2];
		this.face4Slide = this.faceTrack.children[3];
		// face nav og dots
		this.faceNav = this.element.querySelector('.face_nav');
		this.faceDots = Array.from(this.faceNav.children);
		this.face1button = this.element.querySelector('.face1button');
		this.face2button = this.element.querySelector('.face2button');
		this.face3button = this.element.querySelector('.face3button');
		this.face4button = this.element.querySelector('.face4button');
		//submit knap
		this.faceSubmit = this.element.querySelector('.faceSubmitBtn');

		// funktionaliteter
		this.faceSlideWidth = this.faceSlides[0].getBoundingClientRect().width;
		this.element.setFaceSlidePosition = (slide, index) => {
			slide.style.left = this.faceSlideWidth * index + 'px';
		};
		this.faceSlides.forEach(this.element.setFaceSlidePosition);
		this.faceMoveToSlide = (faceTrack, faceCurrentSlide, faceTargetSlide) => {
			this.faceTrack.style.cssText = `
			position: absolute;
			top: 50%;
			left: 44.4%;
			transform: scale(2);
		`;
			this.faceTrack.style.transform =
				'translateX(-' + faceTargetSlide.style.left + ')';
			this.faceCurrentSlide.classList.remove('faceCurrent_Slide');
			faceTargetSlide.classList.add('faceCurrent_Slide');
		};
		this.updateFaceDots = (currentFaceDot, targetFaceDot) => {
			currentFaceDot.classList.remove('faceCurrent_Slide');
			targetFaceDot.classList.add('faceCurrent_Slide');
		};
		this.hideShowFaceArrows = (
			faceSlides,
			faceLeftBtn,
			faceRightBtn,
			FacetargetIndex
		) => {
			if (FacetargetIndex === 0) {
				this.faceLeftBtn.classList.add('is-hidden');
				this.faceRightBtn.classList.remove('is-hidden');
			} else if (FacetargetIndex === this.faceSlides.length - 1) {
				this.faceLeftBtn.classList.remove('is-hidden');
				this.faceRightBtn.classList.add('is-hidden');
			} else {
				this.faceLeftBtn.classList.remove('is-hidden');
				this.faceRightBtn.classList.remove('is-hidden');
			}
		};

		this.faceRightBtn.addEventListener('click', () => {
			this.faceCurrentSlide =
				this.faceTrack.querySelector('.faceCurrent_Slide');
			this.faceNextSlide = this.faceCurrentSlide.nextElementSibling;
			this.faceCurrentDot = this.faceNav.querySelector('.faceCurrent_Slide');
			this.faceNextDot = this.faceCurrentDot.nextElementSibling;
			this.faceNextIndex = this.faceSlides.findIndex(
				(slide) => slide === this.faceNextSlide
			);
			this.faceMoveToSlide(
				this.faceTrack,
				this.faceCurrentSlide,
				this.faceNextSlide
			);
			this.updateFaceDots(this.faceCurrentDot, this.faceNextDot);
			this.hideShowFaceArrows(
				this.faceSlides,
				this.faceLeftBtn,
				this.faceRightBtn,
				this.faceNextIndex
			);
			if (this.faceCount >= 0 && this.facePicked === false) {
				this.faceCount++;
			} else {
				console.log('error: something is wrong with faceCount');
			}
		});

		this.faceLeftBtn.addEventListener('click', () => {
			this.faceCurrentSlide =
				this.faceTrack.querySelector('.faceCurrent_Slide');
			this.facePrevSlide = this.faceCurrentSlide.previousElementSibling;

			this.faceCurrentDot = this.faceNav.querySelector('.faceCurrent_Slide');
			this.facePrevDot = this.faceCurrentDot.previousElementSibling;
			this.facePrevIndex = this.faceSlides.findIndex(
				(slide) => slide === this.facePrevSlide
			);
			this.faceMoveToSlide(
				this.faceTrack,
				this.faceCurrentSlide,
				this.facePrevSlide
			);
			this.updateFaceDots(this.faceCurrentDot, this.facePrevDot);
			this.hideShowFaceArrows(
				this.faceSlides,
				this.faceLeftBtn,
				this.faceRightBtn,
				this.facePrevIndex
			);
			if (this.faceCount <= 4 && this.facePicked === false) {
				this.faceCount--;
			} else {
				console.log('error: something is wrong with faceCount');
			}
		});

		if (this.facePicked == false) {
			this.faceNav.addEventListener('click', (e) => {
				this.targetFaceDot = e.target.closest('button');
				if (!this.targetFaceDot) return;
				this.faceCurrentSlide =
					this.faceTrack.querySelector('.faceCurrent_Slide');
				this.faceCurrentDot = this.faceNav.querySelector('.faceCurrent_Slide');
				this.faceTargetIndex = this.faceDots.findIndex(
					(dot) => dot === this.targetFaceDot
				);
				this.faceTargetSlide = this.faceSlides[this.faceTargetIndex];
				this.faceMoveToSlide(
					this.faceTrack,
					this.faceCurrentSlide,
					this.faceTargetSlide
				);
				this.updateFaceDots(this.faceCurrentDot, this.targetFaceDot);
				this.hideShowFaceArrows(
					this.faceSlides,
					this.faceLeftBtn,
					this.faceRightBtn,
					this.faceTargetIndex
				);
			});
		} else {
			return;
		}

		// til face
		if (this.facePicked == 0) {
			// hver skin knap for sig selv.
			this.face1button.addEventListener('click', () => {
				this.faceCount = 1;
			});
			this.face2button.addEventListener('click', () => {
				this.faceCount = 2;
			});
			this.face3button.addEventListener('click', () => {
				this.faceCount = 3;
			});
			this.face4button.addEventListener('click', () => {
				this.faceCount = 4;
			});
		} else {
			return;
		}

		// Lytter til højre/d knappen.
		this.KeyPressListener = new KeyPressListener('KeyD', () => {
			this.faceTrack = this.element.querySelector('.face_track');
			this.faceCurrentSlide =
				this.faceTrack.querySelector('.faceCurrent_Slide');
			this.faceRightBtn = this.element.querySelector('.face_button--right');
			this.faceTappedRight = false;
			// hvis currentslide har en sibling så tryk, eller return.
			if (
				this.faceCurrentSlide.nextElementSibling &&
				this.facePicked === false
			) {
				setTimeout(() => {
					// toggle til at tilsætte css class.
					this.faceRightBtn.classList.toggle('tapped--right');
				}, 250);
				this.faceTappedRight = true;
			} else {
				return;
			}
			if ((this.faceTappedRight = true)) {
				this.faceRightBtn.classList.toggle('tapped--right');
				document.getElementById('FaceRight').click();
			} else {
				return;
			}
		});

		this.KeyPressListener = new KeyPressListener('ArrowRight', () => {
			this.faceTrack = this.element.querySelector('.face_track');
			this.faceCurrentSlide =
				this.faceTrack.querySelector('.faceCurrent_Slide');
			this.faceRightBtn = this.element.querySelector('.face_button--right');
			this.faceTappedRight = false;
			// hvis currentslide har en sibling så tryk, eller return.
			if (
				this.faceCurrentSlide.nextElementSibling &&
				this.facePicked === false
			) {
				setTimeout(() => {
					// toggle til at tilsætte css class.
					this.faceRightBtn.classList.toggle('tapped--right');
				}, 250);
				this.faceTappedRight = true;
			} else {
				return;
			}
			if ((this.faceTappedRight = true && this.facePicked === false)) {
				this.faceRightBtn.classList.toggle('tapped--right');
				document.getElementById('FaceRight').click();
			} else {
				return;
			}
		});

		// Lytter til venstre/a knappen.
		this.KeyPressListener = new KeyPressListener('KeyA', () => {
			this.faceTrack = this.element.querySelector('.face_track');
			this.faceCurrentSlide =
				this.faceTrack.querySelector('.faceCurrent_Slide');
			this.faceLeftBtn = this.element.querySelector('.face_button--left');
			this.faceTappedLeft = false;
			if (
				this.faceCurrentSlide.previousElementSibling &&
				this.facePicked === false
			) {
				setTimeout(() => {
					this.faceLeftBtn.classList.toggle('tapped--left');
				}, 250);
				this.faceTappedLeft = true;
			} else {
				return;
			}
			if ((this.faceTappedLeft = true && this.facePicked === false)) {
				this.faceLeftBtn.classList.toggle('tapped--left');
				document.getElementById('FaceLeft').click();
			} else {
				return;
			}
		});
		this.KeyPressListener = new KeyPressListener('ArrowLeft', () => {
			this.faceTrack = this.element.querySelector('.face_track');
			this.faceCurrentSlide =
				this.faceTrack.querySelector('.faceCurrent_Slide');
			this.faceLeftBtn = this.element.querySelector('.face_button--left');
			this.faceTappedLeft = false;
			if (
				this.faceCurrentSlide.previousElementSibling &&
				this.facePicked === false
			) {
				setTimeout(() => {
					this.faceLeftBtn.classList.toggle('tapped--left');
				}, 250);
				this.faceTappedLeft = true;
			} else {
				return;
			}
			if ((this.faceTappedLeft = true && this.facePicked === false)) {
				this.faceLeftBtn.classList.toggle('tapped--left');
				document.getElementById('FaceLeft').click();
			} else {
				return;
			}
		});
		//FUNKTIONER TIL AT VÆLGE ØJEFARVE.
		//
		//
		// Øje farve herunder
		// eye nav og dots
		this.upEyeButton = this.element.querySelector('.eye_button--up');
		this.downEyeButton = this.element.querySelector('.eye_button--down');
		this.eyeNav = this.element.querySelector('.eye_nav');
		this.eyeDots = Array.from(this.eyeNav.children);
		this.blackEye = this.element.querySelector('.eye1button');
		this.brownEye = this.element.querySelector('.eye2button');
		this.blueEye = this.element.querySelector('.eye3button');
		this.greenEye = this.element.querySelector('.eye4button');
		//funktion til at ændre øjefarver i preview
		this.eyeColorSet = (eyeCount) => {
			if (eyeCount === 1) {
				this.face1Slide.children[0].setAttribute('id', 'face1Black');
				this.face2Slide.children[0].setAttribute('id', 'face2Black');
				this.face3Slide.children[0].setAttribute('id', 'face3Black');
				this.face4Slide.children[0].setAttribute('id', 'face4Black');
			} else if (eyeCount === 2) {
				this.face1Slide.children[0].setAttribute('id', 'face1Brown');
				this.face2Slide.children[0].setAttribute('id', 'face2Brown');
				this.face3Slide.children[0].setAttribute('id', 'face3Brown');
				this.face4Slide.children[0].setAttribute('id', 'face4Brown');
			} else if (eyeCount === 3) {
				this.face1Slide.children[0].setAttribute('id', 'face1Blue');
				this.face2Slide.children[0].setAttribute('id', 'face2Blue');
				this.face3Slide.children[0].setAttribute('id', 'face3Blue');
				this.face4Slide.children[0].setAttribute('id', 'face4Blue');
			} else if (eyeCount === 4) {
				this.face1Slide.children[0].setAttribute('id', 'face1Green');
				this.face2Slide.children[0].setAttribute('id', 'face2Green');
				this.face3Slide.children[0].setAttribute('id', 'face3Green');
				this.face4Slide.children[0].setAttribute('id', 'face4Green');
			} else {
				console.log('error at eyeColorSet');
			}
		};
		// funktion som ændre OP og NED knapperne afhængig af eyeCount.
		this.hideShowEyeArrows = (eyeCount) => {
			if (eyeCount === 1) {
				this.upEyeButton.classList.add('is-hidden');
				this.downEyeButton.classList.remove('is-hidden');
			} else if (eyeCount === 4) {
				this.upEyeButton.classList.remove('is-hidden');
				this.downEyeButton.classList.add('is-hidden');
			} else {
				this.upEyeButton.classList.remove('is-hidden');
				this.downEyeButton.classList.remove('is-hidden');
			}
		};
		//funktion som ændre current eyeDot
		this.updateEyeDots = (currentEyeDot, targetEyeDot) => {
			currentEyeDot.classList.remove('eyeCurrent_Slide');
			targetEyeDot.classList.add('eyeCurrent_Slide');
		};

		if (this.facePicked == false) {
			this.downEyeButton.addEventListener('click', () => {
				this.currentEyeDot = this.eyeNav.querySelector('.eyeCurrent_Slide');
				this.eyeNextDot = this.currentEyeDot.nextElementSibling;
				this.updateEyeDots(this.currentEyeDot, this.eyeNextDot);
				if (this.eyeCount >= 0 && this.facePicked === false) {
					this.eyeCount++;
				} else {
					console.log('error: something is wrong with eyeCount');
				}
				this.hideShowEyeArrows(this.eyeCount);
				this.eyeColorSet(this.eyeCount);
			});

			this.upEyeButton.addEventListener('click', () => {
				this.currentEyeDot = this.eyeNav.querySelector('.eyeCurrent_Slide');
				this.eyePrevDot = this.currentEyeDot.previousElementSibling;
				this.updateEyeDots(this.currentEyeDot, this.eyePrevDot);
				if (this.eyeCount <= 4 && this.facePicked === false) {
					this.eyeCount--;
				} else {
					console.log('error: something is wrong with eyeCount');
				}
				this.hideShowEyeArrows(this.eyeCount);
				this.eyeColorSet(this.eyeCount);
			});

			this.eyeNav.addEventListener('click', (e) => {
				this.targetEyeDot = e.target.closest('button');
				if (!this.targetEyeDot) return;
				this.currentEyeDot = this.eyeNav.querySelector('.eyeCurrent_Slide');
				this.eyeTargetIndex = this.eyeDots.findIndex(
					(dot) => dot === this.targetEyeDot
				);
				this.updateEyeDots(this.currentEyeDot, this.targetEyeDot);
				this.hideShowEyeArrows(this.eyeCount);
				this.eyeColorSet(this.eyeCount);
			});
		} else {
			return;
		}
		// Lytter til op/w knappen.
		this.KeyPressListener = new KeyPressListener('KeyW', () => {
			this.upEyeButton = this.element.querySelector('.eye_button--up');
			this.currentEyeDot = this.eyeNav.querySelector('.eyeCurrent_Slide');
			this.eyeTappedUp = false;
			// hvis currentslide har en sibling så tryk, eller return.
			if (
				this.currentEyeDot.previousElementSibling &&
				this.facePicked === false
			) {
				setTimeout(() => {
					// toggle til at tilsætte css class.
					this.upEyeButton.classList.toggle('tapped--up');
				}, 250);
				this.eyeTappedUp = true;
			} else {
				return;
			}
			if ((this.eyeTappedUp = true && this.facePicked === false)) {
				this.upEyeButton.classList.toggle('tapped--up');
				document.getElementById('EyeUp').click();
			} else {
				return;
			}
		});

		this.KeyPressListener = new KeyPressListener('ArrowUp', () => {
			this.upEyeButton = this.element.querySelector('.eye_button--up');
			this.currentEyeDot = this.eyeNav.querySelector('.eyeCurrent_Slide');
			this.eyeTappedUp = false;
			// hvis currentslide har en sibling så tryk, eller return.
			if (
				this.currentEyeDot.previousElementSibling &&
				this.facePicked === false
			) {
				setTimeout(() => {
					// toggle til at tilsætte css class.
					this.upEyeButton.classList.toggle('tapped--up');
				}, 250);
				this.eyeTappedUp = true;
			} else {
				return;
			}
			if ((this.eyeTappedUp = true && this.facePicked === false)) {
				this.upEyeButton.classList.toggle('tapped--up');
				document.getElementById('EyeUp').click();
			} else {
				return;
			}
		});
		// Lytter til ned/s knappen.
		this.KeyPressListener = new KeyPressListener('KeyS', () => {
			this.downEyeButton = this.element.querySelector('.eye_button--down');
			this.currentEyeDot = this.eyeNav.querySelector('.eyeCurrent_Slide');
			this.eyeTappedDown = false;
			// hvis currentslide har en sibling så tryk, eller return.
			if (this.currentEyeDot.nextElementSibling && this.facePicked === false) {
				setTimeout(() => {
					// toggle til at tilsætte css class.
					this.downEyeButton.classList.toggle('tapped--down');
				}, 250);
				this.eyeTappedDown = true;
			} else {
				return;
			}
			if ((this.eyeTappedUp = true && this.facePicked === false)) {
				this.downEyeButton.classList.toggle('tapped--down');
				document.getElementById('EyeDown').click();
			} else {
				return;
			}
		});

		this.KeyPressListener = new KeyPressListener('ArrowDown', () => {
			this.downEyeButton = this.element.querySelector('.eye_button--down');
			this.currentEyeDot = this.eyeNav.querySelector('.eyeCurrent_Slide');
			this.eyeTappedDown = false;
			// hvis currentslide har en sibling så tryk, eller return.
			if (this.currentEyeDot.nextElementSibling && this.facePicked === false) {
				setTimeout(() => {
					// toggle til at tilsætte css class.
					this.downEyeButton.classList.toggle('tapped--down');
				}, 250);
				this.eyeTappedDown = true;
			} else {
				return;
			}
			if ((this.eyeTappedUp = true && this.facePicked === false)) {
				this.downEyeButton.classList.toggle('tapped--down');
				document.getElementById('EyeDown').click();
			} else {
				return;
			}
		});
		// Til øjefarve-knapperne
		if (this.facePicked == 0) {
			// hver eye knap for sig selv.
			this.blackEye.addEventListener('click', () => {
				this.eyeCount = 1;
			});
			this.brownEye.addEventListener('click', () => {
				this.eyeCount = 2;
			});
			this.blueEye.addEventListener('click', () => {
				this.eyeCount = 3;
			});
			this.greenEye.addEventListener('click', () => {
				this.eyeCount = 4;
			});
		} else {
			return;
		}

		this.faceSubmit.addEventListener('click', () => {
			if (
				this.faceCount == 4 &&
				this.eyeCount == 4 &&
				this.skinPicked === true &&
				this.facePicked === false
			) {
				setFaceType('faceType4Green');
				this.faceDone();
			} else if (
				this.faceCount == 4 &&
				this.eyeCount == 3 &&
				this.skinPicked === true &&
				this.facePicked === false
			) {
				setFaceType('faceType4Blue');
				this.faceDone();
			} else if (
				this.faceCount == 4 &&
				this.eyeCount == 2 &&
				this.skinPicked === true &&
				this.facePicked === false
			) {
				setFaceType('faceType4Brown');
				this.faceDone();
			} else if (
				this.faceCount == 4 &&
				this.eyeCount == 1 &&
				this.skinPicked === true &&
				this.facePicked === false
			) {
				setFaceType('faceType4Black');
				this.faceDone();
			} else if (
				this.faceCount == 3 &&
				this.eyeCount == 4 &&
				this.skinPicked === true &&
				this.facePicked === false
			) {
				setFaceType('faceType3Green');
				this.faceDone();
			} else if (
				this.faceCount == 3 &&
				this.eyeCount == 3 &&
				this.skinPicked === true &&
				this.facePicked === false
			) {
				setFaceType('faceType3Blue');
				this.faceDone();
			} else if (
				this.faceCount == 3 &&
				this.eyeCount == 2 &&
				this.skinPicked === true &&
				this.facePicked === false
			) {
				setFaceType('faceType3Brown');
				this.faceDone();
			} else if (
				this.faceCount == 3 &&
				this.eyeCount == 1 &&
				this.skinPicked === true &&
				this.facePicked === false
			) {
				setFaceType('faceType3Black');
				this.faceDone();
			} else if (
				this.faceCount == 2 &&
				this.eyeCount == 4 &&
				this.skinPicked === true &&
				this.facePicked === false
			) {
				setFaceType('faceType2Green');
				this.faceDone();
			} else if (
				this.faceCount == 2 &&
				this.eyeCount == 3 &&
				this.skinPicked === true &&
				this.facePicked === false
			) {
				setFaceType('faceType2Blue');
				this.faceDone();
			} else if (
				this.faceCount == 2 &&
				this.eyeCount == 2 &&
				this.skinPicked === true &&
				this.facePicked === false
			) {
				setFaceType('faceType2Brown');
				this.faceDone();
			} else if (
				this.faceCount == 2 &&
				this.eyeCount == 1 &&
				this.skinPicked === true &&
				this.facePicked === false
			) {
				setFaceType('faceType2Black');
				this.faceDone();
			} else if (
				this.faceCount == 1 &&
				this.eyeCount == 4 &&
				this.skinPicked === true &&
				this.facePicked === false
			) {
				setFaceType('faceType1Green');
				this.faceDone();
			} else if (
				this.faceCount == 1 &&
				this.eyeCount == 3 &&
				this.skinPicked === true &&
				this.facePicked === false
			) {
				setFaceType('faceType1Blue');
				this.faceDone();
			} else if (
				this.faceCount == 1 &&
				this.eyeCount == 2 &&
				this.skinPicked === true &&
				this.facePicked === false
			) {
				setFaceType('faceType1Brown');
				this.faceDone();
			} else if (
				this.faceCount == 1 &&
				this.eyeCount == 1 &&
				this.skinPicked === true &&
				this.facePicked === false
			) {
				setFaceType('faceType1Black');
				this.faceDone();
			} else {
				console.log('error at faceSubmit');
			}
		});

		// haircounter
		this.hairPicked = false;
		this.hairCount = 1;
		// hair prev og next
		this.hairLeftBtn = this.element.querySelector('.hair_button--left');
		this.hairRightBtn = this.element.querySelector('.hair_button--right');
		// hair sprites og slides
		this.hairTrack = this.element.querySelector('.hair_track');
		this.hairSlides = Array.from(this.hairTrack.children);
		this.hair1Slide = this.hairTrack.children[0];
		this.hair2Slide = this.hairTrack.children[1];
		this.hair3Slide = this.hairTrack.children[2];
		this.hair4Slide = this.hairTrack.children[3];
		// hair nav og dots
		this.hairNav = this.element.querySelector('.hair_nav');
		this.hairDots = Array.from(this.hairNav.children);
		this.hair1button = this.element.querySelector('.hair1button');
		this.hair2button = this.element.querySelector('.hair2button');
		this.hair3button = this.element.querySelector('.hair3button');
		this.hair4button = this.element.querySelector('.hair4button');
		//submit knap
		this.hairSubmit = this.element.querySelector('.hairSubmitBtn');
		// Hair funktionaliteter nedunder her

		this.hairSlideWidth = this.hairSlides[0].getBoundingClientRect().width;
		this.element.setHairSlidePosition = (slide, index) => {
			slide.style.left = this.hairSlideWidth * index + 'px';
		};
		this.hairSlides.forEach(this.element.setHairSlidePosition);
		this.hairMoveToSlide = (hairTrack, hairCurrentSlide, hairTargetSlide) => {
			this.hairTrack.style.cssText = `
			position: absolute;
			top: 50%;
			left: 44.4%;
			transform: scale(2);
		`;
			this.hairTrack.style.transform =
				'translateX(-' + hairTargetSlide.style.left + ')';
			this.hairCurrentSlide.classList.remove('hairCurrent_Slide');
			hairTargetSlide.classList.add('hairCurrent_Slide');
		};
		this.updateHairDots = (currentHairDot, targetHairDot) => {
			currentHairDot.classList.remove('hairCurrent_Slide');
			targetHairDot.classList.add('hairCurrent_Slide');
		};

		this.hideShowHairArrows = (
			hairSlides,
			hairLeftBtn,
			hairRightBtn,
			HairtargetIndex
		) => {
			if (HairtargetIndex === 0) {
				this.hairLeftBtn.classList.add('is-hidden');
				this.hairRightBtn.classList.remove('is-hidden');
			} else if (HairtargetIndex === this.hairSlides.length - 1) {
				this.hairLeftBtn.classList.remove('is-hidden');
				this.hairRightBtn.classList.add('is-hidden');
			} else {
				this.hairLeftBtn.classList.remove('is-hidden');
				this.hairRightBtn.classList.remove('is-hidden');
			}
		};

		this.hairRightBtn.addEventListener('click', () => {
			this.hairCurrentSlide =
				this.hairTrack.querySelector('.hairCurrent_Slide');
			this.hairNextSlide = this.hairCurrentSlide.nextElementSibling;
			this.hairCurrentDot = this.hairNav.querySelector('.hairCurrent_Slide');
			this.hairNextDot = this.hairCurrentDot.nextElementSibling;
			this.hairNextIndex = this.hairSlides.findIndex(
				(slide) => slide === this.hairNextSlide
			);
			this.hairMoveToSlide(
				this.hairTrack,
				this.hairCurrentSlide,
				this.hairNextSlide
			);
			this.updateHairDots(this.hairCurrentDot, this.hairNextDot);
			this.hideShowHairArrows(
				this.hairSlides,
				this.hairLeftBtn,
				this.hairRightBtn,
				this.hairNextIndex
			);
			if (this.hairCount >= 0 && this.hairPicked === false) {
				this.hairCount++;
			} else {
				console.log('error: something is wrong with hairCount');
			}
		});

		this.hairLeftBtn.addEventListener('click', () => {
			this.hairCurrentSlide =
				this.hairTrack.querySelector('.hairCurrent_Slide');
			this.hairPrevSlide = this.hairCurrentSlide.previousElementSibling;
			this.hairCurrentDot = this.hairNav.querySelector('.hairCurrent_Slide');
			this.hairPrevDot = this.hairCurrentDot.previousElementSibling;
			this.hairPrevIndex = this.hairSlides.findIndex(
				(slide) => slide === this.hairPrevSlide
			);
			this.hairMoveToSlide(
				this.hairTrack,
				this.hairCurrentSlide,
				this.hairPrevSlide
			);
			this.updateHairDots(this.hairCurrentDot, this.hairPrevDot);
			this.hideShowHairArrows(
				this.hairSlides,
				this.hairLeftBtn,
				this.hairRightBtn,
				this.hairPrevIndex
			);
			if (this.hairCount <= 4 && this.hairPicked === false) {
				this.hairCount--;
			} else {
				console.log('error: something is wrong with hairCount');
			}
		});

		if (this.hairPicked == false) {
			this.hairNav.addEventListener('click', (e) => {
				this.targetHairDot = e.target.closest('button');
				if (!this.targetHairDot) return;
				this.hairCurrentSlide =
					this.hairTrack.querySelector('.hairCurrent_Slide');
				this.hairCurrentDot = this.hairNav.querySelector('.hairCurrent_Slide');
				this.hairTargetIndex = this.hairDots.findIndex(
					(dot) => dot === this.targetHairDot
				);
				this.hairTargetSlide = this.hairSlides[this.hairTargetIndex];
				this.hairMoveToSlide(
					this.hairTrack,
					this.hairCurrentSlide,
					this.hairTargetSlide
				);
				this.updateHairDots(this.hairCurrentDot, this.targetHairDot);
				this.hideShowHairArrows(
					this.hairSlides,
					this.hairLeftBtn,
					this.hairRightBtn,
					this.hairTargetIndex
				);
			});
		} else {
			return;
		}

		// til hair
		if (this.hairPicked == 0) {
			// hver hair knap for sig selv.
			this.hair1button.addEventListener('click', () => {
				this.hairCount = 1;
			});
			this.hair2button.addEventListener('click', () => {
				this.hairCount = 2;
			});
			this.hair3button.addEventListener('click', () => {
				this.hairCount = 3;
			});
			this.hair4button.addEventListener('click', () => {
				this.hairCount = 4;
			});
		} else {
			return;
		}

		// Lytter til højre/d knappen.
		this.KeyPressListener = new KeyPressListener('KeyD', () => {
			this.hairTrack = this.element.querySelector('.hair_track');
			this.hairCurrentSlide =
				this.hairTrack.querySelector('.hairCurrent_Slide');
			this.hairRightBtn = this.element.querySelector('.hair_button--right');
			this.hairTappedRight = false;
			// hvis currentslide har en sibling så tryk, eller return.
			if (
				this.hairCurrentSlide.nextElementSibling &&
				this.hairPicked === false
			) {
				setTimeout(() => {
					// toggle til at tilsætte css class.
					this.hairRightBtn.classList.toggle('tapped--right');
				}, 250);
				this.hairTappedRight = true;
			} else {
				return;
			}
			if ((this.hairTappedRight = true)) {
				this.hairRightBtn.classList.toggle('tapped--right');
				document.getElementById('HairRight').click();
			} else {
				return;
			}
		});

		this.KeyPressListener = new KeyPressListener('ArrowRight', () => {
			this.hairTrack = this.element.querySelector('.hair_track');
			this.hairCurrentSlide =
				this.hairTrack.querySelector('.hairCurrent_Slide');
			this.hairRightBtn = this.element.querySelector('.hair_button--right');
			this.hairTappedRight = false;
			// hvis currentslide har en sibling så tryk, eller return.
			if (
				this.hairCurrentSlide.nextElementSibling &&
				this.hairPicked === false
			) {
				setTimeout(() => {
					// toggle til at tilsætte css class.
					this.hairRightBtn.classList.toggle('tapped--right');
				}, 250);
				this.hairTappedRight = true;
			} else {
				return;
			}
			if ((this.hairTappedRight = true)) {
				this.hairRightBtn.classList.toggle('tapped--right');
				document.getElementById('HairRight').click();
			} else {
				return;
			}
		});

		// Lytter til venstre/a knappen.
		this.KeyPressListener = new KeyPressListener('KeyA', () => {
			this.hairTrack = this.element.querySelector('.hair_track');
			this.hairCurrentSlide =
				this.hairTrack.querySelector('.hairCurrent_Slide');
			this.hairLeftBtn = this.element.querySelector('.hair_button--left');
			this.hairTappedLeft = false;
			if (
				this.hairCurrentSlide.previousElementSibling &&
				this.hairPicked === false
			) {
				setTimeout(() => {
					this.hairLeftBtn.classList.toggle('tapped--left');
				}, 250);
				this.hairTappedLeft = true;
			} else {
				return;
			}
			if ((this.hairTappedLeft = true && this.hairPicked === false)) {
				this.hairLeftBtn.classList.toggle('tapped--left');
				document.getElementById('HairLeft').click();
			} else {
				return;
			}
		});
		this.KeyPressListener = new KeyPressListener('ArrowLeft', () => {
			this.hairTrack = this.element.querySelector('.hair_track');
			this.hairCurrentSlide =
				this.hairTrack.querySelector('.hairCurrent_Slide');
			this.hairLeftBtn = this.element.querySelector('.hair_button--left');
			this.hairTappedLeft = false;
			if (
				this.hairCurrentSlide.previousElementSibling &&
				this.hairPicked === false
			) {
				setTimeout(() => {
					this.hairLeftBtn.classList.toggle('tapped--left');
				}, 250);
				this.hairTappedLeft = true;
			} else {
				return;
			}
			if ((this.hairTappedLeft = true && this.hairPicked === false)) {
				this.hairLeftBtn.classList.toggle('tapped--left');
				document.getElementById('HairLeft').click();
			} else {
				return;
			}
		});

		// Hår farve herunder
		// haircolor nav og dots
		this.hairColorCount = 1;
		this.upHairButton = this.element.querySelector('.hairColor_button--up');
		this.downHairButton = this.element.querySelector('.hairColor_button--down');
		this.hairColorNav = this.element.querySelector('.hairColor_nav');
		this.hairColorDots = Array.from(this.hairColorNav.children);
		this.blackHairColor = this.element.querySelector('.hairColor1button');
		this.brownHairColor = this.element.querySelector('.hairColor2button');
		this.blondeHairColor = this.element.querySelector('.hairColor3button');
		this.orangeHairColor = this.element.querySelector('.hairColor4button');
		//funktionaliteter som før

		this.hairColorSet = (hairColorCount) => {
			if (hairColorCount === 1) {
				this.hair1Slide.children[0].setAttribute('id', 'hair1Black');
				this.hair2Slide.children[0].setAttribute('id', 'hair2Black');
				this.hair3Slide.children[0].setAttribute('id', 'hair3Black');
				this.hair4Slide.children[0].setAttribute('id', 'hair4Black');
			} else if (hairColorCount === 2) {
				this.hair1Slide.children[0].setAttribute('id', 'hair1Brown');
				this.hair2Slide.children[0].setAttribute('id', 'hair2Brown');
				this.hair3Slide.children[0].setAttribute('id', 'hair3Brown');
				this.hair4Slide.children[0].setAttribute('id', 'hair4Brown');
			} else if (hairColorCount === 3) {
				this.hair1Slide.children[0].setAttribute('id', 'hair1Blonde');
				this.hair2Slide.children[0].setAttribute('id', 'hair2Blonde');
				this.hair3Slide.children[0].setAttribute('id', 'hair3Blonde');
				this.hair4Slide.children[0].setAttribute('id', 'hair4Blonde');
			} else if (hairColorCount === 4) {
				this.hair1Slide.children[0].setAttribute('id', 'hair1Orange');
				this.hair2Slide.children[0].setAttribute('id', 'hair2Orange');
				this.hair3Slide.children[0].setAttribute('id', 'hair3Orange');
				this.hair4Slide.children[0].setAttribute('id', 'hair4Orange');
			} else {
				console.log('error at hairColorSet');
			}
		};
		// funktion som ændre OP og NED knapperne afhængig af hairCount.
		this.hideShowHairColorArrows = (hairColorCount) => {
			if (hairColorCount === 1) {
				this.upHairButton.classList.add('is-hidden');
				this.downHairButton.classList.remove('is-hidden');
			} else if (hairColorCount === 4) {
				this.upHairButton.classList.remove('is-hidden');
				this.downHairButton.classList.add('is-hidden');
			} else {
				this.upHairButton.classList.remove('is-hidden');
				this.downHairButton.classList.remove('is-hidden');
			}
		};
		//funktion som ændre current HairColorDot
		this.updateHairColorDots = (currentHairColorDot, targetHairColorDot) => {
			currentHairColorDot.classList.remove('hairColorCurrent_Slide');
			targetHairColorDot.classList.add('hairColorCurrent_Slide');
		};

		if (this.hairPicked == false) {
			this.downHairButton.addEventListener('click', () => {
				this.currentHairColorDot = this.hairColorNav.querySelector(
					'.hairColorCurrent_Slide'
				);
				this.hairColorNextDot = this.currentHairColorDot.nextElementSibling;
				this.updateHairColorDots(
					this.currentHairColorDot,
					this.hairColorNextDot
				);
				if (this.hairColorCount >= 0 && this.hairPicked === false) {
					this.hairColorCount++;
				} else {
					console.log('error: something is wrong with hairColorCount');
				}
				this.hideShowHairColorArrows(this.hairColorCount);
				this.hairColorSet(this.hairColorCount);
			});

			this.upHairButton.addEventListener('click', () => {
				this.currentHairColorDot = this.hairColorNav.querySelector(
					'.hairColorCurrent_Slide'
				);
				this.hairColorPrevDot = this.currentHairColorDot.previousElementSibling;
				this.updateHairColorDots(
					this.currentHairColorDot,
					this.hairColorPrevDot
				);
				if (this.hairColorCount <= 4 && this.hairPicked === false) {
					this.hairColorCount--;
				} else {
					console.log('error: something is wrong with hairCount');
				}
				this.hideShowHairColorArrows(this.hairColorCount);
				this.hairColorSet(this.hairColorCount);
			});

			this.hairColorNav.addEventListener('click', (e) => {
				this.targetHairColorDot = e.target.closest('button');
				if (!this.targetHairColorDot) return;
				this.currentHairColorDot = this.hairColorNav.querySelector(
					'.hairColorCurrent_Slide'
				);
				this.hairColorTargetIndex = this.hairColorDots.findIndex(
					(dot) => dot === this.targetHairColorDot
				);
				this.updateHairColorDots(
					this.currentHairColorDot,
					this.targetHairColorDot
				);
				this.hideShowHairColorArrows(this.hairColorCount);
				this.hairColorSet(this.hairColorCount);
			});
		} else {
			return;
		}
		// Lytter til op/w knappen.
		this.KeyPressListener = new KeyPressListener('KeyW', () => {
			this.upHairButton = this.element.querySelector('.hairColor_button--up');
			this.currentHairColorDot = this.hairColorNav.querySelector(
				'.hairColorCurrent_Slide'
			);
			this.hairTappedUp = false;
			// hvis currentslide har en sibling så tryk, eller return.
			if (
				this.currentHairColorDot.previousElementSibling &&
				this.hairPicked === false
			) {
				setTimeout(() => {
					// toggle til at tilsætte css class.
					this.upHairButton.classList.toggle('tapped--up');
				}, 250);
				this.hairTappedUp = true;
			} else {
				return;
			}
			if ((this.hairTappedUp = true && this.hairPicked === false)) {
				this.upHairButton.classList.toggle('tapped--up');
				document.getElementById('HairUp').click();
			} else {
				return;
			}
		});

		this.KeyPressListener = new KeyPressListener('ArrowUp', () => {
			this.upHairButton = this.element.querySelector('.hairColor_button--up');
			this.currentHairColorDot = this.hairColorNav.querySelector(
				'.hairColorCurrent_Slide'
			);
			this.hairTappedUp = false;
			// hvis currentslide har en sibling så tryk, eller return.
			if (
				this.currentHairColorDot.previousElementSibling &&
				this.hairPicked === false
			) {
				setTimeout(() => {
					// toggle til at tilsætte css class.
					this.upHairButton.classList.toggle('tapped--up');
				}, 250);
				this.hairTappedUp = true;
			} else {
				return;
			}
			if ((this.hairTappedUp = true && this.hairPicked === false)) {
				this.upHairButton.classList.toggle('tapped--up');
				document.getElementById('HairUp').click();
			} else {
				return;
			}
		});
		// Lytter til ned/s knappen.
		this.KeyPressListener = new KeyPressListener('KeyS', () => {
			this.downHairButton = this.element.querySelector(
				'.hairColor_button--down'
			);
			this.currentHairColorDot = this.hairColorNav.querySelector(
				'.hairColorCurrent_Slide'
			);
			this.hairTappedDown = false;
			// hvis currentslide har en sibling så tryk, eller return.
			if (
				this.currentHairColorDot.nextElementSibling &&
				this.hairPicked === false
			) {
				setTimeout(() => {
					// toggle til at tilsætte css class.
					this.downHairButton.classList.toggle('tapped--down');
				}, 250);
				this.hairTappedDown = true;
			} else {
				return;
			}
			if ((this.hairTappedUp = true && this.hairPicked === false)) {
				this.downHairButton.classList.toggle('tapped--down');
				document.getElementById('HairDown').click();
			} else {
				return;
			}
		});

		this.KeyPressListener = new KeyPressListener('ArrowDown', () => {
			this.downHairButton = this.element.querySelector(
				'.hairColor_button--down'
			);
			this.currentHairColorDot = this.hairColorNav.querySelector(
				'.hairColorCurrent_Slide'
			);
			this.hairTappedDown = false;
			// hvis currentslide har en sibling så tryk, eller return.
			if (
				this.currentHairColorDot.nextElementSibling &&
				this.hairPicked === false
			) {
				setTimeout(() => {
					// toggle til at tilsætte css class.
					this.downHairButton.classList.toggle('tapped--down');
				}, 250);
				this.hairTappedDown = true;
			} else {
				return;
			}
			if ((this.hairTappedUp = true && this.hairPicked === false)) {
				this.downHairButton.classList.toggle('tapped--down');
				document.getElementById('HairDown').click();
			} else {
				return;
			}
		});
		// Til øjefarve-knapperne
		if (this.hairPicked == 0) {
			// hver hair knap for sig selv.
			this.blackHairColor.addEventListener('click', () => {
				this.hairColorCount = 1;
			});
			this.brownHairColor.addEventListener('click', () => {
				this.hairColorCount = 2;
			});
			this.blondeHairColor.addEventListener('click', () => {
				this.hairColorCount = 3;
			});
			this.orangeHairColor.addEventListener('click', () => {
				this.hairColorCount = 4;
			});
		} else {
			return;
		}
		// Hair Submit knap herunder
		//
		//
		this.hairSubmit.addEventListener('click', () => {
			if (
				this.hairCount == 4 &&
				this.hairColorCount == 4 &&
				this.facePicked === true &&
				this.hairPicked === false
			) {
				setHairType('hairtype4Orange');
				this.done();
			} else if (
				this.hairCount == 4 &&
				this.hairColorCount == 3 &&
				this.facePicked === true &&
				this.hairPicked === false
			) {
				setHairType('hairtype4Blonde');
				this.done();
			} else if (
				this.hairCount == 4 &&
				this.hairColorCount == 2 &&
				this.facePicked === true &&
				this.hairPicked === false
			) {
				setHairType('hairtype4Brown');
				this.done();
			} else if (
				this.hairCount == 4 &&
				this.hairColorCount == 1 &&
				this.facePicked === true &&
				this.hairPicked === false
			) {
				setHairType('hairtype4Black');
				this.done();
			} else if (
				this.hairCount == 3 &&
				this.hairColorCount == 4 &&
				this.facePicked === true &&
				this.hairPicked === false
			) {
				setHairType('hairtype3Orange');
				this.done();
			} else if (
				this.hairCount == 3 &&
				this.hairColorCount == 3 &&
				this.facePicked === true &&
				this.hairPicked === false
			) {
				setHairType('hairtype3Blonde');
				this.done();
			} else if (
				this.hairCount == 3 &&
				this.hairColorCount == 2 &&
				this.facePicked === true &&
				this.hairPicked === false
			) {
				setHairType('hairtype3Brown');
				this.done();
			} else if (
				this.hairCount == 3 &&
				this.hairColorCount == 1 &&
				this.facePicked === true &&
				this.hairPicked === false
			) {
				setHairType('hairtype3Black');
				this.done();
			} else if (
				this.hairCount == 2 &&
				this.hairColorCount == 4 &&
				this.facePicked === true &&
				this.hairPicked === false
			) {
				setHairType('hairtype2Orange');
				this.done();
			} else if (
				this.hairCount == 2 &&
				this.hairColorCount == 3 &&
				this.facePicked === true &&
				this.hairPicked === false
			) {
				setHairType('hairtype2Blonde');
				this.done();
			} else if (
				this.hairCount == 2 &&
				this.hairColorCount == 2 &&
				this.facePicked === true &&
				this.hairPicked === false
			) {
				setHairType('hairtype2Brown');
				this.done();
			} else if (
				this.hairCount == 2 &&
				this.hairColorCount == 1 &&
				this.facePicked === true &&
				this.hairPicked === false
			) {
				setHairType('hairtype2Black');
				this.done();
			} else if (
				this.hairCount == 1 &&
				this.hairColorCount == 4 &&
				this.facePicked === true &&
				this.hairPicked === false
			) {
				setHairType('hairtype1Orange');
				this.done();
			} else if (
				this.hairCount == 1 &&
				this.hairColorCount == 3 &&
				this.facePicked === true &&
				this.hairPicked === false
			) {
				setHairType('hairtype1Blonde');
				this.done();
			} else if (
				this.hairCount == 1 &&
				this.hairColorCount == 2 &&
				this.facePicked === true &&
				this.hairPicked === false
			) {
				setHairType('hairtype1Brown');
				this.done();
			} else if (
				this.hairCount == 1 &&
				this.hairColorCount == 1 &&
				this.facePicked === true &&
				this.hairPicked === false
			) {
				setHairType('hairtype1Black');
				this.done();
			} else {
				console.log('error at hairSubmit');
			}
		});
	}

	//

	//
	skinDone() {
		if (this.skinDone) {
			// reset af animation ved at fjerne CCreatorAnimation
			setTimeout(() => {
				this.resetImg.forEach((element) => {
					this.skinPicked = true;
					element.classList.remove('CCreatorAnimation');
				});
			}, 10);
			//vis faces her, ved at fjerne no show efter submit af skin.
			//face_track, face_nav face1button face2button face3button face4button faceSubmitBtn <= alle de her skal fjerne no_show efter submit af skin. Og deres tilsvarende skal alle tilføje no_show.
			this.dotsNav.classList.add('no_show');
			this.nextButton.classList.add('no_show');
			this.prevButton.classList.add('no_show');
			this.skinSubmit.classList.add('no_show');
			// Tilføjer relevante på skærmen til facepick.
			this.faceLeftBtn.classList.remove('no_show');
			this.faceRightBtn.classList.remove('no_show');
			this.faceTrack.classList.remove('no_show');
			this.faceNav.classList.remove('no_show');
			this.face1button.classList.remove('no_show');
			this.face2button.classList.remove('no_show');
			this.face3button.classList.remove('no_show');
			this.face4button.classList.remove('no_show');
			this.faceSubmit.classList.remove('no_show');
			// Øje farve
			this.upEyeButton.classList.remove('no_show');
			this.downEyeButton.classList.remove('no_show');
			this.eyeNav.classList.remove('no_show');
			this.blackEye.classList.remove('no_show');
			this.brownEye.classList.remove('no_show');
			this.blueEye.classList.remove('no_show');
			this.greenEye.classList.remove('no_show');
			// tilføj animation igen for at sykroniserer med face animation
			// Ændre text til valg af facetype
			document.getElementById('CCreatorPString').innerText =
				'Choose your facetype:';
			document.getElementById('CCreatorPString2').innerText =
				'Choose your eyecolor:';
		}
	}
	faceDone() {
		// reset af animation ved at fjerne CCreatorAnimation
		setTimeout(() => {
			this.resetImg.forEach((element) => {
				this.facePicked = true;
				element.classList.remove('CCreatorAnimation');
			});
		}, 10);
		// fjerne facepick elementer.
		this.faceLeftBtn.classList.add('no_show');
		this.faceRightBtn.classList.add('no_show');
		this.faceNav.classList.add('no_show');
		this.face1button.classList.add('no_show');
		this.face2button.classList.add('no_show');
		this.face3button.classList.add('no_show');
		this.face4button.classList.add('no_show');
		this.faceSubmit.classList.add('no_show');
		// fjerne Øje-farve elementer.
		this.upEyeButton.classList.add('no_show');
		this.downEyeButton.classList.add('no_show');
		this.eyeNav.classList.add('no_show');
		this.blackEye.classList.add('no_show');
		this.brownEye.classList.add('no_show');
		this.blueEye.classList.add('no_show');
		this.greenEye.classList.add('no_show');
		//tilføj hår-elementer.
		this.hairLeftBtn.classList.remove('no_show');
		this.hairRightBtn.classList.remove('no_show');
		this.hairTrack.classList.remove('no_show');
		this.hairNav.classList.remove('no_show');
		this.hair1button.classList.remove('no_show');
		this.hair2button.classList.remove('no_show');
		this.hair3button.classList.remove('no_show');
		this.hair4button.classList.remove('no_show');
		this.hairSubmit.classList.remove('no_show');
		//tilføj hårfarve-elementer.
		this.upHairButton.classList.remove('no_show');
		this.downHairButton.classList.remove('no_show');
		this.hairColorNav.classList.remove('no_show');
		this.blackHairColor.classList.remove('no_show');
		this.brownHairColor.classList.remove('no_show');
		this.blondeHairColor.classList.remove('no_show');
		this.orangeHairColor.classList.remove('no_show');
		// tilføj animation igen for at sykroniserer med face animation
		setTimeout(() => {
			this.resetImg.forEach((element) => {
				element.classList.add('CCreatorAnimation');
			});
		}, 200);
		// Ændre text til valg af facetype
		document.getElementById('CCreatorPString').innerText =
			'Choose your hairtype:';
		document.getElementById('CCreatorPString2').innerText =
			'Choose your haircolor:';
		document.getElementById('CCreatorPString2').style.left = '5px';
	}
	// Skab en variable der hedder skinpicked og lad den være falsk, efter der er registeret på submit skal denne være true, alle listener skal lytte om denne er falsk før de er aktive.
	done() {
		if (this.done) {
			this.skinPicked = true;
			this.facePicked = true;
			this.hairPicked = true;
			this.KeyPressListener.unbind();
			this.element.remove();
			this.onComplete();
		} else {
			console.log('error at done');
		}
	}

	init(container) {
		this.createElement();
		container.appendChild(this.element);
	}
}
