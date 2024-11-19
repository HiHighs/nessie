import { useState } from 'react';
import styles from './Images.module.css';
import PropTypes from 'prop-types';

function Images({ folder, className }) {
  // State for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <div className={`${styles.grid} ${className}`}>
        {Object.keys(images).map((path, index) => (
          <img
            key={index}
            src={images[path].default}
            alt={`Image ${index + 1}`}
            className={styles.image}
            onClick={() => openModal(images[path].default)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedImage}
              alt='Enlarged view'
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}

Images.propTypes = {
  folder: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Images;
