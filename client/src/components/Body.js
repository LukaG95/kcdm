import { Link, useLocation } from 'react-router-dom';
import styles from './Body.module.scss';
import useWindowDimensions from '../misc/WindowDimensions.js';
import Stripes from '../assets/images/stripes.svg';
import BackArrow from './BackArrow.js';
import { newsData } from '../assets/news/newsData.js';

import NewsHighlighted from './news/NewsHighlighted.js';
import NewsFull from './news/NewsFull.js';

function Body() {
  const { s_width } = useWindowDimensions();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { path: '/novice', text: 'Novice' },
    { path: '/prihajajoci-dogodki', text: 'Prihajajoči dogodki' },
    { path: '/pretekli-dogodki', text: 'Pretekli dogodki' }
  ];

  const getPageTitle = () => {
    if (isHomePage) return 'Aktualno';
    if (location.pathname.startsWith('/novice')) return 'Novice';
    if (location.pathname.startsWith('/prihajajoci-dogodki')) return 'Prihajajoči dogodki';
    if (location.pathname.startsWith('/pretekli-dogodki')) return 'Pretekli dogodki';
    return '';
  };

  return (
    <main className={styles["news-page"]}>
      <header className={styles["news-header"]}>
        <div className={`${styles.background} ${!isHomePage ? styles.fullWidth : ''}`}></div>
        <div className={styles.left}>
          <img 
            src={Stripes} 
            alt="Stripes" 
            className={`${styles.stripes} ${location.pathname === "/" ? styles.visible : styles.hidden}`}
          />
          <BackArrow route={"/"} name={"AKTUALNO"} mobile={false} isHomePage={isHomePage}/>
        </div>
        <div className={styles.right}>
          <h1>{getPageTitle()}</h1>
        </div>
      </header>

   
      { s_width < 1050 && 
          <div className={styles["back-nav-or-title"]}>
            <div className={styles.spacer2}></div>
            { isHomePage ? 
              <h1>Aktualno</h1> :
              <BackArrow route={"/"} name={"AKTUALNO"} mobile={true} isHomePage={isHomePage}/>
            }
          </div>
      }

      <div style={{display: "flex"}}>

        <nav className={styles.nav}>
          <ul>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li 
                  key={item.path}
                  className={isActive ? styles.activeItem : ''}
                >
                  <div 
                    className={`${styles.indicator} ${isActive ? styles.visible : ''}`}
                  ></div>
                  <Link
                    to={item.path}
                    className={isActive ? styles.activeLink : ''}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.test}>
        {
          newsData.map(news => (<NewsHighlighted key={news.id} news={news} />))
        }
        </div>
        
      </div>
      
      
      <div className={`${styles.spacer} ${!isHomePage ? styles.lessHeight : ''}`}></div>
    </main>
  );
}

export default Body;