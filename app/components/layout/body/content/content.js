import React from 'react';
import DetailsContainer from './details/detailsContainer';

const Content = (props) => {
  return (
    <div>
      <DetailsContainer/>
      {props.children}
    </div>
  )
};

export default Content;
