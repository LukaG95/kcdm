import { Link, useLocation } from 'react-router-dom';
import styles from './Body.module.scss';
import useWindowDimensions from '../misc/WindowDimensions.js';
import Stripes from '../assets/images/stripes.svg';
import BackArrow from './BackArrow.js';
import FrontArrow from './FrontArrow.js';
import { newsData } from '../assets/data/newsData.js';
import { eventsData } from '../assets/data/eventsData.js';

import NewsHighlighted from './news/NewsHighlighted.js';
import NewsFull from './news/NewsFull.js';
import NewsSmall from './news/NewsSmall.js';
import EventSmall from './events/EventSmall.js';
import Footer from './Footer';

function Body({appRef}) {
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
        {
          (s_width > 767 || location.pathname.startsWith('/novice')) && 
            <div className={styles.right}>
              {location.pathname.startsWith('/novice/') ? 
                <BackArrow route={"/novice"} name={"NOVICE"} mobile={false} isHomePage={isHomePage} on_news={true}/>
              :
              <h1>{getPageTitle()}</h1>
              }
            </div>
        }
      </header>

   
      { 
        (s_width <= 1050 && !location.pathname.startsWith('/novice/')) && 
          <div className={styles["back-nav-or-title"]}>
            <div className={styles.spacer2}></div>
            { isHomePage ? 
              <h1>Aktualno</h1> :
              <BackArrow route={"/"} name={"AKTUALNO"} mobile={true} isHomePage={isHomePage}/>
            }
          </div>
      }

      <div className={styles["bottom-layout"]}>

        { !(location.pathname.startsWith('/novice/') && s_width <= 767) &&
          <nav className={styles.nav}>
            <ul>
              {navItems.map((item) => {
                const isActive = location.pathname.includes(item.path);
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
        }
        

        <div className={styles["news-wrapper"]} style={{transform: `translateY(${topOffset()})`}} ref={appRef}>
        
          {isHomePage ? (
            // Home page
            <>
              {
                newsData.filter(news => news.highlighted).map(news => (
                <NewsHighlighted key={news.id} news={news} />
              ))
              }
              <section>
                <div className={styles["section-aktualno"]}>
                  <h2>AKTUALNO</h2>
                  <div className={styles.spacer}></div>
                  {
                    newsData.sort((a, b) => b.trending_score - a.trending_score).slice(0, 5).map((news, i) => (
                      <NewsSmall key={news.id} news={news} big={false} useAnimation={i === 0}/>
                    ))
                  }
                  <FrontArrow route={"/novice"} name={"VEČ NOVIC"} />
                </div>
                {
                  s_width <= 561 && <div className={styles.spacer}></div>
                }
                <div className={styles["section-napovedujemo"]}>
                  <h2>NAPOVEDUJEMO</h2>
                  <div className={styles.spacer}></div>
                  {
                    eventsData.map((event, i) => (
                      <EventSmall key={event.id} event={event} />
                    ))
                  }
                  <FrontArrow route={"/prihajajoci-dogodki"} name={"VEČ DOGODKOV"} />
                </div>
              </section>
            </>
      
          ) : location.pathname.startsWith('/novice/') ? (
            // Certain news page
            newsData.filter(news => news.id == location.pathname.split('/')[2]).map(news => (
              <NewsFull key={news.id} news={news} />
            ))
          ) : location.pathname.startsWith('/novice') ? (
            // News page
            newsData.map((news, i) => (
              <NewsSmall key={news.id} news={news} big={true} useAnimation={i === 1}/>
            ))
          ) : location.pathname.startsWith('/prihajajoci-dogodki') ? (
            // Upcoming events page
            <></>
          ) : location.pathname.startsWith('/pretekli-dogodki') ? (
            // Past events page
            <></>
          ) : null}

        </div>
        
      </div>
      
     
      <div className={`${styles.spacer} ${!isHomePage ? styles.lessHeight : ''}`}></div>
    </main>
  );

  function topOffset(){
    if (isHomePage) {
      return "-100px";
    }
    else if (location.pathname.startsWith('/novice/')) {
      return "-120px";
    }
    else if (location.pathname.startsWith('/novice')) {
      if (s_width <= 767) return "100px"
      return "35px";
    }
    else {
      return "0px";
    }
  }
}

export default Body;