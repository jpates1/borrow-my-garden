import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
// import { ChakraProvider, Container, Link, Button, Heading, Divider, CardBody, Card, Text } from "@chakra-ui/react";
// import { Link as ReactRouterLink } from 'react-router-dom';
// import { Link as ReactRouterLink, useParams } from 'react-router-dom';

// import SignUp from '../signup/SignUp';

const ProfilePage = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`/server/users/${id}`);
                setUser(response.data.user);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, [id]);
    
    return (
        <div>
            <h1>{user.username}'s Profile</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};


export default ProfilePage;