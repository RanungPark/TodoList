import React from 'react';
import styles from './TodoHeader.module.css'

export default function TodoHeader({filters, filter, onFilterChange}) {

  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {
          filters.map((value, index) => (
            <li key={index}>
              <button className={`${styles.filter} ${filter === value && styles.selected}`} onClick={()=> onFilterChange(value)}>{value}</button>
            </li>
          ))
        }
      </ul>
    </header>
  );
}

