import React from 'react';
import styles from './stepDetail.css';
import cx from 'classnames';

const StepDetail = React.createClass({
  getInitialState: function() {
    return {
      showDisplayNameInput: false,
      displayName: '',
      showDescriptionInput: false,
      description: ''
    };
  },
  showDisplayNameInput: function () {
    this.setState({ showDisplayNameInput: true, displayName: this.props.steps.displayName });
  },
  hideDisplayNameInput: function (){
    this.setState({ showDisplayNameInput: false });
  },
  updateDisplayName: function (e) {
    this.setState({
      displayName: e.target.value
    })
  },
  saveDisplayName: function () {
    this.props.updateDisplayName(this.state.displayName, this.props.stepId - 1);
    this.hideDisplayNameInput();
  },
  showDescriptionInput: function() {
    this.setState({ showDescriptionInput: true, description: this.props.steps.description });
  },
  hideDescriptionInput: function (){
    this.setState({ showDescriptionInput: false });
  },
  updateDescription: function (e) {
    this.setState({
      description: e.target.value
    })
  },
  saveDescription: function () {
    this.props.updateDescription(this.state.description, this.props.stepId - 1);
    this.hideDescriptionInput();
  },
  render: function() {
    return (
      <article className="message">
        <div className="message-header">
          { this.state.showDisplayNameInput ? <input className="input" type="text" value={this.state.displayName} onChange={this.updateDisplayName}/> : <p className={styles.messageHeader}>{this.props.steps.displayName}</p> }
          { this.state.showDisplayNameInput ? <a className="button is-primary is-small" href="javascript:void(0)" onClick={this.saveDisplayName}>Save</a> : <a href="javascript:void(0)" onClick={this.showDisplayNameInput}><i className="fa fa-pencil" aria-hidden="true"></i></a> }
        </div>
        <div className={cx('message-body', styles.messageBody)}>
          { this.state.showDescriptionInput ? <textarea className="textarea" value={this.state.description} onChange={this.updateDescription}></textarea> : <p>{this.props.steps.description}</p> }
          { this.state.showDescriptionInput ? <a className="button is-primary is-small" href="javascript:void(0)" onClick={this.saveDescription}>Save</a> : <a href="javascript:void(0)" onClick={this.showDescriptionInput}><i className="fa fa-pencil" aria-hidden="true"></i></a> }
          <hr/>
          <p>Dependencies</p>
          {
            this.props.steps.requiredPreviousSteps.length > 0
            ? this.props.steps.requiredPreviousSteps.map((step, index) => {
              return <p key={index}>{step}</p>
            }) : ''
          }
          <hr/>
          <p>Conditions</p>
          {
            this.props.steps.conditions.length > 0
            ? this.props.steps.conditions.map((condition, index) => {
              return <p key={index}>{condition}</p>
            })
            : ''
          }
          <hr/>
          <p>Fields</p>
          {
            this.props.steps.fields.length > 0
            ? this.props.steps.fields.map((field, index) => {
              return <div key={index}><p>{field.displayName}</p><p>{field.type}</p></div>
            }) : ''
          }
          <hr/>
          <p>Users</p>
          {
            this.props.users.length > 0
            ? this.props.users.map((user, index) => {
              return <div key={index}><p>{user.username}</p></div>
            }) : ''
          }
        </div>
      </article>
    )
  }
});

export default StepDetail;
