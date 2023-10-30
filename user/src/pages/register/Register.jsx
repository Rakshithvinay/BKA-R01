// RegistrationForm.js
import React, { Component } from 'react';
import './register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleRegistration = () => {
    const { username, email, password } = this.state;

    // You can add your registration logic here
    console.log('User Registration Data:', { username, email, password });

    // Reset the form
    this.setState({
      username: '',
      email: '',
      password: '',
    });
  }

  render() {
    return (
      <div className="register-container">
        <h1>Hotel Booking App - Register</h1>
        <form>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />

          <button type="button" onClick={this.handleRegistration}>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
