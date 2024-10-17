'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Use Next.js router
import products from '../Products.js';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import Random from './Component/Random.jsx';
import { useContext } from 'react';
import { CountContext } from '../../Context/CartContext.js';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const ProductDetailPage = () => {
    const router = useRouter();  // Next.js router to programmatically navigate
    const [open, setOpen] = useState(false);

    // Snack Bar
    const handleClickk = () => {
        setOpen(true);
    };

    const handleClosek = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={()=>{handleClosek()}}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    const [product, setProduct] = useState(null);
    const { incrementCount } = useContext(CountContext);

    const handleAddToCart = (product) => {
        incrementCount(product); // Pass the product object to incrementCount
    };

    useEffect(() => {
        // Extract the productId from the URL manually
        const pathname = window.location.pathname;  // Get the current URL path
        const productId = pathname.split("/").pop();  // Extract the last part of the path as productId
        const numericProductId = parseInt(productId); // Convert the productId to a number

        console.log("Product ID from URL:", productId);  // Log the extracted productId

        // Redirect to 404 if productId is greater than 21
        if (numericProductId > 21) {
            router.push('/404');  // Redirect to the Not Found page
            return;
        }

        // Find the product by productId
        const productData = products.find((item) =>
            String(item.productId) === String(productId)
        );

        setProduct(productData);  // Update the product state
        console.log("Found Product:", productData);  // Log the found product
        
    }, []);

    if (!product) {
        return <p>Product not found or still loading...</p>;  // Fallback message
    }

    const preventRightClick = (e) => {
        e.preventDefault();
    };

    return (
        <Box sx={{ mt: "120px" }}>
            <Container sx={{ mt: 5 }}>
                <Grid container spacing={4}>
                    {/* Product Image */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                src={product.imgSrc}
                                alt={product.title}
                                style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
                                onContextMenu={preventRightClick}
                            />
                        </Box>
                    </Grid>

                    {/* Product Details */}
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: 2
                    }}>
                        <Typography variant="h6" component="h2" color="textSecondary" textTransform={"uppercase"}>
                            {product.type}
                        </Typography>
                        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mt: 1}}>
                            {product.productName}
                        </Typography>

                        {/* Price */}
                        <Typography variant="h5" component="p" sx={{ fontWeight: 'bold', mt: 2 }}>
                            {product.price}
                        </Typography>

                        {/* Product Description */}
                        <Typography variant="body1" component="p" sx={{ mt: 2, fontSize: "18px" }}>
                            {product.description}
                        </Typography>

                        {/* Rating */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <Typography variant="body2" sx={{ ml: 1, display: "flex", alignItems: "center", gap: 2 }}>
                                <Rating value={product.rating} disabled /> 
                                <Typography variant='p' fontSize={"18px"}>{product.rating}</Typography>
                            </Typography>
                        </Box>

                        {/* Action Buttons */}
                        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                            <Button variant="contained" color="primary" sx={{ px: 4, py: 1.5 }} onClick={() => {handleAddToCart(product); handleClickk();}}>
                                Add to Cart
                            </Button>
                            <Button variant="outlined" color="primary" sx={{ px: 4, py: 1.5 }} href='/Cart'>
                                Go to Cart
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                {/* Snackbar and Random Component */}
                <Box sx={{ mt: 9 }}>
                    <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClosek}
                        message="Added To Cart"
                        action={action}
                    />
                    <Random />
                </Box>
            </Container>
        </Box>
    );
};

export default ProductDetailPage;
