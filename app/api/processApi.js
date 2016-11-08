import axios from 'axios';
import store from '../store';
import config from '../config';
import * as processActions from '../actions/processActions';

export function getProcess() {
  return axios.get(config.processUrl)
    .then((response) => {
      store.dispatch(processActions.getProcessSuccess(response.data));
      return response;
    })
    .catch((error) => {
      store.dispatch(processActions.getProcessFailed('Error getting data in processApi.js: ' + error));
    });
}

export function updateDisplayName(process) {
  store.dispatch(processActions.updateProcessDisplayName(process));
}

export function updateDescription(process) {
  store.dispatch(processActions.updateDescription(process));
}
