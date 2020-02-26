// block-creater - модуль создает DOM-элементы на основе полученных данных;

const getElementFromTemplate = (textElement) => {
  const template = document.querySelector(`main`);
  const main = template.cloneNode();
  main.innerHTML = textElement;

  return main;
};

export {getElementFromTemplate};
