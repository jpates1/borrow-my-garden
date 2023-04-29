import React from "react";
import { Link } from "react-router-dom";
import { ChakraProvider, Container, Button, Heading, Divider, Card, CardBody, CardFooter, Text } from "@chakra-ui/react";

const ViewSingleGarden = () => {
  return (
    <>
    <ChakraProvider>
      <Container>
        <Heading>Single Garden</Heading>
        <Divider />
        <Card>
          <CardBody>
          <Text>Lovely big garden in Hackney.</Text>
          <Text pt='2' fontSize='sm'>
          South facing garden that I sadly don't have time to tend.
        </Text>
          <Button colorScheme='gray' variant='outline' isDisabled='true'>
            Connect
          </Button>
          </CardBody>
          <CardFooter>
            <Link to={"/gardens"}>
              <Button colorScheme='teal' variant='outline'> 
                Take me back to Garden listings
            </Button>
          </Link>  
          </CardFooter>
          </Card>
      </Container>
    </ChakraProvider>
      </>
  );
}

export default ViewSingleGarden;