import React from "react";
import { Link } from "react-router-dom";
import { ChakraProvider, Container, Button, Heading, Divider, Image, Box, Card, CardBody, Text } from "@chakra-ui/react";

const AllGardens = () => {
  return (
    <>
    <ChakraProvider>
      <Container>
        <Heading>Borrow My Garden</Heading>
        <Divider />
        <Card>
          <CardBody>
            <Text>Lovely big garden in Hackney.</Text>
            <Box boxSize='sm'>
              <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
            </Box>                   
            <Link to={"/garden"}>
              <Button colorScheme='teal' variant='outline'> 
              More details
            </Button>
          </Link>  
          </CardBody>
        </Card>
      </Container>
      </ChakraProvider>
      </>
  );
}
export default AllGardens;