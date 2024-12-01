import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Payment.module.css';

function Payment({ onBack, onNext }) {
  const [paymentMethod, setPaymentMethod] = useState('Payconiq');

  function handleNext() {
    onNext({ paymentMethod });
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Payment Method</h1>
        <form className={styles.radioForm}>
          <label className={styles.radioLabel}>
            <input
              type='radio'
              value='Payconiq'
              checked={paymentMethod === 'Payconiq'}
              onChange={() => setPaymentMethod('Payconiq')}
              className={styles.radioInput}
            />
            <span className={styles.radioText}>Payconiq by Bancontact</span>
          </label>
          <label className={styles.radioLabel}>
            <input
              type='radio'
              value='Bancontact'
              checked={paymentMethod === 'Bancontact'}
              onChange={() => setPaymentMethod('Bancontact')}
              className={styles.radioInput}
            />
            <span className={styles.radioText}>Bancontact</span>
          </label>
          <label className={styles.radioLabel}>
            <input
              type='radio'
              value='Creditcard'
              checked={paymentMethod === 'Creditcard'}
              onChange={() => setPaymentMethod('Creditcard')}
              className={styles.radioInput}
            />
            <span className={styles.radioText}>Credit Card</span>
          </label>
          <label className={styles.radioLabel}>
            <input
              type='radio'
              value='paypal'
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
              className={styles.radioInput}
            />
            <span className={styles.radioText}>PayPal</span>
          </label>
        </form>
      </div>
      <div className={styles.buttonGroup}>
        <button onClick={onBack} className={styles.backButton}>
          Back
        </button>
        <button onClick={handleNext} className={styles.nextButton}>
          Next
        </button>
      </div>
    </div>
  );
}

Payment.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Payment;
