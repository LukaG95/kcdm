import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.scss';

import 'react-toastify/dist/ReactToastify.css';
import useWindowDimensions from './misc/WindowDimensions';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import NavMenu from './components/NavMenu';
import SearchMenu from './components/SearchMenu';

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
    <Router>
      <div className={styles.app}>
        <div className={styles.dimensions}>{s_width}</div>
        <Header s_width={s_width} setIsNavMenuOpen={setIsNavMenuOpen}/>
        <Body />
        <Footer />
      </div>

      <NavMenu isNavMenuOpen={isNavMenuOpen} setIsSearchMenuOpen={setIsSearchMenuOpen} closeMenu={closeMenu}/>
      <SearchMenu isSearchMenuOpen={isSearchMenuOpen} closeMenu={closeMenu}/>
    </Router>
  );
}

export default App;


/* return (
  <div className={styles.app}>
    <Header s_width={s_width} setIsNavMenuOpen={setIsNavMenuOpen} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/novice" element={<Novice />} />
      <Route path="/novice/:id" element={<NoviceDetail />} />
    </Routes>
    <Footer />
    <NavMenu isNavMenuOpen={isNavMenuOpen} setIsSearchMenuOpen={setIsSearchMenuOpen} closeMenu={closeMenu} />
    <SearchMenu isSearchMenuOpen={isSearchMenuOpen} closeMenu={closeMenu} />
  </div>
);
 */