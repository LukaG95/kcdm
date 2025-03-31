import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FrontArrow.module.scss';

function FrontArrow({ route, name, isAbsolute }) {
  return (
    <Link 
      to={route}
      className={`${styles.frontLink} ${isAbsolute ? styles.absolute : ''}`}
    >
      {name && <span className={styles.text}>{name}</span>}
      <div className={styles.arrow}>
        <div className={styles.arrowLine}></div>
        <div className={styles.arrowHead}></div>
      </div>
    </Link>
  );
}

export default FrontArrow;

