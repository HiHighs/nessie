import Categories from '../Components/Categories/Categories';
import Footer from '../Components/Footer/Footer';
import Navigation from '../Components/Navigation/Navigation';
import styles from './Home.module.css';
import hey from '../assets/Home/hey.png';

function Home() {
  return (
    <div>
      <Navigation />
      <div className={`${styles.container} ${styles.fadeIn}`}>
        {/* <h1 className={styles.text}>Hey! Welcome to my portfolio page!</h1> */}
        <img src={hey} className={styles.hey} />
      </div>
      <Categories className={styles.fadeIn} />
      <Footer />
    </div>
  );
}

export default Home;
