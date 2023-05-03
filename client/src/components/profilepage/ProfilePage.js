import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Garden from "../garden/Garden";


import { ChakraProvider, Container, Button, Heading, Divider, Stack } from "@chakra-ui/react";
  const ProfilePage = ( ) => {
    const [gardens, setGardens] = useState([]);
  
    useEffect(() => {
      const getGardens = async () => {
        const userId = localStorage.getItem("user_id"); // assuming the user's _id is stored in localStorage
        const res = await axios.get(`http://localhost:2000/gardens?owner=${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        
          setGardens(res.data.gardens);
        };
        getGardens();
      },[]);
         

  
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
      <div>
      <ul>
      {gardens.map((garden) => (
        <li key={garden._id}>
          <h2>{garden.title} </h2>
        </li>
      ))}
      </ul>
      </div>
    
    </Container>
  </ChakraProvider>
  </>
);
}

export default ProfilePage;