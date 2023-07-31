import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const ageAsNumber = parseInt(formData.age, 10);
      const phoneNumberAsNumber = parseInt(formData.phoneNumber, 10);
      if (isNaN(ageAsNumber) || isNaN(phoneNumberAsNumber)) {
        alert('Invalid age or phone number. Please enter valid numbers.');
        return;
      }
      setFormData({ ...formData, age: ageAsNumber, phoneNumber: phoneNumberAsNumber });

      const response = await fetch('https://tiny-elk-sunglasses.cyclic.cloud/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log('Response:', response);
      console.log('Response Data:', responseData);

      if (response.ok) {
        alert('Signup successful! Please log in to continue.');
        // Redirect the user to the login page after successful signup
        window.location.replace('/login');
      } else {
        alert(`Error signing up: ${responseData.error}`);
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Error signing up. Please try again.');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
