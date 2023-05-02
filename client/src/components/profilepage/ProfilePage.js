import React from "react";
// import react-router-dom?

import { ChakraProvider, Container, Button, Heading, Divider, Stack } from "@chakra-ui/react";

const ProfilePage = () => {

return (
  <>
  <ChakraProvider>
    <Container>
      <Heading align='center'>Borrow My Garden</Heading>
      <Divider />
      <Stack paddingY='20px'>
      <Button colorScheme='teal' variant='outline'>
        View my listing
        {/* This button points to the single garden page with the current user's user ID 
        I've kept the view my listing page anyway for the time being since it has the styling.*/}
      </Button>
      <Button colorScheme='teal' variant='outline'>
        Edit my details
      </Button>
      <Button colorScheme='teal' variant='outline'>
        View messages
      </Button>
      </Stack>
      {/* <Card>
        <CardBody>
          <Text>LAUREN</Text>
          <text pt='2' fontSize='sm'>Hi there, thanks for getting in touch...</text>
        </CardBody>
        </Card>
        <Card>
        <CardBody>
          <Text>JIM</Text>
          <text pt='2' fontSize='sm'>I'm afraid we're having renovation work...</text>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Text>SONYA</Text>
          <text pt='2' fontSize='sm'>Hi Sonya, is your garden still available?...</text>
        </CardBody>
      </Card> */}
    </Container>
  </ChakraProvider>
  </>
);
}
export default ProfilePage;