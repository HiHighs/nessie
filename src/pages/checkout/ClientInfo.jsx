import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ClientInfo.module.css';

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
    // Validate address
    if (
      !details.firstName ||
      !details.lastName ||
      !details.email ||
      !address.street ||
      !address.city ||
      !address.zip ||
      !address.country
    ) {
      alert('Please fill out all fields.');
      return;
    }
    onNext(details, address);
  }

  return (
    <div className={styles.container}>
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
      <h2 className={styles.addressTitle}>Shipping Address</h2>
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
      <button onClick={onBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

// Add PropTypes validation
ClientInfo.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default ClientInfo;
