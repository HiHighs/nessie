import { useState } from 'react';
import Payment from './Payment';
import Confirmation from './Confirmation';
import Overview from './Overview';
import PropTypes from 'prop-types';
import Header from '../../Components/Header/Header';
import { sendAdminOrderNotification } from '../../services/emailService/emailService';
import ClientInfo from './ClientInfo';

function Checkout({ cart, totalAmount }) {
  const [step, setStep] = useState(1);
  const [clientDetails, setClientDetails] = useState(null);
  const [clientAddress, setClientAddress] = useState(null);
  const [payment, setPayment] = useState(null);

  function handleNextClientInfo(detailsData, addressData) {
    setClientDetails(detailsData);
    setClientAddress(addressData);
    setStep(2);
  }

  function handleNextPayment(paymentData) {
    setPayment(paymentData);
    setStep(3);
  }

  function handleConfirmOrder() {
    sendAdminOrderNotification(
      clientDetails,
      clientAddress,
      cart,
      totalAmount,
      payment
    );
    setStep(4);
  }

  return (
    <div>
      <Header />
      {step === 1 && <ClientInfo onNext={handleNextClientInfo} />}
      {step === 2 && (
        <Payment onBack={() => setStep(1)} onNext={handleNextPayment} />
      )}
      {step === 3 && (
        <Confirmation
          cart={cart}
          clientDetails={clientDetails}
          clientAddress={clientAddress}
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
  totalAmount: PropTypes.number.isRequired,
};

export default Checkout;
