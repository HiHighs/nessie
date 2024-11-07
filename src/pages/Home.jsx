import Categories from '../Components/Categories/Categories';
import Footer from '../Components/Footer/Footer';
import Navigation from '../Components/Navigation/Navigation';
import styles from './Home.module.css';

function Home() {
  // const [mobileMenu] = useState(false);

  return (
    <div>
      {/* <Navigation mobileMenu={mobileMenu} /> */}
      <Navigation />
      <div className={`${styles.container} ${styles.fadeIn}`}>
        <h1 className={styles.text}>Hey! Welcome to my portfolio page!</h1>
      </div>
      <Categories className={styles.fadeIn} />
      <Footer />
    </div>
  );
}

export default Home;
