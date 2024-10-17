'use client';
import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';

const NotFound = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                textAlign: 'center',
                flexDirection: 'column',
                bgcolor: '#fafafa',
                padding: '20px',
            }}
        >
            <Box>
                {/* 404 Error Message */}
                <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: { xs: '80px', md: '150px' } }}>
                    404
                </Typography>

                {/* Page Not Found Message */}
                <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: '20px', md: '30px' } }}>
                    Oops! Page Not Found
                </Typography>

                {/* Additional description */}
                <Typography variant="body1" sx={{ mb: 4, fontSize: { xs: '14px', md: '18px' } }}>
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </Typography>

                {/* Back to Home Button */}
                <Button
                    variant="contained"
                    color="primary"
                    href="/"
                    sx={{
                        textTransform: 'none',
                        padding: '10px 20px',
                        fontSize: { xs: '14px', md: '16px' },
                    }}
                    
                >
                    Go Back to Home
                </Button>
            </Box>
        </Container>
    );
};

export default NotFound;
