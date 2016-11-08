import * as types from './actionTypes';

export function getUsersSuccess(users) {
  return {
    type: types.GET_USERS_SUCCESS,
    users
  };
}

export function getUsersFailed(err) {
  return {
    type: types.GET_USERS_FAILED,
    err
  };
}
