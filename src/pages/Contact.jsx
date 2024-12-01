import { useState } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import styles from './Contact.module.css';
import Footer from '../Components/Footer/Footer';
import send from '../assets/Buttons/send.png';
import { sendContactEmail } from '../services/emailService/emailService';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(sendContactEmail(e));

    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className={styles.page}>
      <Navigation />
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>
            Explore more of my art on my{' '}
            <a
              href='https://www.instagram.com/extraverted_wallflower'
              target='_blank'
            >
              Instagram
            </a>{' '}
            page!
          </p>
          <p>
            If you would like to discuss a future commission or collaboration,
            please email{' '}
            <a href='mailto:vanessa.berskaln@gmail.com'>
              vanessa.berskaln@gmail.com
            </a>{' '}
            or leave a message through the form :)
          </p>
        </div>

        <div className={styles.right}>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className={styles.formElement}>
                <input
                  type='text'
                  name='name'
                  value={name}
                  placeholder='Your name'
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formElement}>
                <input
                  type='email'
                  name='email'
                  value={email}
                  placeholder='Your email'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formElement}>
                <textarea
                  name='message'
                  value={message}
                  placeholder='Your message'
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button className={styles.sendButton}>
                <img className={styles.send} src={send} alt='Send' />
              </button>
            </form>
          ) : (
            <div>
              <p>Your message has been successfully sent!</p>
              <button
                className={styles.back}
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
