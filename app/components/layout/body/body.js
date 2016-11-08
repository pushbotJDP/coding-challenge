import React from 'react';
import { connect } from 'react-redux';
import * as processApi from '../../../../../api/processApi';
import store from '../../../../../store';
import SideBar from './sidebar/sidebar';
import Content from './content/content';

const Body = React.createClass({
  componentDidMount: function() {
    processApi.getProcess();
  },
  render: function () {
    return (
      <div className="columns">
        <SideBar {...this.props.steps}/>
        <Content {...this.props.process}/>
      </div>
    )
  }
});

const mapStateToProps = function(store) {
  return {
    process: store.processState.process,
    steps: store.stepsState.steps
  };
};

export default connect(mapStateToProps)(Body);
