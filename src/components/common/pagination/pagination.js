import React from 'react';
import styles from './pagination.module.scss';

function Pagination({ paginationControls, setProducts }) {
  const [items]
    = React.useState(Array.from({length: paginationControls.totalPages}, (_, i) => i + 1));

  function handlePageChange(event, item) {
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <a href="/">&laquo;</a>
        {items.map((item) => (
          <a
            key={item}
            href="/"
            className={paginationControls.page === item ? `${styles['active']}` : ''}
            onClick={(event) => handlePageChange(event, item)}
            >
            {item}
          </a>
        ))}
        <a href="/">&raquo;</a>
      </div>
    </div>
  );
}

Pagination.propTypes = {};

export default Pagination;