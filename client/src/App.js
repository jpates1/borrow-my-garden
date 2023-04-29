import React from "react";
 
// We use Route in order to define the different routes of our application

import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
//import Navbar from "./components/navbar";
import SignUp from "./components/signup/create-SignUp.component";
import Login from "./components/auth/Login";
import CreateGarden from "./components/createGarden/CreateGarden";
//import Edit from "./components/edit";
//import Create from "./components/create";
 
const App = () => {
 return (
   <div>
     {/* <Navbar /> */}
     <Routes>
       <Route path="/signup" element={<SignUp navigate={navigate} />} />
       <Route path="/login" element={<Login navigate={navigate} />} />
       <Route path="/" element={<CreateGarden navigate={navigate} />} />
      </Routes>
   </div>
 );
};
 
export default App;



// import React from "react";
// // import { ChakraProvider } from '@chakra-ui/react';
 
// // We use Route in order to define the different routes of our application
// import { Route, Routes, useNavigate } from "react-router-dom";
 
// // We import all the components we need in our app
// //import Navbar from "./components/navbar";
// import SignUp from "./components/signup/SignUp";
// //import Edit from "./components/edit";
// //import Create from "./components/create";
 
// const App = () => {
//   const navigate = useNavigate();
//  return (
//   // <ChakraProvider>
//    <div>
//      <Routes>
//        <Route path="/signup" element={<SignUp navigate={navigate} />} />
//       </Routes>
//    </div>
//   // </ChakraProvider>
//  );
// };
 
// export default App;