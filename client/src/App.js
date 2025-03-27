import { useState, useEffect } from 'react';
import styles from './App.module.scss';

import 'react-toastify/dist/ReactToastify.css';
import useWindowDimensions from './misc/WindowDimensions.js';
import HomePage from './pages/HomePage.js';
import Header from './components/Header';
import NavMenu from './components/NavMenu.js';
import SearchMenu from './components/SearchMenu.js';

function App() {
  const { s_width, s_height } = useWindowDimensions();
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);

  function closeMenu(){
    setIsNavMenuOpen(false);
    setIsSearchMenuOpen(false);
  }

  useEffect(() => {
    if (s_width > 900) {
      closeMenu()
    }
  }, [s_width]);

  return (
    <>
      <div className={styles.app}>
        <div className={styles.dimensions}>{s_width}</div>
        <Header s_width={s_width} setIsNavMenuOpen={setIsNavMenuOpen}/>
      </div>
      <NavMenu isNavMenuOpen={isNavMenuOpen} setIsSearchMenuOpen={setIsSearchMenuOpen} closeMenu={closeMenu}/>
      <SearchMenu isSearchMenuOpen={isSearchMenuOpen} closeMenu={closeMenu}/>
    </>
  );
}

export default App;
