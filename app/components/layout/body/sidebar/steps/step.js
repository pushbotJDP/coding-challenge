import React from 'react';
import { Link } from 'react-router';
import styles from './step.css';

const Step = (props) => {
  return (
    <Link to={{ pathname: '/step/' + props.stepNumber }} className={styles.step}>
      <li>
          {props.stepNumber}. {props.displayName}
          <br/>
          {
            props.requiredPreviousSteps.length > 0
            ? props.requiredPreviousSteps.map((step, index) => {
              return <small className={styles.smallText} key={index}>Depends on: {step}</small>
            }) : ''
          }
      </li>
    </Link>
  )
};

export default Step;
