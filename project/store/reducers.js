import { SET_LOCATION, SET_DOCTOR, SET_ONE } from "./actionTypes";

const initialState = {
  dataLocation: [],
  dataDoctor: [],
  dataOneDoctor: {},
};

function reducer(state = initialState, action) {
  if (action.type === SET_LOCATION) {
    return { ...state, dataLocation: action.payload };
  } else if (action.type === SET_DOCTOR) {
    return { ...state, dataDoctor: action.payload };
  } else if (action.type === SET_ONE) {
    return { ...state, dataOneDoctor: action.payload };
  }
  return state;
}

export default reducer;
