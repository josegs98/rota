import {createStore} from 'redux';
import rootReducer from '../reducers/AddWorkerReducer';

export default function configureStore(initialState) {
  return createStore(rootReducer, []);
}