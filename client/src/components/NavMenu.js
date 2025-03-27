import { useEffect } from 'react';
import styles from './Menu.module.scss';
import SearchIcon from '../assets/images/search-icon-white.png';

const NavMenu = ({ isNavMenuOpen, setIsSearchMenuOpen, closeMenu }) => {

  return (
    <div className={`${styles.menu} ${isNavMenuOpen ? styles.open : ''}`}>
      <div className={styles.content}>
        <div className={styles['close-button-wrapper']}>
          <button className={styles.closeButton} onClick={closeMenu}>
            ✕
          </button>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">VSTOPNA STRAN</a></li>
            <li><a href="#">ZNANJE</a></li>
            <li><a href="#">AKTUALNO</a></li>
            <li><a href="#">O KCDM</a></li>
          </ul>
        </nav>
        <div href="#" className={styles['platform']}>PLATFORMA DNA</div>
        <div className={styles.spacer}></div>
        <div className={styles['lang-search-wrapper']}>
          <p>SI</p>
          <p>EN</p>
          <img onClick={()=> setIsSearchMenuOpen(true)} src={SearchIcon} alt="Search" />
        </div>

        <div className={styles['line-with-arrow']}>
          <div className={styles.arrow}></div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;