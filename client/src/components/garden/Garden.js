import React from "react";
import { ChakraProvider, Container, Divider, Card, CardBody, Text } from "@chakra-ui/react";

const Garden =({ garden }) => {
  return(
    <ChakraProvider>
      <Container className ='garden-box' data-cy='garden' key ={garden._id}>
        <Divider />
        <Card>
          <CardBody>
            <Text className='title'>{garden.title}.</Text>
            <Text pt='2' fontSize='sm'>
              {garden.description}
            </Text>
            <Text pt='2' fontSize='sm'>
              {garden.size}
            </Text>
            <Text pt='2' fontSize='sm'>
              {garden.postcode}
            </Text>
            <Text pt='2' fontSize='sm'>
              {garden.gardenType}
            </Text>
          </CardBody>
        </Card>
      </Container>
    </ChakraProvider>  )
}

export default Garden;