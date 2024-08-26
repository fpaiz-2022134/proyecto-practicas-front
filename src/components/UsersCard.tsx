import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import axios from 'axios';

interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    username: string;
    password: string;
    center: number;
}

const UsersCard: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/user');
                setUsers(response.data);
            } catch (error) {
                console.error('Error getting users', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <Grid container spacing={2}>
            {users.map((user) => (
                <Grid item xs={12} sm={6} md={4} key={user.id}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {user.name} {user.surname}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Centro: {user.center}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default UsersCard;
