import back from '../../assets/Buttons/back.png';
import placeOrder from '../../assets/Buttons/place_order.png';
import PropTypes from 'prop-types';
import styles from './Confirmation.module.css';
import Footer from '../../Components/Footer/Footer';

function Confirmation({
  cart,
  clientDetails,
  clientAddress,
  onBack,
  onConfirm,
}) {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.pageContainer}>
          <h2>Order Confirmation</h2>

          <div className={styles.gridContainer}>
            <div className={styles.column}>
              <div className={styles.gridItem}>
                <h3>Personal Info</h3>
                <p>{clientDetails.firstName}</p>
                <p>{clientDetails.lastName}</p>
                <p>{clientDetails.email}</p>
              </div>

              <div className={styles.gridItem}>
                <h3 className={styles.address}>Address</h3>
                <p>{clientAddress.street}</p>
                <p>
                  {clientAddress.city}, {clientAddress.zip}
                </p>
                <p>{clientAddress.country}</p>
                <div />
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.gridItem}>
                <h3>Payment</h3>
                <p className={styles.payment}>
                  You’ll receive an email with payment instructions. <br />
                  Once I receive your payment, I’ll ship your order as soon as
                  possible.
                </p>
              </div>

              <div className={styles.gridItem}>
                <h3>Items</h3>
                {cart.map((item) => (
                  <p key={item.id}>
                    {item.name} ({item.type}) - €{item.price} x {item.quantity}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.buttonsContainer}>
            <img src={back} className={styles.back} onClick={onBack} />
            <img src={placeOrder} className={styles.next} onClick={onConfirm} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

Confirmation.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
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
  onBack: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default Confirmation;
