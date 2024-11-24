import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import Hamburger from 'hamburger-react';

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
        <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
          <Hamburger toggled={mobileMenuOpen} size={20} />
        </div>
      ) : (
        !mobileMenuOpen && (
          <nav className={styles.nav}>
            <ul>
              <li>
                <NavLink to='/about'>About me</NavLink>
              </li>
              <li>
                <NavLink to='/work'>Work</NavLink>
              </li>
              <li>
                <NavLink to='/store'>Store</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
            </ul>
          </nav>
        )
      )}
      {mobileMenuOpen && (
        <div className={styles.mobileBackground}>
          <div className={styles.mobileMenuOverlay}>
            <ul>
              <li>
                <NavLink to='/about' onClick={toggleMobileMenu}>
                  About me
                </NavLink>
              </li>
              <li>
                <NavLink to='/work' onClick={toggleMobileMenu}>
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to='/store' onClick={toggleMobileMenu}>
                  Store
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact' onClick={toggleMobileMenu}>
                  Contact
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
