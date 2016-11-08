import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './components/layout/body/home';
import Content from './components/layout/body/content/content';
import Team from './components/layout/body/team';
import SideBar from './components/layout/body/sidebar/sidebar';
import stepsContainer from './components/layout/body/sidebar/steps/stepsContainer';
import StepsDetailContainer from './components/layout/body/sidebar/steps/StepsDetailContainer';
import Detail from './components/layout/body/content/details/detail';

export default (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute components={{sidebar: SideBar, content: Content}}/>
        <Route path="processes" components={{sidebar: SideBar, content: Content}}/>
        <Route path="process" components={{sidebar: stepsContainer, content: Content}}/>
        <Route path="step/:stepId" components={{sidebar: stepsContainer, content: Content, content2: StepsDetailContainer}}/>
        <Route path="team" components={{sidebar: SideBar, content: Team}}/>
      </Route>
    </Router>
  </Provider>
);
