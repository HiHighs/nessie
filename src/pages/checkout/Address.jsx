import { useState } from 'react';
import Header from '../../Components/Header/Header';
import PropTypes from 'prop-types';

function Address({ onNext }) {
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    zip: '',
    country: 'Country',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  }

  function handleNext() {
    // Validate address
    if (
      !address.name ||
      !address.street ||
      !address.city ||
      !address.zip ||
      !address.country
    ) {
      alert('Please fill out all fields.');
      return;
    }
    onNext(address);
  }

  return (
    <div>
      <Header />
      <h2>Shipping Address</h2>
      <form>
        <input
          name='name'
          placeholder='Name'
          value={address.name}
          onChange={handleChange}
          required
        />
        <input
          name='street'
          placeholder='Street'
          value={address.street}
          onChange={handleChange}
          required
        />
        <input
          name='city'
          placeholder='City'
          value={address.city}
          onChange={handleChange}
          required
        />
        <input
          name='zip'
          placeholder='ZIP Code'
          value={address.zip}
          onChange={handleChange}
          required
        />
        <select
          name='country'
          id='country'
          value={address.country}
          onChange={handleChange}
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
Address.propTypes = {
  onNext: PropTypes.func.isRequired, // Ensures 'onNext' is passed and is a function
};

export default Address;
