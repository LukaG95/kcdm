import { useEffect } from 'react';
import styles from './Menu.module.scss';
import SearchIcon from '../assets/images/search-icon-white.png';

const SearchMenu = ({ isSearchMenuOpen, closeMenu }) => {

  return (
      <div className={`${styles.menu} ${isSearchMenuOpen ? styles.open : ''}`}>
        <div className={styles.content}>
          <div className={styles['close-button-wrapper']}>
            <button className={styles.closeButton} onClick={closeMenu}>
              ✕
            </button>
          </div>

          <div className={styles.searchContainer}>
            <input type="text" placeholder="Iskanje" />
            <img onClick={closeMenu} src={SearchIcon} alt="Search" />
          </div>
  
          <div className={styles['line-with-arrow']}></div>
        </div>
      </div>
    );
};

export default SearchMenu;