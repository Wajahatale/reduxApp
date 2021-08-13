import {DATA_CHANGE} from '../constants';
const initialState = {
  objects: [],
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_CHANGE:
      return {
        ...state,
        objects: action.payload,
      };
    default:
      return state;
  }
};
export default dataReducer;
