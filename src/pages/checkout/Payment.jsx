import { useState } from 'react';
import PropTypes from 'prop-types';

function Payment({ onBack, onNext }) {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  function handleNext() {
    onNext({ paymentMethod });
  }

  return (
    <div>
      <h2>Payment Method</h2>
      <form>
        <label>
          <input
            type='radio'
            value='creditCard'
            checked={paymentMethod === 'creditCard'}
            onChange={() => setPaymentMethod('creditCard')}
          />
          Credit Card
        </label>
        <label>
          <input
            type='radio'
            value='paypal'
            checked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
          />
          PayPal
        </label>
      </form>
      <button onClick={onBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

// Add PropTypes validation
Payment.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Payment;
