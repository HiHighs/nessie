import PropTypes from 'prop-types';

function Confirmation({
  cart,
  clientDetails,
  clientAddress,
  payment,
  onBack,
  onConfirm,
}) {
  return (
    <div>
      <h2>Order Confirmation</h2>

      <h3>Personal Info</h3>
      <p>{clientDetails.firstName}</p>
      <p>{clientDetails.lastName}</p>
      <p>{clientDetails.email}</p>

      <h3>Address</h3>
      <p>{clientAddress.street}</p>
      <p>
        {clientAddress.city}, {clientAddress.zip}
      </p>
      <p>{clientAddress.country}</p>

      <h3>Payment</h3>
      <p>{payment.paymentMethod === 'creditCard' ? 'Credit Card' : 'PayPal'}</p>

      <h3>Items</h3>
      {cart.map((item) => (
        <p key={item.id}>
          {item.name} - €{item.price} x {item.quantity}
        </p>
      ))}

      <button onClick={onBack}>Back</button>
      <button onClick={onConfirm}>Place Order</button>
    </div>
  );
}

// Add PropTypes validation
Confirmation.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired, // Array of cart items, each with specific properties
  clientDetails: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  clientAddress: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }),
  payment: PropTypes.shape({
    paymentMethod: PropTypes.oneOf(['creditCard', 'paypal']).isRequired,
  }).isRequired, // Payment object, restricting to specific methods
  onBack: PropTypes.func.isRequired, // Function to handle "Back"
  onConfirm: PropTypes.func.isRequired, // Function to handle "Place Order"
};

export default Confirmation;
