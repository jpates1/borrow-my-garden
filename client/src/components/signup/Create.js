import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   userName: "",
   email: "",
   password: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new user to the database.
   const newPerson = { ...form };
 
  // fetch("http://localhost:2000/user/add", {
  //    method: "POST",
  //    headers: {
  //      "Content-Type": "application/json",
  //    },
  //    body: JSON.stringify(newPerson),
  // })
  //  .then(response => response.json())
  //  .then(data => console.log(data))
  //  .catch(error => {
  //    window.alert(error);
  //    return;
  //  });
     
   await fetch("http://localhost:2000/user/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ userName: "", email: "", password: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="userName">Name</label>
         <input
           type="text"
           className="form-control"
           id="userName"
           value={form.userName}
           onChange={(e) => updateForm({ userName: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="email">Email</label>
         <input
           type="text"
           className="form-control"
           id="email"
           value={form.email}
           onChange={(e) => updateForm({ email: e.target.value })}
         />
       </div>
       <div className="form-group">
       <label htmlFor="password">Password</label>
         <input
           type="text"
           className="form-control"
           id="password"
           value={form.password}
           onChange={(e) => updateForm({ password: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}






// import React, { useState } from 'react';
// // import './SignUpForm.css';


// const SignUp = ({ navigate }) => {

//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     fetch( '/users', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ userName: userName, email: email, password: password })
//     })
//       .then(response => {
//         if(response.status === 201) {
//           console.log("Success")

//           // navigate('/login')
//         } else {
//           setError("Email already exists")
//           setUserName("")
//           setEmail("")
//           setPassword("")
//           navigate('/signup')
//         }
//       })
//   }

//   const handleUserNameChange = (event) => {
//     setUserName(event.target.value)
//   }

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value)
//   }

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value)
//   }


//     return (
//       <div>
//         <h1>Sign Up Form</h1>
//       <form onSubmit={handleSubmit}>
//           <input placeholder="UserName" id="userName" type='text' value={ userName } onChange={handleUserNameChange} />
//           <input placeholder="Email" id="email" type='text' value={ email } onChange={handleEmailChange} />
//           <input placeholder="Password" id="password" type='password' value={ password } onChange={handlePasswordChange} />
//         <button id='submit' type="submit" value="Submit">Sign Up</button>
//         {error && (
//             <div className="alert alert-danger">
//               {error}
//               <a href="/login">Please login</a>{" "}
//             </div>
//         )}
//       </form>
//       </div> 
//     );
// }

// export default SignUp;