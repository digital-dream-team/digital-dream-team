'use strict';
document.addEventListener('DOMContentLoaded', () => {

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

	//start filter
	const filtersParent = document.querySelector('.catalog__filters');
	if (filtersParent) {
		const filter1 = filtersParent.querySelector('#cheсk-box-1');
		const filter2 = filtersParent.querySelector('#cheсk-box-2');
		const filter3 = filtersParent.querySelector('#cheсk-box-3');
		const filter4 = filtersParent.querySelector('#cheсk-box-4');

		const allCheckBoxes = document.querySelectorAll('.cheсk-box__input');
		const allCards = document.querySelectorAll('.card__card--galary');

		const category1 = document.querySelectorAll('[data-strap]');
		const category2 = document.querySelectorAll('[data-bracelet]');
		const category3 = document.querySelectorAll('[data-bag]');
		const category4 = document.querySelectorAll('[data-other]');

		function hideCategory(filter, category) {

			if (filter.checked) {
				category.forEach(items => {
					items.classList.add('show-card');
				});
			}
			if (!filter.checked) {
				category.forEach(items => {
					items.classList.remove('show-card');
				});
			}

			function checkEmpty() {
				let checkCount = allCheckBoxes.length;
				let isFalseCount = 0;

				allCheckBoxes.forEach((items, i) => {
					let isFalse = !items.checked;

					if (isFalse) {
						isFalseCount++;
					}

					if (isFalseCount == checkCount) {

						allCards.forEach(cards => {
							cards.classList.add('show-card');
						});
					}
				});
			}
			checkEmpty();

			filter.addEventListener('click', (event) => {

				checkEmpty();

				hideCategory(filter1, category1);
				hideCategory(filter2, category2);
				hideCategory(filter3, category3);
				hideCategory(filter4, category4);

				createPagination();
			});

		createPagination();
		}

		hideCategory(filter1, category1);
		hideCategory(filter2, category2);
		hideCategory(filter3, category3);
		hideCategory(filter4, category4);

		//end filter

		//start product count
		const productCount1 = document.querySelector('#product-count-1');
		const productCount2 = document.querySelector('#product-count-2');
		const productCount3 = document.querySelector('#product-count-3');
		const productCount4 = document.querySelector('#product-count-4');

		function productCount(product, count) {
			product.innerText = '';
			count.forEach ((item, i) => {
				product.innerText = i + 1;
			});
		}

		productCount(productCount1, category1);
		productCount(productCount2, category2);
		productCount(productCount3, category3);
		productCount(productCount4, category4);
		//end product count

		//start pagination
	}

	//генерируется динамическая пагинация исходя из количества карточек товара
	function createPagination() {

		const paginationParent = document.querySelector('.paginations'),
		paginationList = paginationParent.querySelector('.paginations__list');

		// const showCardClass = document.querySelectorAll('.show-card');
		let showCardClass = Array.from(document.getElementsByClassName('show-card'));
		console.log();

		let notesOnPage = 12;

		let cardSum = showCardClass.length / notesOnPage;
		paginationList.innerHTML = '';
		for (let i = 1; i <= Math.ceil(cardSum); i++)  {
			paginationList.innerHTML += `
			<li class="paginations__item">${i}</li>`;
		}
	
	//важно! Получаем элементы пагинации после динамического формирования.
	// const paginationItem = document.querySelectorAll('.paginations__item');
	// const paginationButtonPrev = document.querySelector('.paginations__prev');
	// const paginationButtonNext = document.querySelector('.paginations__next');
	// const cardsParent = document.querySelector('.catalog__row');

	// let curentNumber;

	// function hideActivePage() {
	// 	paginationItem.forEach(item => {
	// 		// showCardClass.classList.remove('show-card');
	// 		item.classList.remove('active');
	// 	});
	// }

	// function showActivePage (i = 0){
	// 	showCardClass[i].classList.add('show-card');
	// 	paginationItem[i].classList.add('active');
	// 	//получаем чистый номер элемента пагинации
	// 	let pageNum = +paginationItem[i].innerHTML;
	// 	//определяем с какой цифры будет начинаться метод slice
	// 	let startNum = (pageNum - 1) * notesOnPage;
	// 	let endNum = startNum + notesOnPage;
	// 	showCardClass.slice(startNum, endNum);
	// 	//запускаем функцию формирования страницы с карточками товаров
	// 	// createCardContent(cardsParent, showCardClass.slice(startNum, endNum));
	// //переключение страницы и пагинации при нажатии на стрелочки пагинации
	// 	function pushNextBtn() {
	// 		paginationButtonNext.addEventListener('click', ()=> {
	// 			hideActivePage();
	// 			if (i === paginationItem.length - 1) {
	// 				showActivePage(i);
	// 			} else {
	// 				showActivePage(i + 1);
	// 			}
	// 		});
	// 	}
	// 	function pushPrevBtn() {
	// 		paginationButtonPrev.addEventListener('click', ()=> {
	// 			hideActivePage();
	// 			if (i <= 0) {
	// 				showActivePage(i);
	// 			} else if (i > 0) {
	// 				showActivePage(i - 1);
	// 			}
	// 		});
	// 	}
	// 	pushNextBtn();
	// 	pushPrevBtn();
	// }
	// hideActivePage();
	// showActivePage();
	// //переключение стараницы с карточками товара при нажатии на цифры пагинации
	// paginationParent.addEventListener('click', (event) => {
	// 	const target = event.target;
		
	// 	if (target && target.classList.contains('paginations__item')) {
	// 		paginationItem.forEach((item, i) => {
			
	// 			if (target == item) {
	// 				hideActivePage();
	// 				showActivePage(i);
					
	// 			}
	// 		});
	// 	}
	// });

	}
	// createPagination();
	//end pagination

	//start scroll to top button
	const buttonScrollTop = document.querySelector('.scroll-top-btn').addEventListener('click', (event)=>{
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
	//end scroll to top button


});