import {
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE } from '../constants';

let initState = {
  message: '',
  fetching: false
}

export function signinReducers (state = initState, action) {
  const { message, user_name } = action;

  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        ...{ message, user_name }
      }
    case SIGNIN_FAILURE:
      return {
        ...state,
        ...{ message, user_name: '' }
      }
    default:
      return state
  }
}