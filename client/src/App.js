import React from "react";
// import { ChakraProvider } from '@chakra-ui/react';
 
// We use Route in order to define the different routes of our application
import { Route, Routes, useNavigate } from "react-router-dom";
 
// We import all the components we need in our app
//import Navbar from "./components/navbar";
import SignUp from "./components/signup/create-SignUp.component";
//import Edit from "./components/edit";
//import Create from "./components/create";
 
const App = () => {
  const navigate = useNavigate();
 return (
  // <ChakraProvider>
   <div>
     <Routes>
       <Route path="/signup" element={<SignUp navigate={navigate} />} />
      </Routes>
   </div>
  // </ChakraProvider>
 );
};
 
export default App;