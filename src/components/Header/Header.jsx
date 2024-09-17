import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import icon from "../../images/svg/sprite.svg";
import styles from "./Header.module.css";

function Header() {
  const location = useLocation();

  const [navState, setNavState] = useState({
    isOpen: false,
    displayStyle: {},
  });

  const closeNavMenu = () => {
    setNavState({
      isOpen: false,
      displayStyle: {},
    });
  };

  const toggleNavMenu = () => {
    setNavState((prevState) => ({
      isOpen: !prevState.isOpen,
      displayStyle: prevState.isOpen ? {} : { transform: "translate(0)" },
    }));
    if (!navState.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const [headerClass, setHeaderClass] = useState("");

  useEffect(() => {
    let headerClass = "";

    if (location.pathname === "/") {
      headerClass = styles.transparentHeader;
    } else if (location.pathname === "/teachers") {
      headerClass = styles.whiteHeader;
    } else if (location.pathname === "/training-program") {
      headerClass = styles.combineHeader;
    }

    setHeaderClass(headerClass);
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={` ${styles.navWrapper} ${headerClass}`}>
          <button
            type="button"
            className={`${styles.open_close_btn} ${
              navState.isOpen ? styles.whiteHeader : ""
            }`}
            onClick={toggleNavMenu}
          >
            {navState.isOpen ? (
              <svg width="23" height="20">
                <use href={icon + "#icon-modal-close-btn"}></use>
              </svg>
            ) : (
              <svg width="30" height="20">
                <use href={icon + "#icon-charm-menu"}></use>
              </svg>
            )}
          </button>
          <Link to={"/"} onClick={closeNavMenu}>
            <svg className={styles.navLogo} width="57" height="50">
              <use href={icon + "#icon-logo"}></use>
            </svg>
          </Link>
          <Link className={styles.navName} to={"/"} onClick={closeNavMenu}>
            Enchanté du ballet
          </Link>
          <nav className={styles.navigation} style={navState.displayStyle}>
            <div className={styles.navigationMobile}>
              <Link to={"/"} onClick={closeNavMenu}>
                <svg className={styles.navLogoMobile} width="57" height="50">
                  <use href={icon + "#icon-logo"}></use>
                </svg>
              </Link>
              <Link
                className={styles.navNameMobile}
                to={"/"}
                onClick={closeNavMenu}
              >
                Enchanté du ballet
              </Link>
            </div>
            <ul className={styles.navRouteList}>
              <li className={styles.navLinkItem}>
                <NavLink
                  onClick={closeNavMenu}
                  className={`${styles.navLink} ${
                    location.pathname === "/" ? styles.currentPage : ""
                  }`}
                  to="/"
                >
                  About us
                </NavLink>
              </li>
              <li className={styles.navLinkItem}>
                <NavLink
                  onClick={closeNavMenu}
                  className={`${styles.navLink} ${
                    location.pathname === "/teachers" ? styles.currentPage : ""
                  }`}
                  to="/teachers"
                >
                  Teachers
                </NavLink>
              </li>
              <li className={styles.navLinkItem}>
                <NavLink
                  onClick={closeNavMenu}
                  className={`${styles.navLink} ${
                    location.pathname === "/training-program"
                      ? styles.currentPage
                      : ""
                  }`}
                  to="/training-program"
                >
                  Training program
                </NavLink>
              </li>
            </ul>
            <ul className={styles.navContactsList}>
              <li className={styles.navContactsLinkItem}>
                <Link
                  to="mailto:yapparovasabina@gmail.com"
                  className={styles.navContactsLink}
                >
                  <svg width="31" height="22">
                    <use href={icon + "#icon-mail"}></use>
                  </svg>
                  <span>Yapparovasabina@gmail.com</span>
                </Link>
              </li>
              <li className={styles.navContactsLinkItem}>
                <Link to="tel:+14373293223" className={styles.navContactsLink}>
                  <svg width="31" height="27">
                    <use href={icon + "#icon-tel"}></use>
                  </svg>
                  <span>+14373293223</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {navState.isOpen && (
          <div className={styles.backdrop} onClick={toggleNavMenu}></div>
        )}
      </div>
    </header>
  );
}

export default Header;
