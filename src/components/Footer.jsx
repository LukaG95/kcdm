import { useState, useEffect } from 'react';
import styles from './Footer.module.scss';
import Facebook from '../assets/images/facebook.svg';
import LinkedIn from '../assets/images/linkedin.svg';
import Vimeo from '../assets/images/vimeo.svg';
import Slo from '../assets/images/slo-logo.svg';
import Sklad from '../assets/images/sklad-logo.svg';
import Humanfrog from '../assets/images/humanfrog-logo.svg';
import useWindowDimensions from '../hooks/WindowDimensions.js';
import FrontArrow from './FrontArrow.jsx';

function Footer({ fromTop }){
  const { s_width } = useWindowDimensions();
  const [isChecked, setIsChecked] = useState(false);

  const [footerTop, setFooterTop] = useState(fromTop);

  useEffect(() => {
    setFooterTop(fromTop); 
  }, [fromTop]);

  if (!fromTop) return
  return (
    <footer className={styles.footer} style={{ top: `${footerTop}px` }}>
        
      <div className={styles.spacer}></div>

      <div className={styles.firstSection}>

        <div className={styles.socialMedia}>
          <h3 className={styles.title}>SPREMLJAJTE NAS</h3>
          <div className={styles.icons}>
            <a className={styles.icon}><img style={{marginLeft: "3px"}} src={Facebook} alt="Facebook" /></a>
            <a className={styles.icon}><img style={{marginBottom: "3px", marginLeft: "1px"}} src={LinkedIn} alt="LinkedIn" /></a>
            <a className={styles.icon}><img style={{marginTop: "3px", marginRight: "2px"}} src={Vimeo} alt="Vimeo" /></a>
          </div>
        </div>
        
        <div className={styles.newsletter}>
          <h3 className={styles.title}>NAROČITE SE NA NAŠE E-NOVICE</h3>
          <div className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Vnesite svoj e-naslov" 
              className={styles.inputField}
            />
            <FrontArrow isAbsolute={true} />
          </div>
          <label className={styles.termsCheckbox} onClick={() => setIsChecked(!isChecked)}>
            <div className={`${styles.checkbox} ${isChecked ? styles.checked : ""}`}>
              {isChecked && <span className={styles.checkmark}>✔</span>}
            </div>
            Strinjam se s pogoji uporabe
          </label>
        </div>

      </div>

      <div className={styles.spacer}></div>
   
      <div className={styles.secondSection}>
        <div className={styles.archive}>
          <h3 className={styles.archiveTitle}>Arhivske vsebine</h3>
          <p className={styles.archiveText}>
            Lorem ipsum dolor sit amet consectetur. Tempus blandit enim eget nunc enim. Tincidunt feugiat id eleifend eget. 
            Fames condimentum scelerisque sollicitudin feugiat tellus lorem tristique iaculis. Mauris feugiat placerat.
          </p>
        </div>
        { s_width <= 930 && <div className={styles.spacer}></div> }
        <div className={styles.partners}>
          <img src={Slo} alt="Slo" className={styles.partnerLogoSlo}/>
          <img src={Sklad} alt="Sklad" className={styles.partnerLogoSklad}/>
        </div>
      </div>

      <div className={[styles.spacer, styles.small].join(" ")}></div>

      <div className={styles.thirdSection}>
        <p className={styles.copyright}>
          © Kompetenčni center za Design Management &nbsp;·&nbsp;
          <a className={styles.legalLink}> Pogoji uporabe</a> &nbsp;·&nbsp;
          <a className={styles.legalLink}> Politika zasebnosti</a>
        </p>
        <a className={styles.designCredit}>
          Oblikovanje in razvoj spletnih strani: Humanfrog <img src={Humanfrog} alt="Humanfrog" className={styles.partnerLogo} />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
