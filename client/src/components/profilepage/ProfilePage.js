import React from "react";
// import react-router-dom?

import { ChakraProvider, 
  Container, 
  Button, 
  Heading, 
  FormControl,
  Input,
  FormLabel,
  Stack, 
  Card, 
  CardBody, 
  Text, 
  Image } from "@chakra-ui/react";

const ProfilePage = () => {

return (
  <>
  <ChakraProvider>
    <Container>
      <Heading align='center'>Borrow My Garden</Heading>
      <Button colorScheme='teal' variant='outline'>
        View messages
      </Button>
      <Stack paddingY='20px'>
      <Heading size='md'>My Garden</Heading>
      <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='unstyled'
        >

          <Stack>
          <CardBody>
          <Text pt='2' fontSize='sm'>
          Unused raised beds.
          </Text>
          <Button colorScheme='teal' variant='outline'>
        More details - this goes to view my listing page
      </Button>
      </CardBody>
      </Stack>
          <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://asenhoradomonte.com/wp-content/uploads/2014/06/new_raised_beds.jpg'
    borderRadius='lg'
  />
 
      
      </Card>
      <Heading size='md'>Update your details</Heading>
      <Card variant='unstyled'>
          <CardBody>
          
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
          </CardBody>
        </Card>

      </Stack>
    </Container>
  </ChakraProvider>
  </>
);
}
export default ProfilePage;