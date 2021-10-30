import React from 'react';
import styles from './categoryFilters.module.css';
import propTypes from 'prop-types';

function CategoryFilters(props) {
  const {
      categoryFilters,
      setCategoryFilters,
      isLoadingCategories
  } = props;

  function handleFilterChange(filter) {
    setCategoryFilters(prevFilters => {
      return prevFilters.map((prevFilter) => {
        return prevFilter.id === filter.id ?
          { ...prevFilter, activeFilter: !prevFilter.activeFilter } : prevFilter;
      });
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
            `btn-action ${styles['filter--active']}` :
            `btn-action ${styles['filter--inactive']}` }
          disabled={isLoadingCategories}
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
  isLoadingProducts: propTypes.bool
};

export default CategoryFilters;