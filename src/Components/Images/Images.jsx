import { useState } from 'react';
import styles from './Images.module.css';
import PropTypes from 'prop-types';

function Images({ folder, className }) {
  // State for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

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

  const imageKeys = Object.keys(images);

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  const showNextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % imageKeys.length);
  };

  const showPrevImage = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + imageKeys.length) % imageKeys.length
    );
  };

  return (
    <div>
      <div className={`${styles.grid} ${className}`}>
        {imageKeys.map((path, index) => (
          <img
            key={index}
            src={images[path].default}
            alt={`Image ${index + 1}`}
            className={styles.image}
            onClick={() => openModal(index)}
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
              &#x2715;
            </button>
            <img
              src={images[imageKeys[selectedIndex]].default}
              alt={`Enlarged view ${selectedIndex + 1}`}
              className={styles.modalImage}
            />
            {/* Buttons for larger screens */}
            <button
              className={`${styles.arrow} ${styles.arrowLeft}`}
              onClick={showPrevImage}
            >
              &#9664;
            </button>
            <button
              className={`${styles.arrow} ${styles.arrowRight}`}
              onClick={showNextImage}
            >
              &#9654;
            </button>
          </div>
          {/* Clickable areas for smaller screens */}
          <div
            className={styles.clickAreaLeft}
            onClick={(e) => {
              e.stopPropagation();
              showPrevImage();
            }}
          ></div>
          <div
            className={styles.clickAreaRight}
            onClick={(e) => {
              e.stopPropagation();
              showNextImage();
            }}
          ></div>
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
