import { Link } from 'react-router-dom';
import styles from './Categories.module.css';
import PropTypes from 'prop-types';

function Categories({ className }) {
  return (
    <div className={`${styles.grid} ${className}`}>
      <Link
        to='/about'
        className={`${styles.imageContainer} ${styles.imageContainer1}`}
      >
        <h3>About me</h3>
      </Link>
      <Link
        to='/work'
        className={`${styles.imageContainer} ${styles.imageContainer2}`}
      >
        <h3>Work</h3>
      </Link>
      <Link
        to='/Store'
        className={`${styles.imageContainer} ${styles.imageContainer3}`}
      >
        <h3>Store</h3>
      </Link>
      <Link
        to='/contact'
        className={`${styles.imageContainer} ${styles.imageContainer4}`}
      >
        <h3>Contact</h3>
      </Link>
    </div>
  );
}

// Define prop types for validation
Categories.propTypes = {
  className: PropTypes.string, // Specify that className should be a string
};

export default Categories;
