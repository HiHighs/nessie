import Footer from '../../Components/Footer/Footer';
import styles from './Overview.module.css';

function Overview() {
  return (
    <>
      <div className={styles.container}>
        <h2>Thank You!</h2>
        <p>Your order has been placed successfully!</p>
        <p>
          You’ll receive an email with payment instructions. <br />
          Once I receive your payment, I’ll ship your order as soon as possible!
        </p>
        <p>If you did not receive an email, check your spam folder.</p>
        <p> &#8331; Nessie :)</p>
      </div>
      <div className={styles.footerDiv}>
        <Footer />
      </div>
    </>
  );
}

export default Overview;
