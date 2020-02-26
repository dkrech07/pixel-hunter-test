// insert-block - модуль добавляющий созданные (в create-block.js) DOM-элементы в разметку;

const showScreen = (contentBlock) => {
  let body = document.querySelector(`body`);
  let main = document.querySelector(`main`);

  body.replaceChild(contentBlock, main);
};

export {showScreen};
