import { RECIEVE_HELLO_WORLD } from "../actions";

export default (state = "", { type, text }) => {
  switch (type) {
    case RECIEVE_HELLO_WORLD:
      return text;
    default:
      return state;
  }
};
