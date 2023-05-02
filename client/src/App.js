import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
//import Navbar from "./components/navbar";
import SignUp from "./components/signup/SignUp";
import Login from "./components/auth/Login";
import LandingPage from "./components/landingpage/LandingPage";
import CreateGarden from "./components/createGarden/CreateGarden";
import AllGardens from "./components/gardenViews/AllGardensView";
import SingleGardenView from "./components/gardenViews/SingleGardenView";
 
const App = () => {
    const navigate = useNavigate();

 return (
   <div>
     {/* <Navbar /> */}
     <Routes>
       <Route path="/signup" element={<SignUp navigate={navigate} />} />
       <Route path="/login" element={<Login navigate={navigate} />} />
       <Route path="/" element={<LandingPage navigate={navigate} />} />
       <Route path="/add" element={<CreateGarden navigate={navigate} />} />
       <Route path="/gardens" element={<AllGardens navigate={navigate} />} />
       <Route path="/gardens/:_id" element={<SingleGardenView navigate={navigate} />} />
       {/* <Messages /> */}
      </Routes>
   </div>
 );
};
 
export default App;