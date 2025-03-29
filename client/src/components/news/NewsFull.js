import React from 'react';
import styles from './NewsFull.module.scss';
import Union from '../../assets/images/union.svg';

const NewsFull = ({ news }) => {

  return (
    <article className={styles.newsItem}>
      <h1>{news.title}</h1>
      <img className={styles["news-image"]} src={news.img} alt="News image" />
      <time>{news.date}</time>
      <div className={styles.spacer}></div>
      <p className={styles.description}>{news.description}</p>
      <p className={styles.regular_text}>
        Celostno razumevanje in učinkovito upravljanje področij designa: <span>link design raziskav,</span> storitvenega 
        oblikovanja, trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih 
        točk znamke z uporabniki.
      </p>
      <h4 className={styles.subHeader1}>To je mednaslov 1 lorem ipsum dolor sit amet consiliqur malanga </h4>
      <p className={styles.regular_text} style={{marginBottom: "10px"}}>
        Celostno razumevanje in učinkovito upravljanje področij designa: design raziskav, storitvenega oblikovanja, 
        trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk 
        znamke z uporabniki, design razmišljanja in design vodenja podjetju omogoča vrsto prednosti pred konkurenti.
      </p>
      <ul className={styles.list}>
        <li>design raziskav,</li>
        <li>storitvenega oblikovanja,</li>
        <li>trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk znamke z uporabniki,</li>
        <li>design razmišljanja in design vodenja podjetju omogoča vrsto prednosti pred konkurenti.</li>
      </ul>
      <h5 className={styles.subHeader2}>
        To je mednaslov 2 lorem ipsum dolor sit amet consiliqur malanga 
      </h5>
      <p className={styles.regular_text} style={{marginBottom: "50px"}}>
        Celostno razumevanje in učinkovito upravljanje področij designa: design raziskav, storitvenega oblikovanja, trajnostnega oblikovanja, 
        načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk znamke z uporabniki, design razmišljanja.
      </p>
      <div className={styles.spacer} style={{width: "100%"}}></div>
      <h6 className={styles["video-title"]}>TO JE NASLOV VIDEA</h6>
      <img className={styles["youtube_image"]} src={news.img2} alt="Youtube image" />
      <h4 className={styles.subHeader1}>To je mednaslov 1 lorem ipsum dolor sit amet consiliqur malanga </h4>
      <p className={styles.regular_text} style={{marginBottom: "10px"}}>
        Celostno razumevanje in učinkovito upravljanje področij designa: design raziskav, storitvenega oblikovanja, 
        trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk 
        znamke z uporabniki, design razmišljanja in design vodenja podjetju omogoča vrsto prednosti pred konkurenti.
      </p>
      <ul className={styles.list}>
        <li>design raziskav,</li>
        <li>storitvenega oblikovanja,</li>
        <li>trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk znamke z uporabniki,</li>
        <li>design razmišljanja in design vodenja podjetju omogoča vrsto prednosti pred konkurenti.</li>
      </ul>
      <h5 className={styles.subHeader2} style={{fontSize: "24px"}}>
        To je mednaslov 2 lorem ipsum dolor sit amet consiliqur malanga 
      </h5>
      <p className={styles.regular_text} style={{marginBottom: "40px"}}>
        Celostno razumevanje in učinkovito upravljanje področij designa: design raziskav, storitvenega oblikovanja, 
        trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk 
        znamke z uporabniki, design razmišljanja in design vodenja podjetju omogoča vrsto prednosti pred konkurenti.
      </p>
      <img className={styles["youtube-image"]} src={news.img3} alt="Youtube image" />
      <p className={styles["presentation-text"]}>
        Lorem ipsum dolor sit amet consectetur. Morbi consequat ut sollicitudin lorem. Platea auctor sit. Lorem ipsum dolor sit amet consectetur. M
        orbi consequat ut sollicitudin lorem. Platea auctor sit. 
      </p>
      <div className={styles.spacer} style={{width: "100%"}}></div>
      <h4 className={styles.subHeader1} style={{marginTop: "20px"}}>To je mednaslov 1 lorem ipsum dolor sit amet consiliqur malanga </h4>
      <p className={styles.regular_text} style={{marginBottom: "10px"}}>
        Celostno razumevanje in učinkovito upravljanje področij designa: design raziskav, storitvenega oblikovanja, 
        trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk 
        znamke z uporabniki, design razmišljanja in design vodenja podjetju omogoča vrsto prednosti pred konkurenti.
      </p>
      <blockquote className={styles["quote-text"]}>
        This is the Highlight. Lorem ipsum gulih dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. 
      </blockquote>
      <h5 className={styles.subHeader2}>To je mednaslov 2 lorem ipsum dolor sit amet consiliqur malanga </h5>
      <p className={styles.regular_text} style={{marginBottom: "10px"}}>
        Celostno razumevanje in učinkovito upravljanje področij designa: design raziskav, storitvenega oblikovanja, 
        trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk 
        znamke z uporabniki, design razmišljanja in design vodenja podjetju omogoča vrsto prednosti pred konkurenti.
      </p>
      <p className={styles.regular_text} style={{marginBottom: "10px"}}>
        Celostno razumevanje in učinkovito upravljanje področij designa: design raziskav, storitvenega oblikovanja, 
        trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk 
        znamke z uporabniki, design razmišljanja in design vodenja podjetju omogoča vrsto prednosti pred konkurenti.
      </p>
      <blockquote className={styles.quote2}>
        <img src={Union} alt="Union" className={`${styles["union-icon"]} ${styles.rotate}`}/>
        <img src={Union} alt="Union" className={`${styles["union-icon"]} ${styles.rotate}`} style={{marginRight: "20px"}}/>
        <img src={Union} alt="Union" className={styles["union-icon"]}/>
        <img src={Union} alt="Union" className={styles["union-icon"]}/>
        <p className={styles["quote-text"]}>This is the Highlight. Lorem ipsum gulih dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
        <div style={{display: "flex", alignItems: "center"}}>
          <div className={styles["author-line"]}></div>
          <cite className={styles.author}>Jaka Jaklič, Podjetje d.o.o.</cite>
        </div>
      </blockquote>
      <p className={styles.regular_text} style={{marginBottom: "10px"}}>
        Celostno razumevanje in učinkovito upravljanje področij designa: design raziskav, storitvenega oblikovanja, 
        trajnostnega oblikovanja, načrtovanja uporabniških izkušenj, upravljanja uporabniških poti in stičnih točk 
        znamke z uporabniki, design razmišljanja in design vodenja podjetju omogoča vrsto prednosti pred konkurenti.
      </p>
    </article>
  );
};

export default NewsFull;



