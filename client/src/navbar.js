import { Box, Button, Flex, Spacer, HStack} from "@chakra-ui/react";
import { Link, useNavigate} from "react-router-dom";
import React, { useState } from "react";
import logosmall from "./images/logosmall.png";

export default function Navbar() {
  

  return (
    <Flex as ="nav" p="10px" bg="white" alignItems="center" gap="10px">
      <Box boxSize='sm'>
        <img src={logosmall} alt='Logo' width={150} height={250} />
      </Box>
      <Spacer />
      <HStack spacing="20px">
      
            <Box bg="" p="10px">
              <Link to={"/"}>Home</Link>
            </Box>
            <Box bg="" p="10px">
              <Link to={"/gardens"}>Browse Gardens</Link>
            </Box>
            <Box bg="" p="10px">
              <Link to={"/add"}>List a Garden</Link>
            </Box>
            <Box bg="" p="10px">
              <Link to={"/user"}>My Profile</Link>
            </Box>
            <Box bg="" p="10px">
              <Link to={"/login"}>Logout</Link>
            </Box>
        
      </HStack>
    </Flex>
  );
}
