import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, TextField, Button, InputAdornment, IconButton, Box } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom'

const FormCard: React.FC = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!name || !surname || !email || !username || !password) {
            alert('Please fill all fields');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/user', {
                name,
                surname,
                email,
                username,
                password
            });

            console.log('User created successfully', response.data);
        } catch (error) {
            console.error('Error creating user', error);
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            sx={{ backgroundColor: '#f5f5f5' }}
        >
            <Card sx={{ maxWidth: 400, padding: 3 }}>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        Create Account
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Nombres"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            InputProps={{
                                sx: {
                                    '& .MuiInputBase-input': {
                                        color: '#000000',
                                    },
                                    '& fieldset': {
                                        borderColor: '#0097a7',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#00796b',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#004d40',
                                    },
                                }
                            }}
                        />
                        <TextField
                            label="Apellidos"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            InputProps={{
                                sx: {
                                    '& .MuiInputBase-input': {
                                        color: '#000000',
                                    },
                                    '& fieldset': {
                                        borderColor: '#0097a7',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#00796b',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#004d40',
                                    },
                                }
                            }}
                        />
                        <TextField
                            label="Correo"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                sx: {
                                    '& .MuiInputBase-input': {
                                        color: '#000000',
                                    },
                                    '& fieldset': {
                                        borderColor: '#0097a7',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#00796b',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#004d40',
                                    },
                                }
                            }}
                        />
                        <TextField
                            label="Usuario"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            InputProps={{
                                sx: {
                                    '& .MuiInputBase-input': {
                                        color: '#000000',
                                    },
                                    '& fieldset': {
                                        borderColor: '#0097a7',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#00796b',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#004d40',
                                    },
                                }
                            }}
                        />
                        <TextField
                            label="Contraseña"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Button type="submit" variant='contained' color="primary" fullWidth>
                            Registrarse
                        </Button>
                    </form>
                    <Box textAlign='center' marginTop={2}>
                        <Link to="/" style={{ textDecoration: 'none', color: '#1976d2' }}>
                            ¿Ya tienes una cuenta? Inicia sesión
                        </Link>
                    </Box>
                </CardContent>
            </Card>
            <Box display="flex" justifyContent="center" alignItems="center">
                <img
                    src="https://multigroup.com/wp-content/uploads/2022/10/linea-de-tiempo-04.jpg"
                    alt="Descripción de la imagen"
                    style={{ width: '100%', height: 'auto' }} 
                />
            </Box>
        </Box>
    );
};

export default FormCard;
