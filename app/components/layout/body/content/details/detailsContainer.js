import React from 'react';
import { connect } from 'react-redux';
import Detail from './detail';
import * as processApi from '../../../../../api/processApi';
import * as stepsApi from '../../../../../api/stepsApi';
import store from '../../../../../store';

const DetailsContainer = React.createClass({
  componentDidMount: function() {
    processApi.getProcess();
    stepsApi.getSteps();
  },
  updateDisplayName: function(displayName) {
    processApi.updateDisplayName(displayName);
  },
  updateDescription: function(description) {
    processApi.updateDescription(description);
  },
  render: function () {
    return (
      <Detail
        {...this.props.process}
        updateDisplayName={this.updateDisplayName}
        updateDescription={this.updateDescription}
        stepsCount={this.props.steps.length}
      />
    )
  }
});

const mapStateToProps = function(store) {
  return {
    process: store.processState.process,
    steps: store.stepsState.steps
  };
};

export default connect(mapStateToProps)(DetailsContainer);
