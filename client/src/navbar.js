import { Text, Box, Button, Flex, Heading, Spacer, HStack, Img } from "@chakra-ui/react";
import React from "react";
import logo from "./images/logo.png";


export default function Navbar() {
  return (
  <Flex as ="nav" p="10px" bg="white" alignItems="center" gap="10px">
    <Box boxSize='sm'>
      {/* <Img src={'./logo.png'} alt='Logo' /> */}
      <img src={logo} alt='Logo' width={150} height={250} />
    </Box>
    {/* <Heading as="h1">Borrow My Garden</Heading> */}
    <Spacer/>
    <HStack spacing="20px">
      <Box bg="" p="10px">Browse Gardens</Box>
      <Box bg="" p="10px">List a Garden</Box>
      <Box bg="" p="10px">Account</Box>
      <Button>Logout</Button>
    </HStack>
    
  </Flex> 
  )
}








// import React from "react";
// import { Link } from "react-router-dom";
// import { Flex, Button, ButtonGroup, Spacer } from "@chakra-ui/react"

// export default function Navbar() {
//   return <Flex bg='tomato' w='100%' p={4} color='white'><nav className="nav">
    
//     <a heref="/" className="site-title">Borrow My garden</a>
    
//     <ButtonGroup gap='15'>
//       <Link to={"/add"}>
//               <Button colorScheme='teal' variant='outline'> 
//                 List My Garden
//               </Button>
//       </Link> 
//       <Link to={"/gardens"}>
//               <Button colorScheme='teal' variant='outline'> 
//                 Browse Gardens
//               </Button>
//       </Link> 
//       <Link to={"/account"}>
//             <Button colorScheme='teal' variant='outline'> 
//               Account
//             </Button>
//       </Link> 
//       <Link to={"/logout"}>
//             <Button colorScheme='teal' variant='outline'> 
//               Logout
//             </Button>
//       </Link>

//     </ButtonGroup>
    

    
//   </nav>
//   </Flex>
// }