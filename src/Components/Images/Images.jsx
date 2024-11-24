import { useState, useEffect } from 'react';
import styles from './Images.module.css';
import PropTypes from 'prop-types';

function Images({ folder, className }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [fadeInClass, setFadeInClass] = useState(''); // State to trigger fade-in

  let images, thumbnails;
  switch (folder) {
    case 'Work':
      images = import.meta.glob('../../assets/Work/*.{png,jpg,jpeg,svg}', {
        eager: true,
      });
      thumbnails = import.meta.glob(
        '../../assets/Work/thumbnails/*.{png,jpg,jpeg,svg}',
        { eager: true }
      );
      break;
    case 'Store':
      images = import.meta.glob('../../assets/Store/*.{png,jpg,jpeg,svg}', {
        eager: true,
      });
      thumbnails = import.meta.glob(
        '../../assets/Store/thumbnails/*.{png,jpg,jpeg,svg}',
        { eager: true }
      );
      break;
    default:
      console.warn(`Unknown folder: ${folder}`);
      images = {};
      thumbnails = {};
  }

  const imageKeys = Object.keys(images).map((path) => ({
    full: images[path].default,
    thumb:
      thumbnails[path.replace(/\/([^/]+)$/, '/thumbnails/$1')]?.default ||
      images[path].default,
  }));

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
    setFadeInClass(''); // Reset fade-in class
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  const showNextImage = () => {
    setFadeInClass(''); // Reset fade-in for the new image
    setTimeout(
      () => setSelectedIndex((prevIndex) => (prevIndex + 1) % imageKeys.length),
      0
    );
  };

  const showPrevImage = () => {
    setFadeInClass(''); // Reset fade-in for the new image
    setTimeout(
      () =>
        setSelectedIndex(
          (prevIndex) => (prevIndex - 1 + imageKeys.length) % imageKeys.length
        ),
      0
    );
  };

  useEffect(() => {
    // Add fade-in effect when the selected image changes
    if (selectedIndex !== null) {
      setFadeInClass(styles.fadeIn);
    }
  }, [selectedIndex]);

  return (
    <div>
      <div className={`${styles.grid} ${className}`}>
        {imageKeys.map(({ thumb }, index) => (
          <img
            key={index}
            src={thumb}
            alt={`Thumbnail ${index + 1}`}
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
              src={imageKeys[selectedIndex].full}
              alt={`Enlarged view ${selectedIndex + 1}`}
              className={`${styles.modalImage} ${fadeInClass}`} // Add fade-in class
            />
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
