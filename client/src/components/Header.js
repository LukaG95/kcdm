import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import LogoBig from '../assets/images/logo-big.svg';
import LogoSmall from '../assets/images/logo-small.svg';
import SearchIcon from '../assets/images/search-icon-green.png';
import useWindowDimensions from '../misc/WindowDimensions.js';

function Header({setIsNavMenuOpen}){
  const [hoveredItem, setHoveredItem] = useState('');
  const [activeItem, setActiveItem] = useState('AKTUALNO');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { s_width, s_height } = useWindowDimensions();

  // This is for when the search bar will briefly appear on window width upsize
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const handleSearchToggle = () => {
    if (isSearchOpen) {
      // When closing, enable transitions for the fade-out
      setIsTransitionEnabled(true);
      setIsSearchOpen(false);
      
      // Disable transitions after fade-out completes (300ms)
      setTimeout(() => {
        setIsTransitionEnabled(false);
      }, 300);
    } else {
      // When opening, enable transitions for the fade-in
      setIsTransitionEnabled(true);
      setIsSearchOpen(true);
    }
  };

  const arrowTopValue = {
    'ZNANJE': '8px',
    'AKTUALNO': '35px',
    'O KCDM': '62px',
  };

  const getItemStyle = (item) => {
    return activeItem === item && !hoveredItem ? { color: '#318565' } : {};
  };

  const getArrowTop = () => {
    return hoveredItem ? arrowTopValue[hoveredItem] : arrowTopValue[activeItem];
  };

  // Handle mouse events
  const handleMouseEvents = (item) => ({
    onMouseEnter: () => setHoveredItem(item),
    onMouseLeave: () => setHoveredItem(''),
  });

  useEffect(() => {
    // Close search when window becomes too small
    if (s_width < 1050) {
      setIsSearchOpen(false);
      setIsTransitionEnabled(false);
    }
  }, [s_width]);


  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => (window.location.href = "/")}>
        {
          s_width > 767 ? 
          <img src={LogoBig} alt="Big Logo" />
          :
          <img src={LogoSmall} alt="Small Logo" />
        }
        
      </div>

      <nav className={styles.nav}>
        {
          s_width >= 900 &&
          <>
            <div className={styles['line-with-arrow']}>
              <div
                className={styles.arrow}
                style={{ top: getArrowTop() }}
              ></div>
            </div>

            <ul>
              <li
                onClick={() => setActiveItem('ZNANJE')}
                {...handleMouseEvents('ZNANJE')}
              >
                <a style={getItemStyle('ZNANJE')} href="#">
                  ZNANJE
                </a>
              </li>
              <li
                onClick={() => setActiveItem('AKTUALNO')}
                {...handleMouseEvents('AKTUALNO')}
              >
                <a
                  style={getItemStyle('AKTUALNO')}
                  href="#"
                  className="active"
                >
                  AKTUALNO
                </a>
              </li> 
              <li
                onClick={() => setActiveItem('O KCDM')}
                {...handleMouseEvents('O KCDM')}
              >
                <a style={getItemStyle('O KCDM')} href="#">
                  O KCDM
                </a>
              </li>
            </ul>
          </>
        }
       

        <div className={styles['extra-options']}>
          {
            s_width >= 900 ? 
            <>
              <div className={`${styles.searchContainer} ${isSearchOpen ? styles.open : ''}`} style={{ transition: isTransitionEnabled ? undefined : 'none' }}>
                <input type="text" placeholder="Iskanje..." className={styles.searchInput} />
                <button onClick={handleSearchToggle} className={styles.closeSearch}>✖</button>
              </div>
              <img onClick={handleSearchToggle} src={SearchIcon} alt="Search" />
              <div href="#" className={styles.platform}>PLATFORMA DNA</div>
              <div className={styles.spacer}></div>
              <a href="#" className={styles['lang']}>ENG</a>
            </> : 
            <>
              <div className={styles.spacer2}></div>
              <div className={styles.hamburgerMenu} onClick={() => setIsNavMenuOpen(prev => !prev)}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </>
          }
          
        </div>
      </nav>


    </header>
  );
};

export default Header;
