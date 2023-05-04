import React, { useState } from 'react';
import axios from 'axios';
import { ChakraProvider, 
  Container, 
  Button, 
  Heading, 
  FormControl,
  Input,
  FormLabel,
  Stack, 
  Card, 
  CardBody,
  Text,
  Image } from "@chakra-ui/react";

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
    <>
      <ChakraProvider>
        <Container>
          
          <Heading color='teal' paddingBottom='50px' align='center' size='md'>Sign up to Borrow My Garden!</Heading>
        
    
        <FormControl onSubmit={onSubmit}>
          <FormLabel color='teal'>Username</FormLabel>
          <Input placeholder='Username' type="text" value={username} onChange={onChangeUsername} />
          <FormLabel color='teal'>Email</FormLabel>
          <Input placeholder='Email' type="email" value={email} onChange={onChangeEmail} />
          <FormLabel color='teal'>Password</FormLabel>
          <Input placeholder='Password' type="password" value={password} onChange={onChangePassword} />
          <Button marginTop='10px' colorScheme="teal" variant="outline" onClick={onSubmit}>Sign Up</Button>
        </FormControl>
        </Container>
        </ChakraProvider>
      </>

  );
};

export default SignUp;