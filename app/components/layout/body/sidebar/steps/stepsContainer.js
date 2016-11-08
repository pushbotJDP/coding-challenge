import React from 'react';
import { connect } from 'react-redux';
import Step from './step';
import * as stepsApi from '../../../../../api/stepsApi';
import store from '../../../../../store';

const StepsContainer = React.createClass({
  componentDidMount: function() {
    stepsApi.getSteps();
  },
  render: function () {
    return (
      <ul>
        {this.props.steps.map(function(step, index){
          return <Step key={index} {...step} />;
        })}
      </ul>
    )
  }
});

const mapStateToProps = function(store) {
  return {
    steps: store.stepsState.steps
  };
};

export default connect(mapStateToProps)(StepsContainer);
