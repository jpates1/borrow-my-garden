import React from "react";
import { ChakraProvider, Container, Link, Button, Divider, Card, CardBody, Text } from "@chakra-ui/react";

const SimpleGarden =({ garden }) => {
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
          </CardBody>
          <Link to={`http://localhost:2000/gardens/${garden._id}`}>
              <Button colorScheme='teal' variant='outline'> 
                More Details
            </Button>
          </Link>
          <Button colorScheme='gray' variant='outline' isDisabled='true'>
            Connect
          </Button>
        </Card>
      </Container>
    </ChakraProvider>  
  )
}

export default SimpleGarden;