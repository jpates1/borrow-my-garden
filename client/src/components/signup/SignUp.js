import React, { useState } from 'react';
import axios from 'axios';

const SignUp = ({ navigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
      email,
    };
    console.log(user);
    axios
      .post('http://localhost:2000/users/add', user)
      .then((res) => {
        console.log(res.data);
        setUsername('');
        setPassword('');
        setEmail('');
        navigate('/login');
      });
  };

  return (
    <div className="SignUpForm">
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input type="text" value={username} onChange={onChangeUsername} />
        <label>Password</label>
        <input type="password" value={password} onChange={onChangePassword} />
        <label>Email</label>
        <input type="email" value={email} onChange={onChangeEmail} />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;