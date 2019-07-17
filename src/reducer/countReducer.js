import { FUNC_INCREMENT, FUNC_DECREMENT } from "../types";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FUNC_INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case FUNC_DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    default:
      return state;
  }
};
export default reducer;
