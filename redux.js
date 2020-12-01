const redux = require("redux");
const createStore = redux.createStore;

const initializeState = {
  value: 0,
  age: 17,
};

// Reducer
const rootReducer = (state = initializeState, action) => {
  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 1,
      };

    case "ADD_VALUE":
      return {
        ...state,
        value: state.value + action.newValue,
      };

    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
  console.log(`Change value: `, store.getState());
});

// Dispatching Action
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "ADD_VALUE", newValue: 12 });
