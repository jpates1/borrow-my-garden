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
        navigate('/');
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
    <>
      <ChakraProvider>
        <Container>
          
          <Heading color='teal' paddingBottom='50px' align='center' size='md'>Login Page</Heading>
  
      <form onSubmit={handleSubmit}>
        <FormLabel color='teal'>Email</FormLabel>
        <Input placeholder='Email' id="email" type='text' value={ email } onChange={handleEmailChange} />
        <FormLabel color='teal'>Password</FormLabel>
        <Input placeholder='Password' id="password" type='password' value={ password } onChange={handlePasswordChange} />
        <Button marginTop='10px' colorScheme="teal" variant="outline" role='submit-button' id='submit' type="submit" value="Submit">Sign In</Button>
      </form>

    </Container>
    </ChakraProvider>
    </>
  );







  // return (
  //   <div>
  //     <h1>Login Page</h1>
  //     <form onSubmit={handleSubmit}>
  //       <input placeholder='Email' id="email" type='text' value={ email } onChange={handleEmailChange} />
  //       <input placeholder='Password' id="password" type='password' value={ password } onChange={handlePasswordChange} />
  //       <button role='submit-button' id='submit' type="submit" value="Submit">Sign In</button>
  //     </form>
  //   </div>
  // );
}

export default Login;









