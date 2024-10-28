import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import Header from '../Header/Header';

function Navigation() {
  return (
    <>
      <Header />
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to='/about'>About me</NavLink>
          </li>
          <li>
            <NavLink to='/abstract'>Abstract</NavLink>
          </li>
          <li>
            <NavLink to='/digital'>Digital</NavLink>
          </li>
          <li>
            <NavLink to='/photography'>Photography</NavLink>
          </li>
          <li>
            <NavLink to='/sketchbook'>Sketchbook spreads</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
