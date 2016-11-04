import React from 'react';
import StepsContainer from './steps/stepsContainer';
import DetailsContainer from './details/detailsContainer';

const Body = () => {
  return (
    <div className="columns">
      <StepsContainer/>
      <DetailsContainer/>
    </div>
  )
};

export default Body;
