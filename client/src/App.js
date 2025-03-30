import { useState, useEffect, useRef  } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import styles from './App.module.scss';

import 'react-toastify/dist/ReactToastify.css';
import useWindowDimensions from './misc/WindowDimensions';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import NavMenu from './components/NavMenu';
import SearchMenu from './components/SearchMenu';
import {  } from 'react-router-dom';

function App() {
  const { s_width, s_height } = useWindowDimensions();
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [appHeight, setAppHeight] = useState(0);
  const appRef = useRef(null);
  const location = useLocation();

  function closeMenu(){
    setIsNavMenuOpen(false);
    setIsSearchMenuOpen(false);
  }

  useEffect(() => {
    if (s_width > 900) {
      closeMenu()
    }
  }, [s_width]);

  // Top Footer offset
  useEffect(() => {
    let x = setInterval(()=> {
      if (appRef.current){
        const appBottom = appRef.current.offsetTop + appRef.current.offsetHeight;
        setAppHeight(appBottom + (location.pathname === "/novice" || location.pathname.includes("dogodki") ? 300 : 200));
        clearInterval(x);
      }
    }, 10)
  }, [s_width, location.pathname]);

  return (
    <>
      <div className={styles.app}>
        <div className={styles.dimensions}>{s_width}</div>
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
