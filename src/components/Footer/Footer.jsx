import { NavLink, Link } from "react-router-dom";
import icon from "../../images/svg/sprite.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <Link to={"/"}>
          <svg className={styles.navLogo} width="48" height="50">
            <use href={icon + "#icon-logo"}></use>
          </svg>
        </Link>
        <div className={styles.contactDetails}>
          <ul className={styles.addressList}>
            <li className={styles.addressItem}>
              <h2>Ballet school Enchanté du ballet</h2>
            </li>
            <li className={styles.addressItem}>
              <address>Canada, Toronto, ON</address>
            </li>
          </ul>
          <ul className={styles.navContactsList}>
            <li className={styles.navContactsLinkItem}>
              <Link to="tel:+14373293223" className={styles.navContactsLink}>
                <svg width="31" height="27">
                  <use href={icon + "#icon-tel"}></use>
                </svg>
                <span className={styles.isHidden}>+14373293223</span>
              </Link>
            </li>
            <li className={styles.navContactsLinkItem}>
              <Link
                to="mailto:yapparovasabina@gmail.com"
                className={styles.navContactsLink}
              >
                <svg width="31" height="22">
                  <use href={icon + "#icon-mail"}></use>
                </svg>
                <span className={styles.isHidden}>
                  Yapparovasabina@gmail.com
                </span>
              </Link>
            </li>
          </ul>
          <ul className={`${styles.navRouteList}`}>
            <li className={styles.navLinkItem}>
              <NavLink className={styles.navLink} to="/">
                About us
              </NavLink>
            </li>
            <li className={styles.navLinkItem}>
              <NavLink className={styles.navLink} to="/teachers">
                Teachers
              </NavLink>
            </li>
            <li className={styles.navLinkItem}>
              <NavLink className={styles.navLink} to="/training-program">
                Training program
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
