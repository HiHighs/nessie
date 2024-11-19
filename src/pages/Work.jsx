import Images from '../Components/Images/Images';
import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import styles from './Work.module.css';

function Work() {
  return (
    <div>
      <Navigation />
      <h1 className={styles.fadeIn}>Work</h1>
      <Images folder='Work' className={styles.fadeIn} />
      <Footer />
    </div>
  );
}

export default Work;
