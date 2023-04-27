import React from "react";
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
            <Button colorScheme='teal' variant='outline'>
              More details
            </Button>
          </CardBody>
        </Card>
      </Container>
      </ChakraProvider>
      </>
  );
}
export default AllGardens;