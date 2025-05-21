import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BackArrow.module.scss'

function BackArrow({ route, name, mobile, isHomePage, on_news }) {
  return (
    <Link 
      to={route}
      className={`${styles.backLink} ${!isHomePage ? styles.visible : ''} ${mobile ? styles.mobile : ''} ${on_news ? styles.onNewsPage : ''}`}
      style={{ display: isHomePage ? 'none' : 'flex' }}
    >
      <div className={styles.arrow}>
        <div className={styles.arrowHead}></div>
        <div className={styles.arrowLine}></div>
      </div>
      <span className={styles.text}>{name}</span>
    </Link>
  );
}

export default BackArrow;