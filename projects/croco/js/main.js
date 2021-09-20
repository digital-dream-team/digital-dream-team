'use strict';
document.addEventListener('DOMContentLoaded', () => {
	//start menu burger//////////
	const burgerIcon = document.querySelector('.menu-burger__icon');
	const burgerMenuList = document.querySelector('.menu-burger__container');
	const body = document.querySelector('body');

	burgerIcon.addEventListener('click', (event) => {
		burgerIcon.classList.toggle('active');
		if (burgerIcon.classList.contains('active')) {
			body.classList.add('lock');
			burgerMenuList.classList.add('active');
		} else {
			body.classList.remove('lock');
			burgerMenuList.classList.remove('active');
		}
	});

	burgerMenuList.addEventListener('click', (event) =>{
		const target = event.target;
		if (target && target.classList.contains('menu-burger__link')){
			burgerIcon.classList.remove('active');
			burgerMenuList.classList.remove('active');
			body.classList.remove('lock');
		}
	});
	//end menu burger//////////

	//start dinamic inn social
	const social = document.querySelector('.header__social-media').innerHTML;
	const menuBurger = document.querySelector('.menu-burger__container');

	const socElem = document.createElement('div');
	socElem.classList.add('menu-burger__dinamic');
	socElem.innerHTML = social;

	menuBurger.append(socElem);
	//end dinamic inn social

	//start scroll header
	const header = document.querySelector('.header__inner');
	const headerLogo = document.querySelector('.header__logo-box');
	const headerPopup = document.querySelector('.header__questons');

	window.addEventListener('scroll', function(e) {
	const position = window.scrollY;

		if (position > 0) {
			header.classList.add('active');
			// headerLogo.classList.add('active');
			// headerPopup.classList.add('active');
		}

		if (position <= 0) {
			header.classList.remove('active');
			// headerLogo.classList.remove('active');
			// headerPopup.classList.remove('active');
		}
	});
	//end scroll header

	//start push video
	const videoBtn = document.querySelector('.promo-video'),
	video = videoBtn.querySelector('.video'),
	videoControl = videoBtn.querySelector('.video-control');

	videoControl.addEventListener('click', (e)=> {
		if (video.paused) {  // если видео остановлено, запускаем
			video.play();
		} else {
			video.pause();
		}
	});
	//end push video

	//start slider Swiper//
		let mySwiper = new Swiper('.feedback__cont', {
			containerModifierClass: 'feedback__cont', 
			wrapperClass: 'feedback__wrap',
			slideClass: 'feedback__item',
			parallax: false,
			loop: false,
			slidesPerView: 'auto',
			spaceBetween: 180,
			freeMode: false,
			centeredSlides: true,
			simulateTouch: true,
			autoHeight: false,
			navigation: {
				nextEl: '.feedback__button-next',
				prevEl: '.feedback__button-prev',
			},
		});
	//end slider Swiper//
	//start custom-auto-height
	const getContainerHeight = document.querySelector('.feedback__cont'),
		getSlideActive = getContainerHeight.querySelector('.swiper-slide-active'),
		getContentHeight = getContainerHeight.querySelectorAll('.feedback__content');

	getContainerHeight.style.cssText = `height: ${getSlideActive.firstElementChild.offsetHeight}px;`;

	function autoHeight(item, i) {
		let height = item[i].offsetHeight + 'px';
		getContainerHeight.style.cssText = `height: ${height};`;
	}
	// autoHeight(getContentHeight, 0);

	mySwiper.on('slideChange', function () {
		let realIndex = mySwiper.activeIndex;
		autoHeight(getContentHeight, realIndex);
	});
	//end custom-auto-height
	//start slider Swiper//
		new Swiper('.show__cont', {
			containerModifierClass: 'show__cont', 
			wrapperClass: 'show__wrap',
			slideClass: 'show__item',
			parallax: false,
			loop: true,
			slidesPerView: 2,
			spaceBetween: 10,
			freeMode: false,
			centeredSlides: false,
			simulateTouch: true,
			autoHeight: false,
			slidesPerGroup: 2,
			loopFillGroupWithBlank: true,
			navigation: {
				nextEl: '.show__button-next',
				prevEl: '.show__button-prev',
			},
			breakpoints: {
				468: {
					slidesPerView: 3,
					slidesPerGroup: 3,
				},
				660: {
					slidesPerView: 4,
					slidesPerGroup: 4,
				},
				900: {
					spaceBetween: 20,
					slidesPerView: 5,
					slidesPerGroup: 5,
				},
			},
			autoplay: {
				delay: 5000,
			},
		});
	//end slider Swiper//

	//start form-1 in secyion 'send'//

	const complite = document.querySelector('.complite-all-forms-js').innerHTML;
	

	const contactInn = document.querySelector('.contacts__inner'),
		formBox = contactInn.querySelector('.send');


	const getForm1 = document.querySelector('#form-1'),

		getLabelName1 = getForm1.querySelector('#label-name-1'),
		getLabelContact1 = getForm1.querySelector('#label-contacts-1'),

		getInputName1 = getForm1.querySelector('#input-name-1'),
		getInputContact1 = getForm1.querySelector('#input-contacts-1'),

		getButton1 = getForm1.querySelector('#button-1');

	getForm1.addEventListener('submit', (event) => {
		event.preventDefault();
		checkInputs1();
		sendMail1();
	});

	function sendMail1 () {
		let error = checkInputs1(getForm1);
		if (error === 0) {
			getForm1.classList.add('sending');
			formBox.classList.add('active');
			contactInn.innerHTML = complite;

			const compliteRemove = contactInn.querySelectorAll('.remove-js');
			compliteRemove.forEach(items => {
				items.style.cssText = `display: none;`;
			});
		} else {
			// alert('Заполните обязательные поля');
		}
	}

	function checkInputs1 () {
		let error = 0;

		if (getInputName1.value === '' || getInputName1.value === null) {
			addError(getLabelName1, 'Заполните это поле');
			error++;
		} else {
			console.log(getInputName1.value);
			addComplete(getLabelName1, '');
		}

		if (getInputContact1.value === '' || getInputContact1.value === null) {
			addError(getLabelContact1, 'Заполните это поле');
			error++;
		}
		else {
			addComplete(getLabelContact1, '');
		}

		return error;
	}
	//end form-1 in section 'send'//
	//start form-2 in section 'send'//
	const popupOrder = document.querySelector('#popup-order');

	const formBoxPopup = document.querySelector('.send--popup'),
		formContainer = formBoxPopup.querySelector('.send__container'),
		formBody = formBoxPopup.querySelector('.send__body');

	const formConnnectInfo = document.querySelector('.complite-all-forms-js');

	const getForm2 = document.querySelector('#form-2'),

	getLabelName2 = getForm2.querySelector('#label-name-2'),
	getLabelContact2 = getForm2.querySelector('#label-contacts-2'),

	getInputName2 = getForm2.querySelector('#input-name-2'),
	getInputContact2 = getForm2.querySelector('#input-contacts-2'),

	getButton2 = getForm2.querySelector('#button-2');

	getForm2.addEventListener('submit', (event) => {
		event.preventDefault();
		checkInputs2();
		sendMail2();
	});

	function sendMail2 () {
		let error = checkInputs2(getForm2);
		if (error === 0) {
			getForm2.classList.add('sending');
			formContainer.classList.add('active');
			formBoxPopup.classList.add('active-bg');
			formConnnectInfo.classList.add('active');

			const compliteText = formConnnectInfo.querySelector('.send__connection-text');
			const complitePhone = formConnnectInfo.querySelector('.send__connection-phone');
			compliteText.classList.add('re-color');
			complitePhone.classList.add('re-color');

		} else {
			// alert('Заполните обязательные поля');
		}
	}

	function checkInputs2 () {
		let error = 0;

		if (getInputName2.value === '' || getInputName2.value === null) {
			addError(getLabelName2, 'Заполните это поле');
			error++;
		} else {
			addComplete(getLabelName2, '');
		}

		if (getInputContact2.value === '' || getInputContact2.value === null) {
			addError(getLabelContact2, 'Заполните это поле');
			error++;
		}
		else {
			addComplete(getLabelContact2, '');
		}

		return error;
	}
	//end form-2 in section 'send'//

	//start add arrore for all forms
	function addError (input, message) {
		input.classList.add('error');
		input.classList.remove('complete');

		input.insertAdjacentHTML("beforeEnd", '<span class="form__massage"></span>');

		const labelElement = input.parentElement;
		const messageError = labelElement.querySelector('.form__massage');
		messageError.innerText = message;

	}

	function addComplete (input, message) {
		input.classList.add('complete');
		input.classList.remove('error');

		input.insertAdjacentHTML("beforeEnd", '<span class="form__massage"></span>');

		const labelElement = input.parentElement;
		const messageError = labelElement.querySelector('.form__massage');
		messageError.innerText = message;
	}
	//end add arrore for all forms

	//start insert product image in send form
	const insertProduct = document.querySelectorAll('.card__content-body');
	const insertBtn = document.querySelectorAll('.card__button-link');
	const afterElement = document.querySelector('#light');

	const cardRow = document.querySelector('.card__row').addEventListener('click', (event)=> {
		const target = event.target;

		if (target && target.classList.contains('card__button-link')) {
			insertBtn.forEach((item, i) => {
				if (target == item) {
					const el = document.createElement('div');
					el.classList.add('card-in-form');

					el.innerHTML += '';
					el.innerHTML = insertProduct[i].innerHTML;
					afterElement.insertAdjacentElement('beforeBegin', el);
				}
			});
		}
	});
	//end insert product image in send form
	//start smooth scroll
	document.querySelectorAll('a.scroll-to-js').forEach(link => {

		link.addEventListener('click', function(e) {
			e.preventDefault();

			let href = this.getAttribute('href').substring(1);

			const scrollTarget = document.getElementById(href);

			const topOffset = 0;

			const elementPosition = scrollTarget.getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;

			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			});
		});
	});
	//end smooth scroll

	//start scroll to top button
	const buttonScrollTop = document.querySelector('.scroll-top-btn').addEventListener('click', (event)=>{
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
	//end scroll to top button

	//start scroll down button
	const buttonScrollDown = document.querySelector('.show__scroll-btn').addEventListener('click', (event)=>{
		let height = window.screen.availHeight;
		console.log(height);
		window.scrollTo({
			top: height,
			behavior: 'smooth'
		});
	});
	//end scroll down button

});