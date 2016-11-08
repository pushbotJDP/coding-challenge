import axios from 'axios';
import store from '../store';
import config from '../config';
import * as usersActions from '../actions/usersActions';

export function getUsers() {
  return axios.get(config.usersUrl)
    .then((response) => {
      store.dispatch(usersActions.getUsersSuccess(response.data));
      return response;
    })
    .catch((error) => {
      store.dispatch(usersActions.getUsersFailed('Error getting data in usersApi.js: ' + error));
    });
}
