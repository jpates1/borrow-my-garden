import React from "react";
import { ChakraProvider, Container, Button, Heading, Divider, Card, CardBody, CardFooter, Text, Stack, } from "@chakra-ui/react";

const Messages = () => {
  return (
    <>
    <ChakraProvider>
      <Container>
        <Heading color='teal' paddingBottom='100px' align='center'>Borrow My Garden</Heading>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='unstyled'
        >

          <Stack>
          <CardBody>
          <Heading paddingBottom='50px' size='md'>You are messaging userName</Heading>
          
          <Button colorScheme='teal' variant='outline'>
            Send
          </Button>
          </CardBody>
          </Stack>
          
          </Card>
          <Card align='center'
          variant='unstyled'>
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