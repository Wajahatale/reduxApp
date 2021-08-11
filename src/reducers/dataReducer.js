import {DATA_CHANGE} from '../constants';
const initialState = {
  data: [''],
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_CHANGE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default dataReducer;
