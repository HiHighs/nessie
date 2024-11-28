import { useState } from 'react';
import Address from './Address';
import Payment from './Payment';
import Confirmation from './Confirmation';
import Overview from './Overview';
import PropTypes from 'prop-types';
import Header from '../../Components/Header/Header';

function Checkout({ cart }) {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState(null);
  const [payment, setPayment] = useState(null);

  function handleNextAddress(addressData) {
    setAddress(addressData);
    setStep(2);
  }

  function handleNextPayment(paymentData) {
    setPayment(paymentData);
    setStep(3);
  }

  function handleConfirmOrder() {
    // Submit the order to the server
    console.log({ cart, address, payment });
    setStep(4);
  }

  return (
    <div>
      <Header />
      {step === 1 && <Address onNext={handleNextAddress} />}
      {step === 2 && (
        <Payment onBack={() => setStep(1)} onNext={handleNextPayment} />
      )}
      {step === 3 && (
        <Confirmation
          cart={cart}
          address={address}
          payment={payment}
          onBack={() => setStep(2)}
          onConfirm={handleConfirmOrder}
        />
      )}
      {step === 4 && <Overview />}
    </div>
  );
}

// Add PropTypes validation
Checkout.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired, // Array of cart items with specific structure
};

export default Checkout;
