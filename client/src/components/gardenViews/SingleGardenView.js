import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Garden from "../garden/Garden";

const SingleGardenView = () => {
  const { _id } = useParams();
  const [garden, setGarden] = useState(null);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:2000/gardens/${_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (response) => {
          const data = response.data;
          window.localStorage.setItem("token", data.token);
          setToken(window.localStorage.getItem("token"));
          setGarden(data.garden);
        })
        .catch((error) => {
          console.error("Error fetching gardens:", error);
        });
    }
  }, [_id]);

  return (
    <>
      {garden && <Garden garden={garden} detailed={true} />}
    </>
  );
};

export default SingleGardenView;