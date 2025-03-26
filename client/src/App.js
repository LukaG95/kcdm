import { useEffect } from 'react';
import styles from './App.module.scss';

import 'react-toastify/dist/ReactToastify.css';
import useWindowDimensions from './misc/WindowDimensions.js';
import HomePage from './pages/HomePage.js';
import Header from './components/Header';

function App() {
  const { s_width, s_height } = useWindowDimensions();

  useEffect(() => {


  }, []);



  return (
    <div className={styles.app}>
      {/* <div className={styles.dimensions}>{s_width}</div> */}
      <Header s_width={s_width} />
   </div>
  );
}

export default App;
