import React from "react";
import { ChakraProvider, Container, Button, Heading, Divider, Card, CardBody, CardFooter, Text, Stack, } from "@chakra-ui/react";

const Messages = () => {
  return (
    <>
    <ChakraProvider>
      <Container>
        <Heading align='center'>Borrow My Garden</Heading>
        <Divider />
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
        >

          <Stack>
          <CardBody>
          <Heading size='md'>You are messaging userName goes here</Heading>
          
          <Button colorScheme='teal' variant='outline'>
            Send
          </Button>
          </CardBody>
          </Stack>
          
          </Card>
          <Card align='center'>
            <CardBody>
            <CardFooter>
            {/* <Link to={"/profilepage"}> */}
              <Button colorScheme='teal' variant='outline'> 
                Back to my profile page
              </Button>
          {/* </Link>   */}
          </CardFooter>
            </CardBody>
          </Card>
      </Container>
    </ChakraProvider>
    </>
  );
}

export default Messages;