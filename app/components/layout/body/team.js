import React from 'react';

const Team = () => {
  return (
    <div>
      <div className="columns">
        <div className="column is-4">
          <img src={require('../../../images/avatars/pb_1.jpg')} />
        </div>
        <div className="column is-4">
          <img src={require('../../../images/avatars/pb_2.jpg')} />
        </div>
        <div className="column is-4">
          <img src={require('../../../images/avatars/pb_3.jpg')} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-4">
          <img src={require('../../../images/avatars/pb_3.jpg')} />
        </div>
        <div className="column is-4">
          <img src={require('../../../images/avatars/pb_1.jpg')} />
        </div>
        <div className="column is-4">
          <img src={require('../../../images/avatars/pb_2.jpg')} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-4">
          <img src={require('../../../images/avatars/pb_2.jpg')} />
        </div>
        <div className="column is-4">
          <img src={require('../../../images/avatars/pb_3.jpg')} />
        </div>
        <div className="column is-4">
          <img src={require('../../../images/avatars/pb_1.jpg')} />
        </div>
      </div>
    </div>
  )
};

export default Team;
