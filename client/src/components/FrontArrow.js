import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './FrontArrow.module.scss'

function FrontArrow({route, name}) {
  
  return (
    <Link 
      to={route}
      className={styles["front-link"]}
    >
      <span className={styles.text}>{name}</span>
      <div className={styles.arrow}>
        <div className={styles.arrowLine}></div>
        <div className={styles.arrowHead}></div>
      </div>
    </Link>
  );
}

export default FrontArrow;