import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <NavLink to='/'>
      <h1 className={styles.title}>Nessie</h1>
    </NavLink>
  );
}

export default Header;
