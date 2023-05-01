import React from "react";
import { ChakraProvider, Container, Divider, Card, CardBody, Text } from "@chakra-ui/react";

const DetailedGarden =({ detailedGarden }) => {
  return(
    <ChakraProvider>
      <Container className ='garden-box' data-cy='garden' key ={detailedGarden._id}>
        <Divider />
        <Card>
          <CardBody>
            <Text className='title'>{detailedGarden.title}.</Text>
            <Text pt='2' fontSize='sm'>
              {detailedGarden.description}
            </Text>
            <Text pt='2' fontSize='sm'>
              {detailedGarden.size}
            </Text>
            <Text pt='2' fontSize='sm'>
              {detailedGarden.postcode}
            </Text>
            <Text pt='2' fontSize='sm'>
              {detailedGarden.gardenType}
            </Text>
          </CardBody>
        </Card>
      </Container>
    </ChakraProvider>  )
}

export default DetailedGarden;