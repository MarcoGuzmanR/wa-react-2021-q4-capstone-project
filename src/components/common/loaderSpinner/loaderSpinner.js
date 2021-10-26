import React from 'react';
import styles from './loaderSpinner.module.css';
import spinner from '../../../assets/images/spinner.gif'
import propTypes from 'prop-types';

function LoaderSpinner({title}) {
  return (
    <div className={styles.container}>
      <h3>Loading {title}...</h3>
      <img src={spinner} alt="Loading Products..." height="150" width="150" />
    </div>
  );
}

LoaderSpinner.propTypes = {
  title: propTypes.string
};

export default LoaderSpinner;