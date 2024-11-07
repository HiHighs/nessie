import styles from './Images.module.css';
import PropTypes from 'prop-types';

function Images({ folder }) {
  let images;

  switch (folder) {
    case 'Work':
      images = import.meta.glob('../../assets/Work/*.{png,jpg,jpeg,svg}', {
        eager: true,
      });
      break;
    case 'Store':
      images = import.meta.glob('../../assets/Store/*.{png,jpg,jpeg,svg}', {
        eager: true,
      });
      break;
    default:
      console.warn(`Unknown folder: ${folder}`);
      images = {}; // Fallback to an empty object if folder is unrecognized
  }

  return (
    <div>
      <div className={styles.grid}>
        {Object.keys(images).map((path, index) => (
          <img
            key={index}
            src={images[path].default}
            alt={`Image ${index + 1}`}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
}

// Define prop types for validation
Images.propTypes = {
  folder: PropTypes.string.isRequired, // Make the folder prop required
};

export default Images;
