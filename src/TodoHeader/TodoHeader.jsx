import React from 'react';
import styles from './TodoHeader.module.css'
import { useDarkMode } from '../context/DarkModeContext';
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs';

export default function TodoHeader({filters, filter, onFilterChange}) {
  const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <header className={styles.header}>
       <button onClick={toggleDarkMode}>
      {
        darkMode ?  <BsSunFill /> :  <BsFillMoonFill/>
      }   
    </button>
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

