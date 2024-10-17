'use client';
import React, { useEffect, useState } from 'react';
import { AppProvider, SignInPage } from '@toolpad/core';
import { Container, Box, useTheme, Typography, Divider, Stack, Link, Button, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import { signIn, singIn } from 'next-auth/react';






// import { getServerSession } from 'next-auth';
// import { authOtions } from '../lib/nextauth';
// Simulated providers
const providers = [{ id: 'credentials', name: 'Email and Password' }];
const oAuthProviders = [
    { id: 'google', name: "Google", icon: <GoogleIcon /> },
    { id: 'facebook', name: 'Facebook', icon: <FacebookOutlinedIcon /> },
    { id: 'instagram', name: 'Instagram', icon: <InstagramIcon /> },
];

// Simulated sign-in function for credentials
const signInWithEmail = async (provider, email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email && password) {
                alert(`Signed in with "${provider.name}" using email: ${email}`);
                resolve();
            } else {
                alert('Please fill out email and password.');
                reject('Missing credentials');
            }
        }, 300);
    });
};

// Simulated OAuth sign-in
const signInWithProvider = async (provider) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            alert(`Signed in with ${provider.name}`);
            resolve();
        }, 500);
    });
};


const Login = () => {

    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailSignIn = async () => {
        try {
            await signInWithEmail(providers[0], email, password);
        } catch (error) {
            console.error('Sign-in failed:', error);
        }
    };

    const handleOAuthSignIn = async (provider) => {
        await signInWithProvider(provider);
    };

    return (
        <Box>
            <Container>
                <Typography variant="h2" sx={{ textAlign: 'center', mt: '35px' }}>
                    LogIn
                </Typography>
                <Divider sx={{ mt: 4, mb: 4 }} />
                <Stack direction="column" alignItems="center" justifyContent="center" spacing={2}>
                    {/* Email and Password Login */}
                    <Box sx={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <Button
                            variant="contained"
                            onClick={handleEmailSignIn}
                            sx={{ width: '100%', mt: 2 }}
                        >
                            Sign In with Email
                        </Button>
                    </Box>

                    <Divider sx={{ width: '100%', maxWidth: '400px', mt: 4, mb: 2 }} />

                    {/* OAuth Providers Login */}
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                        <Typography variant="h6">Or sign in with:</Typography>
                        <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
                            {oAuthProviders.map((provider) => (
                                <Button
                                    key={provider.id}
                                    variant="outlined"
                                    onClick={() => signIn(provider.id)}
                                    sx={{ textTransform: 'none', display: "flex", gap: 1 }}
                                    target="_blank"
                                    rel="noopener noreferrer"

                                >
                                    {provider.icon}
                                    {provider.name}
                                </Button>
                            ))}
                        </Stack>
                    </Box>
                    {/*  */}
                    <Stack direction="row" alignItems="center" justifyContent="center" sx={{ mt: 4, fontSize: '22px', gap: 1 }}>
                        <Typography variant="body1" sx={{ textAlign: 'center' }}>
                            New Here?
                        </Typography>
                        <Link href="/Register" sx={{ color: 'aqua', textDecoration: 'none' }}>
                            Register
                        </Link>
                    </Stack>

                    <Divider sx={{ mt: 4, width: '100%', maxWidth: '400px' }} />
                </Stack>
            </Container>
        </Box>
    );
};

export default Login;
