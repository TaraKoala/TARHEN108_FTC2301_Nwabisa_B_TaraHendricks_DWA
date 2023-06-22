/**
 * HTML Selector Object
 *
 * An object with references to various HTML elements identified by their data-key attribute.
 */
const htmlSelector = {
    digit: document.querySelector('[data-key="number"]'),
    subtract: document.querySelector('[data-key="subtract"]'),
    add: document.querySelector('[data-key="add"]'),
    resetButton: document.querySelector('[data-key="reset"]'),
  };
  
  
  
  /**
   * Add Button eventListener
   *
   * When this button is clicked, value on the screen must be increased by one
   */
  htmlSelector.add.addEventListener('click', () => {
    const newValue = parseInt(htmlSelector.digit.value, 10) + 1;
    htmlSelector.digit.value = newValue;
  });
  
  
  /**
   * Subtract Button eventListener
   *
   * subtracts on the number on the on the screen by 1
   */
  htmlSelector.subtract.addEventListener('click', () => {
    const newValue = parseInt(htmlSelector.digit.value, 10) -1;
    htmlSelector.digit.value = newValue;
  });
  
  /**
   * Reset Button eventListener
   *
   * Resets the value of the digit input to 0 when the reset button is clicked.
   */
  htmlSelector.resetButton.addEventListener('click', () => {
    htmlSelector.digit.value = 0;
  });