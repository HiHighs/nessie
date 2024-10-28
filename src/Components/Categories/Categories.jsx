import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

function Categories() {
  return (
    <div className={styles.grid}>
      <Link
        to='/digital'
        className={`${styles.imageContainer} ${styles.imageContainer1}`}
      >
        <h3>Digital</h3>
      </Link>
      <Link
        to='/sketchbook'
        className={`${styles.imageContainer} ${styles.imageContainer2}`}
      >
        <h3>Sketchbook</h3>
      </Link>
      <Link
        to='/abstract'
        className={`${styles.imageContainer} ${styles.imageContainer3}`}
      >
        <h3>Abstract</h3>
      </Link>
      <Link
        to='/photography'
        className={`${styles.imageContainer} ${styles.imageContainer4}`}
      >
        <h3>Photography</h3>
      </Link>
    </div>
  );
}

export default Categories;
