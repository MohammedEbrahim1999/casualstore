'use client';
import React from 'react';
import { Box, Container, Typography, Button, Grid, Divider, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useContext } from 'react';
import { CountContext } from '../Context/CartContext.js';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Cart = () => {
    const { cartItems, resetCount, Add, Rem } = useContext(CountContext);

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '10vh',
                bgcolor: '#fafafa',
                mt: { xs: '80px', md: '120px' },  // Adjust top margin for smaller screens
                pt: 4
            }}
        >
            {/* Title */}
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                Cart
            </Typography>

            {/* Horizontal line */}
            <Box sx={{ width: '100%', borderBottom: '1px solid #ddd', mb: 4 }} />

            {/* Cart is Empty Section */}
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#f9f9f9',
                    padding: { xs: '1rem 0.5rem', sm: '1rem 1rem' }, // Adjust padding for responsiveness
                    borderRadius: '4px',
                }}
            >
                <Box sx={{ padding: { xs: 1, md: 3 }, }}>
                    <Grid container spacing={2} justifyContent="center" sx={{ padding: 2, }}>
                        {cartItems.length === 0 ? (
                            // Empty Cart Design
                            <Grid item xs={12} md={8}>
                                <Box
                                    sx={{
                                        textAlign: 'center',
                                        padding: { xs: '20px 0', md: '50px 0' }, // Responsive padding
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography variant="h5" sx={{ mb: 3, width: { xs: '250px', md: '300px' } }}>
                                        Your Cart is Empty
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        href="/Products"
                                        sx={{
                                            textTransform: 'uppercase',
                                            fontSize: { xs: '14px', md: '16px' }, // Adjust font size for responsiveness
                                            padding: { xs: '8px 12px', md: '10px 16px' },
                                            width: { xs: '200px', md: '250px' }
                                        }}
                                    >
                                        ← Continue Shopping
                                    </Button>
                                </Box>
                            </Grid>
                        ) : (
                            // Cart with Items Design
                            <>
                                <Grid item xs={12} md={8} lg={8} sx={{ width: {lg: "1200px"}}} >
                                    <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 2, padding: { xs: 1, sm: 2 } }}>
                                        <Typography variant="h6" sx={{ mb: 2 }}>
                                            Item List
                                        </Typography>
                                        <Divider />
                                        {cartItems.map((item, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: { xs: 'column', sm: 'row' }, // Stack items vertically on small screens
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    padding: '10px 0',
                                                    borderBottom: '1px solid #e0e0e0',
                                                }}
                                            >
                                                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                                    <img
                                                        src={item.imgSrc}
                                                        alt={item.name}
                                                        width="80"
                                                        height="80"
                                                        style={{ marginRight: '10px' }}
                                                    />
                                                    <Typography variant="body1" sx={{ fontWeight: 'bold', textWrap: 'wrap' }}>
                                                        {item.productName}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: { xs: 2, sm: 0 } }}>
                                                    <Button variant="outlined" onClick={() => Rem(item.productId)}>-</Button>
                                                    <Typography>{`${item.quantity}x ${item.price}`}</Typography>
                                                    <Button variant="outlined" onClick={() => Add(item.productId)}>+</Button>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>
                                    <Divider sx={{ mt: 4 }} />
                                    <Stack
                                        alignItems="center"
                                        justifyContent="center"
                                        gap={4}
                                        direction="row"
                                        sx={{ mt: 4 }}
                                    >
                                        <Button
                                            variant="outlined"
                                            href='/Products'
                                            startIcon={<ArrowBackIcon />}
                                            sx={{
                                                fontSize: { xs: '14px', md: '16px' },
                                                padding: { xs: '6px 12px', md: '8px 16px' },
                                                textTransform: 'none',
                                                borderColor: '#333',
                                                color: '#333',
                                                '&:hover': {
                                                    backgroundColor: '#f0f0f0',
                                                    borderColor: '#333',
                                                },
                                            }}
                                        >
                                            Add More
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            startIcon={<RemoveCircleOutlineIcon />}
                                            sx={{
                                                fontSize: { xs: '14px', md: '16px' },
                                                padding: { xs: '6px 12px', md: '8px 16px' },
                                                textTransform: 'none',
                                                borderColor: '#333',
                                                color: '#333',
                                                '&:hover': {
                                                    backgroundColor: '#f0f0f0',
                                                    borderColor: '#333',
                                                },
                                            }}
                                            onClick={resetCount}
                                        >
                                            Remove All
                                        </Button>
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 2, padding: { xs: 1, sm: 2 } }}>
                                        <Typography variant="h6" sx={{ mb: 2 }}>
                                            Order Summary
                                        </Typography>

                                        <Divider />
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
                                            <Typography>Products ({cartItems.length})</Typography>
                                            <Typography>
                                                $
                                                {cartItems.reduce(
                                                    (total, item) => total + (item.quantity * parseFloat(item.price.replace('$', ''))),
                                                    0
                                                )}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
                                            <Typography>Shipping</Typography>
                                            <Typography>$30</Typography>
                                        </Box>
                                        <Divider />
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
                                            <Typography sx={{ fontWeight: 'bold' }}>Total amount</Typography>
                                            <Typography sx={{ fontWeight: 'bold' }}>
                                                $
                                                {cartItems.reduce(
                                                    (total, item) => total + (item.quantity * parseFloat(item.price.replace('$', ''))),
                                                    0
                                                ) + 30}
                                            </Typography>
                                        </Box>
                                        <Button
                                            variant="contained"
                                            sx={{ width: '100%', mt: 2, backgroundColor: '#000', color: '#FFF' }}
                                            onClick={() => alert('Proceed to checkout?')}
                                            href='/Checkout'
                                        >
                                            Go to checkout
                                        </Button>
                                    </Box>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Cart;
