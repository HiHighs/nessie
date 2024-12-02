import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './Product.module.css';
import add from '../../assets/Buttons/addtocart.png';

function Product({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    onAddToCart(quantity);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Remove scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Back to auto when component is unmounted or modal closes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <div className={styles.card}>
      <img
        className={styles.productImage}
        src={product.image}
        alt={product.name}
        onClick={openModal}
      />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>€{product.price}</p>

      <div className={styles.quantityControls}>
        <button className={styles.decreaseButton} onClick={handleDecrease}>
          &#65293;
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button className={styles.increaseButton} onClick={handleIncrease}>
          +
        </button>
      </div>

      <img
        className={styles.addToCart}
        src={add}
        alt='Add'
        onClick={handleAddToCart}
      />

      {/* Modal for enlarged image */}
      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              &#x2715;
            </button>
            <div className={styles.modalBody}>
              <img
                src={product.image}
                alt={`Enlarged view of ${product.name}`}
                className={styles.modalImage}
              />
              <div className={styles.modalDetails}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>€{product.price}</p>
                <div className={styles.quantityControls}>
                  <button
                    className={styles.decreaseButton}
                    onClick={handleDecrease}
                  >
                    &#65293;
                  </button>
                  <span className={styles.quantity}>{quantity}</span>
                  <button
                    className={styles.increaseButton}
                    onClick={handleIncrease}
                  >
                    +
                  </button>
                </div>
                <img
                  className={styles.addToCart}
                  src={add}
                  alt='Add'
                  onClick={handleAddToCart}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Product;
