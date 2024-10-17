// pages/register.js
import React from 'react';
import {
    TextField,
    Button,
    Link,
    Typography,
    Box,
    Container,
} from '@mui/material';
import Divider from '@mui/material/Divider';

const Register = () => {
    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                {/* Title */}
                <Typography variant="h4" gutterBottom>
                    Register
                </Typography>
                
                <Divider sx={{
                    mt: 4,
                    width: '100%',
                    mb:5
                }} />

                {/* Full Name */}
                <TextField
                    fullWidth
                    margin="normal"
                    label="Full Name"
                    variant="outlined"
                    placeholder="Enter Your Name"
                />

                {/* Email Address */}
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email address"
                    variant="outlined"
                    placeholder="name@example.com"
                    type="email"
                />

                {/* Password */}
                <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    variant="outlined"
                    placeholder="Password"
                    type="password"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Confirm Password"
                    variant="outlined"
                    placeholder="Confirm Password"
                    type="password"
                />

                {/* Login Link */}
                <Box mt={2} display="flex" justifyContent="flex-start" width="100%">
                    <Typography variant="body2">
                        Already has an account?{' '}
                        <Link href="/Login" underline="hover">
                            Login
                        </Link>
                    </Typography>
                </Box>

                {/* Register Button */}
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: '20px', backgroundColor: '#808080', color: 'white' }}
                >
                    Register
                </Button>
            </Box>
        </Container>
    );
};

export default Register;
