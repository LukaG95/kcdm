import { useState, useEffect, useRef  } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import styles from './App.module.scss';

import useWindowDimensions from './hooks/WindowDimensions';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import NavMenu from './components/NavMenu';
import SearchMenu from './components/SearchMenu';

function App() {
  const { s_width } = useWindowDimensions();
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [appHeight, setAppHeight] = useState(0);
  const appRef = useRef(null);
  const location = useLocation();

  function closeMenu(){
    setIsNavMenuOpen(false);
    setIsSearchMenuOpen(false);
  }

  // Close side menu on window resize
  useEffect(() => {
    if (s_width > 900) closeMenu()
  }, [s_width]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  // Top Footer offset observer
  useEffect(() => {
    const updateHeight = () => {
      if (appRef.current) {
        const appBottom = appRef.current.offsetTop + appRef.current.offsetHeight;
        setAppHeight(appBottom + (location.pathname === "/novice" || location.pathname.includes("dogodki") ? 300 : 200));
      }
    };

    const observer = new ResizeObserver(updateHeight);

    if (appRef.current) {
      observer.observe(appRef.current);
      updateHeight(); 
    }

    return () => {
      observer.disconnect();
    };
  }, [s_width, location.pathname]);

  return (
    <>
      <div className={styles.app}>
        <Header s_width={s_width} setIsNavMenuOpen={setIsNavMenuOpen}/>
        <Body appRef={appRef}/>
      </div>
      <Footer fromTop={appHeight} />
      <NavMenu isNavMenuOpen={isNavMenuOpen} setIsSearchMenuOpen={setIsSearchMenuOpen} closeMenu={closeMenu}/>
      <SearchMenu isSearchMenuOpen={isSearchMenuOpen} closeMenu={closeMenu}/>
    </>
  );
}

export default App;
