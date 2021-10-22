import React from 'react';
import styles from './categoryFilters.module.css';
import propTypes from 'prop-types';

function CategoryFilters(props) {
  const {
      categoryFilters,
      setCategoryFilters,
      setFilters
  } = props;

  function handleFilterChange(filter) {
    setCategoryFilters(prevFilters => {
      return prevFilters.map((prevFilter) => {
        return prevFilter.id === filter.id ?
          { ...prevFilter, activeFilter: !prevFilter.activeFilter } : prevFilter;
      });
    });

    setFilters(prevFilters => {
      const filterApplied = prevFilters.filter(prevFilter => prevFilter.id === filter.id);
      return filterApplied.length ?
        prevFilters.filter(prevFilter => prevFilter.id !== filter.id) : [...prevFilters, filter];
    });
  }

  return (
    <div className={styles.container}>
      <h3>Filter by category</h3>
      {categoryFilters.map((filter) => (
        <button
          key={filter.id}
          className={
            filter.activeFilter ?
            `${styles['btn-filter']} ${styles['filter--active']}` :
            `${styles['btn-filter']} ${styles['filter--inactive']}` }
          onClick={() => handleFilterChange(filter)}>
          {filter.name}
        </button>
      ))}
    </div>
  );
}

CategoryFilters.propTypes = {
  categoryFilters: propTypes.array.isRequired,
  setCategoryFilters: propTypes.func.isRequired,
  setFilters: propTypes.func.isRequired,
};

export default CategoryFilters;