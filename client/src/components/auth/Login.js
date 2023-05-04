import React, { useState } from 'react';
import axios from 'axios';
import {
  ChakraProvider,
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
  AspectRatio,
  Image, Card, CardBody, Divider, CardFooter
  
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
    <ChakraProvider>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Card maxW='md' boxShadow={{
    base: "none", md: "0 0 8px 2px rgba(0, 0, 255, 0.3)",
  }}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} minW={'sm'} py={6} px={6}>
            <Stack align={'center'}>

          <Image src={Logo}
              alt='logo'
              height={100}
                width={150}
                my={4}
          />
          </Stack>
          <CardBody>
          <form onSubmit={handleSubmit}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={handleEmailChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={handlePasswordChange} />
            </FormControl>
                <Button
                  my={6}
                  colorScheme='teal'
                type="submit">
                Log in
                </Button>
        </form>
        </CardBody>

        <CardFooter>
                <Divider />
                <Button
                  my={6}
                _hover={{
                  bg: 'blue.500',            
                }}>
                Create new account
                </Button>
         </CardFooter>
        </Stack>
      </Card>
    </Flex>
  </ChakraProvider>  
       
  );
}

export default Login;

{/* <Card maxW='sm'>
      <CardBody>
        <AspectRatio maxW='200px' ratio={5 / 3}>
  <Image
          src={Logo}
          alt='logo'
        />
          </AspectRatio> */}


 {/* <Stack mt='6' spacing='3'>
          <Heading size='md'>Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            $450
          </Text>
        </Stack>
      </CardBody>
    </Card> */}
    {/* </Flex> */}




{/* <Box pt="100">
      <Center>
      <Card  variant="outline" stroke="10px" border={"black"} maxW="308px" pt="20" pb="20">
      <Stack spacing="20">
      <VStack as="header" spacing="6" mt="8">
      <img 
        src={Logo} 
        alt='Logo' 
        width={150} 
        height={95} />
      </VStack>
      
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
      </Card>
      </Center>
    </Box> 
   */}