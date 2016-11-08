import React from 'react';
import { connect } from 'react-redux';
import StepDetail from './stepDetail';
import * as stepsApi from '../../../../../api/stepsApi';
import * as usersApi from '../../../../../api/usersApi';
import store from '../../../../../store';

const StepsDetailContainer = React.createClass({
  componentDidMount: function() {
    stepsApi.getSteps();
    usersApi.getUsers();
  },
  updateDisplayName: function(displayName, stepId) {
    stepsApi.updateDisplayName(displayName, stepId);
  },
  updateDescription: function(description, stepId) {
    stepsApi.updateDescription(description, stepId);
  },
  render: function () {
    let stepId = this.props.params.stepId - 1;
    return (
      <StepDetail
        updateDisplayName={this.updateDisplayName}
        updateDescription={this.updateDescription}
        steps={this.props.steps[stepId]}
        users={this.props.users}
        stepId={this.props.params.stepId}
      />
    )
  }
});

const mapStateToProps = function(store) {
  return {
    steps: store.stepsState.steps,
    users: store.usersState.users
  };
};

export default connect(mapStateToProps)(StepsDetailContainer);
