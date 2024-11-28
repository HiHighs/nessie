import styles from './About.module.css';
import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import nessie from '../assets/About/nessie.png';

function About() {
  return (
    <div>
      <Navigation />
      <h1 className={styles.fadeIn}>About me</h1>
      <div className={`${styles.container} ${styles.fadeIn}`}>
        <img className={styles.nessie} src={nessie} />
        <div className={styles.text}>
          <p className={styles.first}>
            Hi! I am Vanessa, a visual artist based in Belgium. I would love to
            share how I see the world and I hope you would enjoy it too.
            <p>
              Through my art, I hope to evoke feelings of calm and happiness in
              my viewers. I would love to inspire others to create their own art
              and appreciate the beauty of ordinary things around them.
            </p>
            <p>
              I mostly use watercolors, I love the intensity and transparency
              they can offer. Its internal freedom allowed me to make my style
              loose, free and childlike. I find beauty in the small and maybe
              ordinary things: unexpected color combinations, insects, birds,
              shapes and silhouettes of the natural world. Although my art
              appears bright and cheerful, sometimes I am exploring themes of
              grief and sadness in it.
            </p>
            <p>
              If you would like to discuss a future commission or collaboration,
              please email{' '}
              <a href='mailto:vanessa.berskaln@gmail.com'>
                vanessa.berskaln@gmail.com
              </a>
            </p>
            <p>
              Explore more of my art on my{' '}
              <a
                href='https://www.instagram.com/extraverted_wallflower'
                target='_blank'
              >
                Instagram
              </a>{' '}
              page.
            </p>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
