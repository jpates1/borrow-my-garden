import React from "react";
import {
  ChakraProvider,
  Container,
  Link,
  Button,
  Divider,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom';


const Garden = ({ garden, detailed }) => {
  return (
    <ChakraProvider>
      <Container className="garden-box" data-cy="garden" key={garden._id}>
        <Divider />
        <Card>
          <CardBody>
            <Text className="title">{garden.title}.</Text>
            <Text pt="2" fontSize="sm">
              {garden.description}
            </Text>
            {detailed && (
              <>
                <Text pt="2" fontSize="sm">
                  {garden.size}
                </Text>
                <Text pt="2" fontSize="sm">
                  {garden.postcode}
                </Text>
                <Text pt="2" fontSize="sm">
                  {garden.gardenType}
                </Text>
              </>
            )}
          </CardBody>
          {detailed ? null : (
              <Link as={ReactRouterLink} to={`/gardens/${garden._id}`}>
                <Button colorScheme="teal" variant="outline">
                  More Details
                </Button>
              </Link>
          )}
              <Link as={ReactRouterLink} to={`/profilechat`}>
                <Button colorScheme="teal" variant="outline">
                  Connect
                </Button>
              </Link>
        </Card>
      </Container>
    </ChakraProvider>
  );
};

export default Garden;