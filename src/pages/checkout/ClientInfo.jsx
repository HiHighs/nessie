import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ClientInfo.module.css';
import back from '../../assets/Buttons/back.png';
import next from '../../assets/Buttons/next.png';

function ClientInfo({ onBack, onNext }) {
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [address, setAddress] = useState({
    street: '',
    city: '',
    zip: '',
    country: 'Country',
  });

  function handleDetailsChange(e) {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  }

  function handleAddressChange(e) {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  }

  function handleNext() {
    const allInputs = document.querySelectorAll('input, select');
    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    allInputs.forEach((input) => {
      if (input.name === 'email' && !emailRegex.test(input.value)) {
        input.style.border = '1px solid red';
        isValid = false;
      } else if (!input.value || input.value === 'Country') {
        input.style.border = '1px solid red';
        isValid = false;
      } else {
        input.style.border = '1px solid transparent';
        input.style.borderBottom = '1px solid black';
      }
    });

    if (!isValid) {
      return;
    }

    onNext(details, address);
  }

  return (
    <div className={styles.container}>
      <div className={styles.formsContainer}>
        <div className={styles.left}>
          <h1 className={styles.detailsTitle}>Personal Details</h1>
          <form className={styles.detailsForm}>
            <input
              name='firstName'
              placeholder='First name'
              value={details.firstName}
              onChange={handleDetailsChange}
              required
            />
            <input
              name='lastName'
              placeholder='Last name'
              value={details.lastName}
              onChange={handleDetailsChange}
              required
            />
            <input
              name='email'
              placeholder='Email'
              value={details.email}
              onChange={handleDetailsChange}
              required
            />
          </form>
        </div>
        <div className={styles.right}>
          <h1 className={styles.addressTitle}>Shipping Address</h1>
          <form className={styles.addressForm}>
            <input
              name='street'
              placeholder='Street'
              value={address.street}
              onChange={handleAddressChange}
              required
            />
            <input
              name='city'
              placeholder='City'
              value={address.city}
              onChange={handleAddressChange}
              required
            />
            <input
              name='zip'
              placeholder='ZIP Code'
              value={address.zip}
              onChange={handleAddressChange}
              required
            />
            <select
              name='country'
              id='country'
              value={address.country}
              onChange={handleAddressChange}
            >
              <option value='Country' disabled selected>
                Select a country
              </option>
              <option value='Belgium'>Belgium</option>
              <option value='Netherlands'>The Netherlands</option>
              <option value='Luxemburg'>Luxemburg</option>
            </select>
          </form>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <img src={back} className={styles.back} onClick={onBack} />
        <img src={next} className={styles.next} onClick={handleNext} />
      </div>
    </div>
  );
}

// Add PropTypes validation
ClientInfo.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default ClientInfo;
