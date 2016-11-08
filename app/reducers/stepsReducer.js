import * as types from '../actions/actionTypes';

const initialState = {
  steps: []
};

const stepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_STEPS_SUCCESS: {
      return Object.assign({}, state, { steps: action.steps });
    }
    case types.UPDATE_STEPS_DISPLAY_NAME: {
      return Object.assign({}, state,  {
       steps:
        state.steps.slice(0,action.step.id)
        .concat(Object.assign({}, state.steps[action.step.id], { displayName: action.step.displayName }))
        .concat(state.steps.slice(action.step.id + 1))
      });
    }
    case types.UPDATE_STEPS_DESCRIPTION: {
      return Object.assign({}, state,  {
       steps:
        state.steps.slice(0,action.step.id)
        .concat(Object.assign({}, state.steps[action.step.id], { description: action.step.description }))
        .concat(state.steps.slice(action.step.id + 1))
      });
    }
    default:
      return state;
  }
};

export default stepsReducer;
