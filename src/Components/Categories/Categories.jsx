import { Link } from 'react-router-dom';
import styles from './Categories.module.css';
import PropTypes from 'prop-types';

function Categories({ className }) {
  // Defining categories in an array to reduce repetition
  const categories = [
    { to: '/about', label: 'About me', className: styles.imageContainer1 },
    { to: '/work', label: 'Work', className: styles.imageContainer2 },
    { to: '/Store', label: 'Store', className: styles.imageContainer3 },
    { to: '/contact', label: 'Contact', className: styles.imageContainer4 },
  ];

  return (
    <div className={`${styles.grid} ${className}`}>
      {categories.map((category, index) => (
        <Link
          key={index}
          to={category.to}
          className={`${styles.imageContainer} ${category.className}`}
        >
          <h3>{category.label}</h3>
        </Link>
      ))}
    </div>
  );
}

// Define prop types for validation
Categories.propTypes = {
  className: PropTypes.string,
};

export default Categories;
