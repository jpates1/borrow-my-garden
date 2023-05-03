import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
//import Navbar from "./components/navbar";
import SignUp from "./components/signup/SignUp";
import Login from "./components/auth/Login";
import LandingPage from "./components/landingpage/LandingPage";
import CreateGarden from "./components/createGarden/CreateGarden";
import AllGardens from "./components/gardenViews/AllGardensView";
import SingleGardenView from "./components/gardenViews/SingleGardenView";
import ProfilePage from "./components/profilepage/ProfilePage";
import ViewMyListing from "./components/viewmylisting/ViewMyListing";
import EditMyDetails from "./components/editmydetails/EditMyDetails";
import Messages from "./components/messages/Messages";
 
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
       <Route path="/profilepage" element={<ProfilePage navigate={navigate} />} />
       <Route path="/viewmylisting" element={<ViewMyListing navigate={navigate} />} />
       <Route path="/editmydetails" element={<EditMyDetails navigate={navigate} />} />
       <Route path="/messages" element={<Messages navigate={navigate} />} />
       {/* <Messages /> */}
      </Routes>
   </div>
 );
};
 
export default App;