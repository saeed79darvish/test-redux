import { FUNC_DECREMENT, FUNC_INCREMENT } from "../types";

export const funcIncrement = () => {
  return {
    type: FUNC_INCREMENT
  };
};
export const funcDecrement = () => {
  return {
    type: FUNC_DECREMENT
  };
};
