'use strict';
document.addEventListener('DOMContentLoaded', () => {

		//start slider swiper for galary//
	function galarySliders() {
		//находим все слайды в основном слайдере и копируем их в слайдер открывшегося light-box
		const worksSliderParent = document.querySelector('.product__light-box');

		if (worksSliderParent) {
			const worksSliderItem = worksSliderParent.querySelectorAll('.product__item');

			const getItemParent = document.querySelector('.popup-slider__wrapper');

			//копируем все слайды из текущего слайдера и передаем их в всплывающий слайдер
			function galaryLightBox(parent, slide, slider){
				const target = event.target;
				
				if (target && target.classList.contains('product__item')) {
					
					parent.innerHTML = '';
					slide.forEach((item, i) => {
						parent.innerHTML += `<div class="popup-slider__item">${item.innerHTML}</div>`;
					});
					//получаем индекс кликнутого слайда
					// galaryLightBoxSliderInit(slider.activeIndex);
					galaryLightBoxSliderInit(slider[0].activeIndex);
				}
			}
			//инициализация первого слайдера в блоке "Галерея" на главной стр.
				let productThumbs = new Swiper('.product__thumbs', {
					containerModifierClass: 'product__container', 
					wrapperClass: 'product__wrapper',
					slideClass: 'product__item',
					loop: false,
					slidesPerView: 'auto',
					spaceBetween: 20,
					freeMode: false,
					centeredSlides: false,
					simulateTouch: true,
				});

				let mainSwiper = new Swiper ('.product__container', {
					containerModifierClass: 'product__container', 
					wrapperClass: 'product__wrapper',
					slideClass: 'product__item',
					// direction: 'vertical',
					loop: false,
					watchOverflow: false,
					observeParents: false,
					observeSlideChildren: false,
					observer: false,
					spaceBetween: 12,
					autoHeight: false,
					slidesPerView: 1,
					centerSlides: false,
					simulateTouch: true,
					navigation: {
						nextEl: '.product__button-next',
						prevEl: '.product__button-prev',
					},
					thumbs: {
						swiper: productThumbs,
					},
					on: {
						//по клику на слайд открывается light-box
						click: function(){
							galaryLightBox(getItemParent, worksSliderItem, mainSwiper);
						}
					}
				});

			//инициализация слайдера в открывшемся light-box-е при клике на слайд
			function galaryLightBoxSliderInit(i) {
				let popupSwiper = new Swiper('.popup-slider__container', {
					containerModifierClass: 'popup-slider__container', 
					wrapperClass: 'popup-slider__wrapper',
					slideClass: 'popup-slider__item',
					loop: false,
					observeParents: true,
					observeSlideChildren: true,
					observer: true,
					slidesPerView: 1,
					spaceBetween: 7,
					freeMode: false,
					centeredSlides: false,
					simulateTouch: true,
					slideToClickedSlide: false,
					navigation: {
						nextEl: '.product__button-next',
						prevEl: '.product__button-prev',
					},
				});
				//открытие слайдера с изображения на которое был клик
				popupSwiper.slideTo(i);
			}
			//end popup slider//
		}
		galarySliders();
		}
	//end slider swiper for galary//



	//start form-2 in section 'send'//
	const popupOrder = document.querySelector('#popup-order');

	const formBoxPopup = document.querySelector('.send--popup');
	if (formBoxPopup) {
		const formContainer = formBoxPopup.querySelector('.send__container');
		const formBody = formBoxPopup.querySelector('.send__body');
	}

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

	// start insert product image in send form
	const insertImage = document.querySelector('.image-in-form-js');
	const insertText = document.querySelector('.text-in-form-js');
	const insertBtn = document.querySelectorAll('.card__button-link');
	const afterElement = document.querySelector('#light');

	const cardRow = document.querySelector('.product__order-link');

	if (cardRow) {
		cardRow.addEventListener('click', (event)=> {
			const target = event.target;
			event.preventDefault();

			const el = document.createElement('div');
				el.classList.add('card-in-product-form');

				el.innerHTML += '';
				el.innerHTML = `${insertImage.innerHTML}${insertText.innerText}`;
				afterElement.insertAdjacentElement('beforeBegin', el);
		});
	}
	//end insert product image in send form


});