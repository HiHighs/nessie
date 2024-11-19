import styles from './About.module.css';
import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import nessie from '../assets/About/nessie.png';

function About() {
  return (
    <div>
      <Navigation />
      <div className={`${styles.container} ${styles.fadeIn}`}>
        <img className={styles.nessie} src={nessie} />
        <div className={styles.text}>
          <h1>About me</h1>
          <p className={styles.first}>
            Hi! Im Vanessa, a visual artist based in Belgium. Im passionate
            about color, illustration, abstract art and watercolor. I would love
            to share how I see the world and I hope you would enjoy it too.
            <p>
              I fell in love with watercolors. I love the intense colors and
              transparency they can offer. Its internal freedom allowed me to
              make my style loose, free, and childlike.
            </p>
            <p>
              I find beauty in the small and maybe ordinary things: unexpected
              color combinations, insects, birds, shapes and silhouettes of the
              natural world. Although my art appears bright and cheerful,
              sometimes I am exploring themes of grief and sadness in it. The
              concept of tears fascinates me.
            </p>
            <p>
              Through my art, I hope to evoke feelings of calm and happiness in
              my viewers. I would love to inspire others to create their own art
              and appreciate the beauty of ordinary things around them.
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
