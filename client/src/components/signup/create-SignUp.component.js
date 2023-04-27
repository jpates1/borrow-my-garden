import React, { Component } from 'react';
// import './SignUpForm.css';
import axios from 'axios';
export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    
    this.state = {
      username: '',
      password: '',
      email: ''
    };
  }
 
  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  }
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }
  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }
    console.log(user);
    axios.post('http://localhost:2000/users/add', user)
    .then(res => console.log(res.data))
    this.setState ({
    username: '',
    password: '',
    email: ''
  })

  }
  render() {
  
    return (
      <div className="SignUpForm">
        <form onSubmit={this.onSubmit}>
          <label>Username</label>
          <input type="text" value={this.state.username} onChange={this.onChangeUsername} />
          <label>Password</label>
          <input type="password" value={this.state.password} onChange={this.onChangePassword} />
          <label>Email</label>
          <input type="email" value={this.state.email} onChange={this.onChangeEmail} />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
      
  
    
  
}