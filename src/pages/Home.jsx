import Categories from '../Components/Categories/Categories';
import Navigation from '../Components/Navigation/Navigation';
import styles from './Home.module.css';

function Home() {
  return (
    <div>
      <Navigation />
      <div className={styles.container}>
        <h1 className={styles.text}>Hey! Welcome to my portfolio page!</h1>
      </div>
      <Categories />
    </div>
  );
}

export default Home;
