import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

export const reducers = combineReducers({
	form: reduxForm
});
