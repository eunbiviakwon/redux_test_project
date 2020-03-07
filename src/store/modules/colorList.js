import { createAction, handleActions } from "redux-actioins";

const CHANGE_INPUT = "colorList/CHANGE_INPUT";
const INSERT = "colorList/INSERT";
const UPDATE = "colorList/UPDATE";
const REMOVE = "colorList/REMOVE";

let id = 1;

export const changeInput = input => ({ type: CHANGE_INPUT, input: input });
export const insert = createAction(INSERT, color => ({ color, id: id++ }));
export const update = createAction(UPDATE, id => id);
export const remove = createAction(REMOVE, id => id);

const initialState = {
  input: "",
  list: []
};
export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({}),
    [INSERT]: (state, action) => ({})
  },
  initialState
);
