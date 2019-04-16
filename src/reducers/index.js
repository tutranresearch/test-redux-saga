import { combineReducers } from 'redux';
import { signinReducers } from './signin_reducer';

// We combine the reducers here so that they
// can be left split apart above
const reducer = combineReducers({
  signinReducers
});

export default reducer;
