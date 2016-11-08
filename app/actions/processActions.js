import * as types from './actionTypes';

export function getProcessSuccess(process) {
  return {
    type: types.GET_PROCESS_SUCCESS,
    process
  };
}

export function getProcessFailed(err) {
  return {
    type: types.GET_PROCESS_FAILED,
    err
  };
}

export function updateProcessDisplayName(processDisplayName) {
  return {
    type: types.UPDATE_PROCESS_DISPLAY_NAME,
    processDisplayName
  };
}

export function updateDescription(description) {
  return {
    type: types.UPDATE_PROCESS_DESCRIPTION,
    description
  };
}
