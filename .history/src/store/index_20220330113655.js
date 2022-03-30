const { createStore } = require("redux");

const reducerFn = (state = { counter: 540 }, action) => {
  return state;
};

const store = createStore(reducerFn);
export default store;
