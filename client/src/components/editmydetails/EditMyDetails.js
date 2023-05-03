import React from "react";
import { ChakraProvider, Container, Button, Heading, Divider, Card, Input, CardBody, CardFooter, Text, FormControl, FormLabel } from "@chakra-ui/react";

const EditMyDetails = () => {

  return (
    <>
    <ChakraProvider>
      <Container>
        <Heading align='center'>Borrow My Garden</Heading>
        <Divider />
        <Card>
          <CardBody>
          <Heading size='md'>Update your details</Heading>
          <FormControl paddingY='20px'>
            <FormLabel>New username</FormLabel>
            <Input type='text' />
            <FormLabel>New email address</FormLabel>
            <Input type='email' />
            <FormLabel>New password</FormLabel>
            <Input type='password' />
          </FormControl>
          <Button colorScheme='teal' variant='outline'>
            Save
          </Button>
            <CardFooter>
              <Button colorScheme='teal' variant='outline'>
              Back to my profile page
              </Button>
            </CardFooter>
          </CardBody>
        </Card>
      </Container>
    </ChakraProvider>
    </>
  );

}

export default EditMyDetails;