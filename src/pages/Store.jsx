// import Images from '../Components/Images/Images';
import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import styles from './Store.module.css';

function Store() {
  return (
    <div>
      <Navigation />
      <h1 className={styles.fadeIn}>Store</h1>
      {/* <Images folder='Store' className={styles.fadeIn} /> */}
      <h2>COMING SOON</h2>
      <Footer />
    </div>
  );
}

export default Store;
