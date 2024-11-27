import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';
import about from '../../assets/Categories/about_text.png';
import work from '../../assets/Categories/work_text.png';
import store from '../../assets/Categories/store_text.png';
import contact from '../../assets/Categories/contact_text.png';

function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(window.innerWidth <= 1000);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setMobileMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    function resize() {
      if (window.innerWidth > 1000) {
        setMobileMenuOpen(false);
        setMobileMenu(false);
      } else {
        setMobileMenu(true);
      }
    }

    resize();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [mobileMenuOpen]);

  return (
    <>
      <Header />
      {mobileMenu ? (
        <div className={styles.mobileMenuWrapper}>
          <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
            <Hamburger toggled={mobileMenuOpen} size={20} />
          </div>
        </div>
      ) : (
        !mobileMenuOpen && (
          <nav className={styles.nav}>
            <ul>
              <li>
                <NavLink to='/about'>
                  <img src={about} className={styles.category} />
                </NavLink>
              </li>
              <li>
                <NavLink to='/work'>
                  <img src={work} className={styles.category} />
                </NavLink>
              </li>
              <li>
                <NavLink to='/store'>
                  <img src={store} className={styles.category} />
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact'>
                  <img src={contact} className={styles.category} />
                </NavLink>
              </li>
            </ul>
          </nav>
        )
      )}
      {mobileMenuOpen && (
        <div className={styles.mobileBackground}>
          <div
            className={`${styles.mobileMenuOverlay} ${
              mobileMenuOpen ? styles.visible : ''
            }`}
          >
            <ul>
              <li>
                <NavLink to='/about' onClick={toggleMobileMenu}>
                  <img src={about} className={styles.mobileCategory} />
                </NavLink>
              </li>
              <li>
                <NavLink to='/work' onClick={toggleMobileMenu}>
                  <img src={work} className={styles.mobileCategory} />
                </NavLink>
              </li>
              <li>
                <NavLink to='/store' onClick={toggleMobileMenu}>
                  <img src={store} className={styles.mobileCategory} />
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact' onClick={toggleMobileMenu}>
                  <img src={contact} className={styles.mobileCategory} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
