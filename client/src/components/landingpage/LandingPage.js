import React from "react";
import { Link } from "react-router-dom";
import { ChakraProvider, Container, Button, Heading, Divider, Image, Box, Flex } from "@chakra-ui/react";

const LandingPage = () => {

  return (
    <>
    <ChakraProvider>
      <Container>
        <Heading>Borrow My Garden</Heading>
        <Divider />
        <Flex>
        <Container p='4'>   
          <Box boxSize='sm'>
            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          </Box>
          <Link to={"/gardens"}>
            <Button colorScheme='teal' variant='outline'> 
              Find a garden
            </Button>
          </Link>  
        </Container>
        <Container p='4'>
          <Box boxSize='sm'>
            <Image src='https://www.rhs.org.uk/getmedia/80a72c91-1f32-42cc-9fd9-d434f4f0623f/Cottage-garden-hero.jpg?width=800&height=533' alt='Garden' />
          </Box>
          <Link to={"/add"}>
            <Button colorScheme='teal' variant='outline'> 
              List a garden
            </Button>
          </Link>     
        </Container>
        </Flex>
      </Container>  
      </ChakraProvider>
      </>
  );
}

export default LandingPage;