import React from 'react';
import styles from './categoryFilters.module.css';
import propTypes from 'prop-types';

function CategoryFilters(props) {
  const {
      categoryFilters,
      setCategoryFilters,
      areFiltersCleared,
      setAreFiltersCleared,
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

  function handleClearFilters() {
    setAreFiltersCleared(true);
    setCategoryFilters(prevFilters => {
      return prevFilters.map((prevFilter) => {
        return {
          ...prevFilter, activeFilter: false
        }
      });
    });
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Filter by category</h3>
      {!areFiltersCleared &&
        <button className="btn-clear" type="button" onClick={handleClearFilters}>
          Clear Filters
        </button>}
      <div>
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
    </div>
  );
}

CategoryFilters.propTypes = {
  categoryFilters: propTypes.array.isRequired,
  setCategoryFilters: propTypes.func.isRequired,
  areFiltersCleared: propTypes.bool.isRequired,
  setAreFiltersCleared: propTypes.func.isRequired,
  isLoadingProducts: propTypes.bool
};

export default CategoryFilters;