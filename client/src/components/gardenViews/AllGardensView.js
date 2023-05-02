import React, { useState, useEffect } from "react";
import axios from "axios";
import Garden from "../garden/Garden";


const AllGardensView = ({ navigate }) => {
  const [gardens, setGardens] = useState([]);
  const [token, setToken] = useState(
    window.localStorage.getItem("token")
  );

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:2000/gardens", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (response) => {
          const data = response.data;
          window.localStorage.setItem("token", data.token);
          setToken(window.localStorage.getItem("token"));
          setGardens(data.gardens);
        })
        .catch((error) => {
          console.error("Error fetching gardens:", error);
        });
    }
  }, []);

  return (
    <>
      {gardens.map((garden) => (
        <div key={garden._id}>
          <Garden
            garden={{ ...garden }}
            detailed={false}
          />
        </div>
      ))}
    </>
  );
};
export default AllGardensView;