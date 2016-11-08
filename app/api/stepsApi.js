import axios from 'axios';
import store from '../store';
import config from '../config';
import * as stepsActions from '../actions/stepsActions';

export function getSteps() {
  return axios.get(config.stepsUrl)
    .then((response) => {
      store.dispatch(stepsActions.getStepsSuccess(response.data));
      return response;
    })
    .catch((error) => {
      store.dispatch(stepsActions.getStepsFailed('Error getting data in stepsApi.js: ' + error));
    });
}

export function updateDisplayName(steps, stepId) {
  store.dispatch(stepsActions.updateStepsDisplayName(steps, stepId));
}

export function updateDescription(steps, stepId) {
  store.dispatch(stepsActions.updateDescription(steps, stepId));
}
