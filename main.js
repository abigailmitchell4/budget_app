//Budget Controller
const budgetController = (() => {

})();


//UI Controller
const uiController = (() => {

  let DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
  };

  return {
    getinput: () => {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      };
    },
    getDOMstrings: () => {
      return DOMstrings;
    }
  };

})();


//Global App Controller
const controller = ((bugetCtrl, uiCtrl) => {

  let DOM = uiCtrl.getDOMstrings();

  const ctrlAddItem = () => {

    let input = uiCtrl.getinput();
    console.log(input);
  }

  document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

  })(budgetController, uiController);

