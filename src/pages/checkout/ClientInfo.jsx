import { useState } from 'react';
import PropTypes from 'prop-types';

function ClientInfo({ onNext }) {
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
    <div>
      <h2>Personal Details</h2>
      <form>
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
      <h2>Shipping Address</h2>
      <form>
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
          <option value='belgium'>Belgium</option>
          <option value='netherlands'>The Netherlands</option>
          <option value='luxemburg'>Luxemburg</option>
        </select>
      </form>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

// Add PropTypes validation
ClientInfo.propTypes = {
  onNext: PropTypes.func.isRequired, // Ensures 'onNext' is passed and is a function
};

export default ClientInfo;
