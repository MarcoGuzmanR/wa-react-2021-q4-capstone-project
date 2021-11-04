import React from 'react';
import styles from './loaderSpinner.module.css';
import spinner from '../../../assets/images/spinner.gif'
import propTypes from 'prop-types';

function LoaderSpinner({title = ''}) {
  return (
    <div className={styles.container}>
      <h3>Loading {title}...</h3>
      <img src={spinner} alt={`Loading ${title}...`} height="50" width="50" />
    </div>
  );
}

LoaderSpinner.propTypes = {
  title: propTypes.string
};

export default LoaderSpinner;