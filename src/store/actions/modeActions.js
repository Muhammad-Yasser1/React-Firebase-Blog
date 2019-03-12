import { EDIT_MODE, READ_MODE } from "./types";

export const activateEditMode = () => dispatch => {
  dispatch({ type: EDIT_MODE });
};
export const deactivateEditMode = () => dispatch => {
  dispatch({ type: READ_MODE });
};
