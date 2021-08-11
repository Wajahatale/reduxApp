import {DATA_CHANGE} from '../constants';
export function changeData(value) {
  return {
    type: DATA_CHANGE,
    payload: value,
  };
}
