import {createStore, combineReducers} from 'redux';
import dataReducer from '../reducers/dataReducer';
const rootReducer = combineReducers({objects: dataReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
