import { useState, useEffect } from 'react';
import Categories from '../Components/Categories/Categories';
import Footer from '../Components/Footer/Footer';
import Navigation from '../Components/Navigation/Navigation';
import styles from './Home.module.css';
import hey from '../assets/Home/hey.png';
import { NavLink } from 'react-router-dom';
import about from '../assets/Categories/about_text.png';
import work from '../assets/Categories/work_text.png';
import store from '../assets/Categories/store_text.png';
import contact from '../assets/Categories/contact_text.png';
import Header from '../Components/Header/Header';

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Conditionally render Header or Navigation based on window width */}
      {windowWidth < 1000 ? <Header /> : <Navigation />}

      <div className={`${styles.container} ${styles.fadeIn}`}>
        <img src={hey} className={styles.hey} alt='Hey!' />
      </div>

      <Categories className={`${styles.categories} ${styles.fadeIn}`} />

      {/* Mobile menu for smaller screens */}
      <div className={`${styles.mobileMenu} ${styles.fadeIn}`}>
        <ul>
          <li>
            <NavLink to='/about'>
              <img src={about} className={styles.mobileCategory} alt='About' />
            </NavLink>
          </li>
          <li>
            <NavLink to='/work'>
              <img src={work} className={styles.mobileCategory} alt='Work' />
            </NavLink>
          </li>
          <li>
            <NavLink to='/store'>
              <img src={store} className={styles.mobileCategory} alt='Store' />
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'>
              <img
                src={contact}
                className={styles.mobileCategory}
                alt='Contact'
              />
            </NavLink>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
