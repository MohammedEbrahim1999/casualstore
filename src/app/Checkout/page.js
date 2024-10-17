'use client'
import React, { useContext, useState } from 'react';
import { Grid, Box, TextField, Button, Typography, Divider, MenuItem, Container } from '@mui/material';
import { CountContext } from '../Context/CartContext.js';

const Checkout = () => {
    const { cartItems } = useContext(CountContext);
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        address2: '',
        country: '',
        state: '',
        zip: '',
        cardName: '',
        cardNumber: '',
        expiration: '',
        cvv: ''
    });

    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const countries = [
        { value: 'Sa', label: 'Saudia Arabia' },
        // Add more countries as needed
    ];

    const states = [
        { value: 'Ri', label: 'Riyadh' },
        { value: 'Je', label: 'Jeddah' },
        // Add more states as needed
    ];

    return (
        <Container>
            <Typography variant='h2' sx={{textAlign: "center"}}> CheckOut</Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Grid container spacing={2} >
                {/* Billing address */}
                <Grid item xs={12} md={8} >
                    <Typography variant="h6" gutterBottom>
                        Billing address
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                variant="outlined"
                                value={formValues.firstName}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                variant="outlined"
                                value={formValues.lastName}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                variant="outlined"
                                value={formValues.email}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address"
                                name="address"
                                label="Address"
                                fullWidth
                                variant="outlined"
                                value={formValues.address}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Address 2 (Optional)"
                                fullWidth
                                variant="outlined"
                                value={formValues.address2}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="country"
                                select
                                label="Country"
                                fullWidth
                                variant="outlined"
                                value={formValues.country}
                                onChange={handleInputChange}
                                name="country"
                            >
                                {countries.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                id="state"
                                select
                                label="State"
                                fullWidth
                                variant="outlined"
                                value={formValues.state}
                                onChange={handleInputChange}
                                name="state"
                            >
                                {states.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Zip"
                                fullWidth
                                variant="outlined"
                                value={formValues.zip}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>

                    {/* Payment details */}
                    <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                        Payment
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="cardName"
                                name="cardName"
                                label="Name on card"
                                fullWidth
                                variant="outlined"
                                value={formValues.cardName}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="cardNumber"
                                name="cardNumber"
                                label="Credit card number"
                                fullWidth
                                variant="outlined"
                                value={formValues.cardNumber}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="expiration"
                                name="expiration"
                                label="Expiration"
                                fullWidth
                                variant="outlined"
                                value={formValues.expiration}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="cvv"
                                name="cvv"
                                label="CVV"
                                fullWidth
                                variant="outlined"
                                value={formValues.cvv}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Button variant="contained" fullWidth sx={{ mt: 3 }} onClick={() => alert('Proceed to checkout?')}>
                        Continue to checkout
                    </Button>
                </Grid>

                {/* Order Summary */}
                <Grid item xs={12} md={4}>
                    <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 2, padding: 2, mt: 4.5}}>
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
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Checkout;
