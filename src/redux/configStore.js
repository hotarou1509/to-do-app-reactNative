import { createStore, combineReducers } from 'redux';
import todoAppReducer from './reducers/todoAppReducer';

const rootReducer = combineReducers({
	todoAppReducer,
});

const store = createStore(rootReducer);

export default store;
