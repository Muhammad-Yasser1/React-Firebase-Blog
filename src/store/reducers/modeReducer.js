import { READ_MODE, EDIT_MODE } from "../actions/types";

const initialState = {
  editMode: false
};
export default (state = initialState, { type }) => {
  switch (type) {
    case EDIT_MODE:
      return { ...state, editMode: true };
    case READ_MODE:
      return { ...state, editMode: false };
    default:
      return state;
  }
};
