import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
//import Navbar from "./components/navbar";import RecordList from "./components/recordList";
//import Edit from "./components/edit";
import Create from "./components/signup/Create";
 
const App = () => {
 return (
   <div>
     {/* <Navbar /> */}
     <Routes>
       {/* <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} /> */}
       <Route path="/create" element={<Create />} />
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