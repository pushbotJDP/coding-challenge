import * as types from './actionTypes';

export function getStepsSuccess(steps) {
  return {
    type: types.GET_STEPS_SUCCESS,
    steps
  };
}

export function getStepsFailed(err) {
  return {
    type: types.GET_STEPS_FAILED,
    err
  };
}

export function updateStepsDisplayName(stepsDisplayname, stepId) {
  return {
    type: types.UPDATE_STEPS_DISPLAY_NAME,
    step: {
      displayName: stepsDisplayname,
      id: stepId
    }
  };
}

export function updateDescription(description, stepId) {
  return {
    type: types.UPDATE_STEPS_DESCRIPTION,
    step: {
      description: description,
      id: stepId
    }
  };
}
