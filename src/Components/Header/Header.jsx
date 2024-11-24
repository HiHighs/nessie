import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/Logo/nessie.png'; // Adjust the path to match your project structure

function Header() {
  return (
    <NavLink to='/'>
      <img src={logo} alt='Nessie Logo' className={styles.logo} />
    </NavLink>
  );
}

export default Header;
