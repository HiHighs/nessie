import { useState } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import styles from './Contact.module.css';
import emailConfig from '../emailKey';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        e.target,
        emailConfig.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          // setLoading(false);
          setSubmitted(true);
        },
        (error) => {
          // setLoading(false);
          console.error(error.text);
        }
      );

    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div>
      <Navigation />
      <h1>Contact</h1>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>Vanessa Berskaln</p>
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
                <input
                  type='text'
                  name='message'
                  value={message}
                  placeholder='Your message'
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button>Send</button>
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
    </div>
  );
}

export default Contact;
