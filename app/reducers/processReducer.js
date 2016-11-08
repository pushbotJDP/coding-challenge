import * as types from '../actions/actionTypes';

const processReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_PROCESS_SUCCESS: {
      return { ...state, process: action.process };
    }
    case types.UPDATE_PROCESS_DISPLAY_NAME: {
      return { ...state, process: { ...state.process, displayName: action.processDisplayName } };
    }
    case types.UPDATE_PROCESS_DESCRIPTION: {
      return { ...state, process: { ...state.process, description: action.description } };
    }
    default:
      return state;
  }
};

export default processReducer;
