import React, { useState } from 'react';
import axios from 'axios';
const Login = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:2000/tokens', { email, password }); //only thing changed here
      if (response.status !== 201) {
        console.log("yay");
        navigate('/login');
      } else {
        console.log("oops");
        window.localStorage.setItem("token", response.data.token);
        navigate('/posts');
      }
    } catch (error) {
      console.error(error);
    }
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Email' id="email" type='text' value={ email } onChange={handleEmailChange} />
        <input placeholder='Password' id="password" type='password' value={ password } onChange={handlePasswordChange} />
        <button role='submit-button' id='submit' type="submit" value="Submit">Sign In</button>
      </form>
    </div>
  );
}
export default Login;