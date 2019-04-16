import { SIGNIN_REQUEST } from '../constants';

// Calls the API to get a token and
// dispatches actions along the way
export function signinUser(user_name, password) {
  const action = {
    type: SIGNIN_REQUEST,
    message: '',
    user_name,
    password  
  }
  return action;
}