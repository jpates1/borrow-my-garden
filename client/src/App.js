import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
//import Navbar from "./components/navbar";
import SignUp from "./components/signup/SignUp";
import Login from "./components/auth/Login";
import LandingPage from "./components/landingpage/LandingPage";
import ProfilePage from "./components/profile/Profile";
import CreateGarden from "./components/createGarden/CreateGarden";
import AllGardens from "./components/allgardens/AllGardens";
import ViewSingleGarden from "./components/viewsinglegarden/ViewSingleGarden";
 
const App = () => {
    const navigate = useNavigate();

 return (
   <div>
     {/* <Navbar /> */}
     <Routes>
       <Route path="/user/:id" element={<ProfilePage navigate={navigate} />} />
       <Route path="/signup" element={<SignUp navigate={navigate} />} />
       <Route path="/login" element={<Login navigate={navigate} />} />
       <Route path="/" element={<LandingPage navigate={navigate} />} />
       <Route path="/add" element={<CreateGarden navigate={navigate} />} />
       <Route path="/gardens" element={<AllGardens navigate={navigate} />} />
       <Route path="/garden" element={<ViewSingleGarden navigate={navigate} />} />
       {/* <Messages /> */}
      </Routes>
   </div>
 );
};
 
export default App;