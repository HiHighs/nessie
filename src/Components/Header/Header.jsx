import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/Logo/nessie.png';

function Header() {
  return (
    <NavLink to='/' className={styles.logoLink}>
      <img src={logo} alt='Nessie Logo' className={styles.logo} />
    </NavLink>
  );
}

export default Header;
