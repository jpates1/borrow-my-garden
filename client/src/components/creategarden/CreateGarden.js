import React from "react";
import { ChakraProvider, Container, Button, Heading, Divider, Input, Select } from "@chakra-ui/react";

const CreateGarden = () => {
  return (
    <>
    <ChakraProvider>
      <Container>
        <Heading>Borrow My Garden</Heading>
        <Divider />
        <Input placeholder='Title' /> 
        <Input placeholder='Description' /> 
        <Input placeholder='Size' /> 
        <Input placeholder='Postcode' /> 
        <Select placeholder='Type of Garden'>
          <option value='flower'>flower</option>
          <option value='vegetable'>vegetable</option>
          <option value='herb'>no James, not herbs!</option>
        </Select>   
      </Container>
      </ChakraProvider>
      </>
  );
  // }
}
export default CreateGarden;