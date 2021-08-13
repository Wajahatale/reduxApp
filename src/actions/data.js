import {DATA_CHANGE} from '../constants';
export function changeData(object) {
  return {
    type: DATA_CHANGE,
    payload: object,
  };
}
