import React from "react";
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
          <Button colorScheme='teal' variant='outline'>
            Connect
          </Button>
          </CardBody>
          <CardFooter>
            <Button colorScheme='teal' variant='outline'>
              Take me back to Garden listings
            </Button>
          </CardFooter>
          </Card>
      </Container>
    </ChakraProvider>
      </>
  );
}

export default ViewSingleGarden;