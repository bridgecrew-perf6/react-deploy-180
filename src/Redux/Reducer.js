import { ActionType } from "./ActionType/ActionType";
const globalState = {
  totalOrder: 0,
};

// Reducer
export const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case ActionType.PLUS:
      return {
        ...state,
        totalOrder: state.totalOrder + 1,
      };
    case ActionType.MINUS:
      if (state.totalOrder > 0) {
        return {
          ...state,
          totalOrder: state.totalOrder - 1,
        };
      }
    default:
      return state;
  }
};
