import React from 'react';
import { Link } from 'react-router';
import styles from './detail.css';
import cx from 'classnames';

const Detail = React.createClass({
  getInitialState: function() {
    return {
      showDisplayNameInput: false,
      displayName: '',
      showDescriptionInput: false,
      description: ''
    };
  },
  showDisplayNameInput: function () {
    this.setState({ showDisplayNameInput: true, displayName: this.props.displayName });
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
    this.props.updateDisplayName(this.state.displayName);
    this.hideDisplayNameInput();
  },
  showDescriptionInput: function() {
    this.setState({ showDescriptionInput: true, description: this.props.description });
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
    this.props.updateDescription(this.state.description);
    this.hideDescriptionInput();
  },
  render: function() {
    return (
      <article className="message">
        <div className="message-header">
          { this.state.showDisplayNameInput ? <input className="input" type="text" value={this.state.displayName} onChange={this.updateDisplayName}/> : <p className={styles.messageHeader}>{this.props.displayName}</p> }
          { this.state.showDisplayNameInput ? <a className="button is-primary is-small" href="javascript:void(0)" onClick={this.saveDisplayName}>Save</a> : <a href="javascript:void(0)" onClick={this.showDisplayNameInput}><i className="fa fa-pencil" aria-hidden="true"></i></a> }
        </div>
        <div className={cx('message-body', styles.messageBody)}>
          { this.state.showDescriptionInput ? <textarea className="textarea" value={this.state.description} onChange={this.updateDescription}></textarea> : <p>{this.props.description}</p> }
          { this.state.showDescriptionInput ? <a className="button is-primary is-small" href="javascript:void(0)" onClick={this.saveDescription}>Save</a> : <a href="javascript:void(0)" onClick={this.showDescriptionInput}><i className="fa fa-pencil" aria-hidden="true"></i></a> }
          <hr/>
          <p>Created By: {this.props.createdBy}</p>
          <hr/>
          <p>Category: {this.props.category}</p>
          <hr/>
          <p>Steps Count: {this.props.stepsCount}</p>
          <Link to="process" className="button is-primary">
            <span className="icon">
              <i className="fa fa-list-ul"></i>
            </span>
            <span>View Steps</span>
          </Link>
        </div>
      </article>
    )
  }
});

export default Detail;
