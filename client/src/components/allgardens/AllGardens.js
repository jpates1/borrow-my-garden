import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Garden from '../garden/SimpleGarden';

import { ChakraProvider, Container, Button, Heading, Divider, Image, Box, Card, CardBody, Text } from "@chakra-ui/react";

const AllGardens = ({ navigate }) => {
  const [gardens, setGardens] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      axios.get('http://localhost:2000/gardens', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(async response => {
        const data = response.data;
        window.localStorage.setItem('token', data.token);
        setToken(window.localStorage.getItem('token'));
        setGardens(data.gardens);
      })
      .catch(error => {
        console.error('Error fetching gardens:', error);
      });
    }
  }, []);

    return (
      <div id="feed" role="feed">
      {gardens
        .map((garden) => (
          <Garden
            key={garden._id}
            garden={{
              ...garden,
            }}
          />
        ))}
    </div>
    );
}
  export default AllGardens;
