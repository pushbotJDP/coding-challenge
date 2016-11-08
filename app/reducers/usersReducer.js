import * as types from '../actions/actionTypes';

const initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_SUCCESS: {
      return Object.assign({}, state, { users: action.users });
    }
    default:
      return state;
  }
};

export default usersReducer;
