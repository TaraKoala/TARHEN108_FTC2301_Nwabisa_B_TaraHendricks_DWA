/**
 * Default state of the counter.
 *
 * @typedef {Object} CounterDefaultState
 * @property {number} count - The count value of the counter.
 */

/**
 * Action types for the counter actions.
 *
 * @typedef {Object} CounterActionTypes
 * @property {string} SUBTRACT - Action type for subtracting from the counter.
 * @property {string} ADDITION - Action type for adding to the counter.
 * @property {string} RESET - Action type for resetting the counter.
 */

/**
 * The default state object for the counter.
 *
 * @type {CounterDefaultState}
 */
const defaultState = {
    count: 0,
  };
  
  /**
   * Counter Reducer
   *
   * A pure function that handles the state updates based on the dispatched actions.
   *
   * @param {CounterDefaultState} state - The current state of the counter.
   * @param {Object} action - The dispatched action.
   * @returns {CounterDefaultState} - The updated state of the counter.
   */
  const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ActionTypes.SUBTRACT:
        return {
          ...state,
          count: state.count - 1,
        };
      case ActionTypes.ADDITION:
        return {
          ...state,
          count: state.count + 1,
        };
      case ActionTypes.RESET:
        return {
          ...state,
          count: 0,
        };
      default:
        return state;
    }
  };
  
  // Action types for the counter actions
  const ActionTypes = {
    SUBTRACT: 'SUBTRACT',
    ADDITION: 'ADDITION',
    RESET: 'RESET',
  };
  
  // Retrieve references to DOM elements using data-key attributes
  const htmlSelector = {
    digit: document.querySelector('[data-key="number"]'),
    subtract: document.querySelector('[data-key="subtract"]'),
    add: document.querySelector('[data-key="add"]'),
    resetButton: document.querySelector('[data-key="reset"]'),
  };
  
  // Create the Redux store with the counter reducer
  const store = Redux.createStore(counterReducer);
  
  /**
   * Update the DOM based on the state of the counter.
   */
  const updateDOM = () => {
    const state = store.getState();
    htmlSelector.digit.value = state.count.toString();
  };
  
  // Subscribe to store changes and update the DOM accordingly
  store.subscribe(updateDOM);
  
  // Dispatch actions based on button clicks
  htmlSelector.subtract.addEventListener('click', () => {
    store.dispatch({ type: ActionTypes.SUBTRACT });
  });
  
  htmlSelector.add.addEventListener('click', () => {
    store.dispatch({ type: ActionTypes.ADDITION });
  });
  
  htmlSelector.resetButton.addEventListener('click', () => {
    store.dispatch({ type: ActionTypes.RESET });
  });
  
  // Output the initial state and subscribe to store changes
  store.subscribe(() => {
    console.log(store.getState());
  });
  
  // Dispatch some initial actions to showcase the functionality
  store.dispatch({ type: ActionTypes.SUBTRACT });
  store.dispatch({ type: ActionTypes.ADDITION });
  store.dispatch({ type: ActionTypes.RESET });