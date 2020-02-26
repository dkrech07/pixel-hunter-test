(function () {
  'use strict';

  // block-creater - модуль создает DOM-элементы на основе полученных данных;

  const getElementFromTemplate = (textElement) => {
    const template = document.querySelector(`main`);
    const main = template.cloneNode();
    main.innerHTML = textElement;

    return main;
  };

  // insert-block - модуль добавляющий созданные (в create-block.js) DOM-элементы в разметку;

  const showScreen = (contentBlock) => {
    let body = document.querySelector(`body`);
    let main = document.querySelector(`main`);

    body.replaceChild(contentBlock, main);
  };

  const intro =
`<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  <footer class="footer">
    <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
    <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
    <div class="footer__social-links">
      <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
      <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
      <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
      <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
    </div>
  </footer>`  ;

  showScreen(getElementFromTemplate(intro));

  // const ARROW_LEFT_KEYCODE = 37;
  // const ARROW_RIGHT_KEYCODE = 39;
  // const MIX_SCREEN_NUMBER = 0;
  // const MAX_SCREEN_NUMBER = 5;
  //
  // const screensList = document.querySelectorAll(`template`);
  // let defaultScreenNumber = 0;
  //
  // const removeChild = function (element) {
  //   while (element.firstChild) {
  //     element.removeChild(element.firstChild);
  //   }
  // };
  //
  // const setArrows = () => {
  //   const arrows = document.querySelectorAll(`.arrows__btn`);
  //   arrows[0].classList.add(`prev`);
  //   arrows[1].classList.add(`next`);
  // };
  //
  // const createArrows = () => {
  //   const wrapper = document.querySelector(`body`);
  //   const arrows = document.createElement(`div`);
  //
  //   arrows.classList.add(`arrows__wrap`);
  //   arrows.innerHTML =
  //   `<style>
  //     .arrows__wrap {
  //       position: absolute;
  //       top: 95px;
  //       left: 50%;
  //       margin-left: -56px;
  //     }
  //     .arrows__btn {
  //       background: none;
  //       border: 2px solid black;
  //       padding: 5px 20px;
  //     }
  //   </style>
  //   <button class="arrows__btn"><-</button>
  //   <button class="arrows__btn">-></button>`;
  //
  //   wrapper.appendChild(arrows);
  //
  // };
  //
  // createArrows();
  // setArrows();
  //
  // const showScreen = (screenNumber) => {
  //   const main = document.querySelector(`#main`);
  //   const template = screensList[screenNumber].content;
  //   const element = template.cloneNode(true);
  //
  //   removeChild(main);
  //   main.appendChild(element);
  // };
  //
  // showScreen(defaultScreenNumber);
  //
  // const addClickHandle = () => {
  //   const nextClickHandler = () => {
  //     if (defaultScreenNumber < MAX_SCREEN_NUMBER) {
  //       defaultScreenNumber++;
  //       showScreen(defaultScreenNumber);
  //     }
  //   };
  //
  //   const prevClickHandler = () => {
  //     if (defaultScreenNumber > MIX_SCREEN_NUMBER) {
  //       defaultScreenNumber--;
  //       showScreen(defaultScreenNumber);
  //     }
  //   };
  //
  //   const nextButtonClickHandler = (evt) => {
  //     if (evt.keyCode === ARROW_RIGHT_KEYCODE) {
  //       nextClickHandler();
  //     }
  //   };
  //
  //   const prevButtonClickHandler = (evt) => {
  //     if (evt.keyCode === ARROW_LEFT_KEYCODE) {
  //       prevClickHandler();
  //     }
  //   };
  //
  //   const arrowNext = document.querySelector(`.arrows__btn.next`);
  //   const arrowPrev = document.querySelector(`.arrows__btn.prev`);
  //
  //   document.addEventListener(`keydown`, prevButtonClickHandler);
  //   document.addEventListener(`keydown`, nextButtonClickHandler);
  //   arrowNext.addEventListener(`click`, nextClickHandler);
  //   arrowPrev.addEventListener(`click`, prevClickHandler);
  // };
  //
  // addClickHandle();

}());

//# sourceMappingURL=main.js.map
