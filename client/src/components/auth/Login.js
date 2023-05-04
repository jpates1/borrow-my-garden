import React, { useState } from 'react';
import axios from 'axios';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Card,
  HStack,
  CardBody,
  Center
} from '@chakra-ui/react';
import Logo from "./logo-login.png";

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
    
    <Box pt="100">
      <Center>
      <Stack spacing="20">
      <VStack as="header" spacing="6" mt="8">
      <img 
        src={Logo} 
        alt='Logo' 
        width={150} 
        height={95} />
      </VStack>
      <Card bg="#f6f8fa" variant="outline" borderColor="#d8dee4" maxW="308px" pt="20" pb="20">
        <CardBody pr="15" pl="15">
          <form onSubmit={handleSubmit}>
            <Stack spacing="15">
              <FormControl >
                
                <FormLabel size="sm" color='teal' pb="8">Email</FormLabel>
                
                <Input 
                  type='text' 
                  placeholder='Email' 
                  bg="white" 
                  borderColor="#d8dee4" 
                  size="sm" 
                  borderRadius="6px" 
                  id="email"  
                  value={ email } 
                  onChange={handleEmailChange} 
                />
                
              </FormControl>
              <FormControl>
                
                  <FormLabel size="sm" color="teal" pb="8">Password</FormLabel>
                  <Input 
                    placeholder='Password' 
                    bg="white" 
                    borderColor="#d8dee4" 
                    size="sm" 
                    borderRadius="6px" 
                    id="password" 
                    type='password' 
                    value={ password } 
                    onChange={handlePasswordChange} 
                  />
                
              </FormControl>
            
              <Button 
                bg="#2da44e" 
                color="white" 
                size="sm" 
                borderRadius="6px"
                _hover={{ bg: "#2c974b" }} 
                _active={{bg: "#298e46"}} 
                marginTop='10px' 
                 
                variant="solid" 
                role='submit-button' 
                id='submit' type="submit" 
                value="Submit"
              >
              Sign In
              </Button>

            </Stack>
          </form>
        </CardBody>
      </Card>

      <Card variant='outline' borderColor='#d0d7de'>
            <CardBody>
              <Center>
                <HStack fontSize='sm' spacing='1'>
                  <Text>New here? </Text>
                  <Link isExternal color='#0969da' href='#'>
                    Create an account.
                  </Link>
                </HStack>
              </Center>
            </CardBody>
        </Card>





      </Stack>
      </Center>
    </Box>
  );
}

export default Login;









