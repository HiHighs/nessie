import styles from './Overview.module.css';

function Overview() {
  return (
    <div className={styles.container}>
      <h2>Thank You!</h2>
      <p>Your order has been placed successfully!</p>
      <p>
        You’ll receive an email with payment instructions. <br />
        Once I receive your payment, I’ll ship your order as soon as possible.
      </p>
      <p> &#8331; Nessie :)</p>
    </div>
  );
}

export default Overview;
