'use client';
import React, { useState, useEffect, useRef } from 'react';
import products from '../../Products';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography, Container } from '@mui/material';
import { CountContext } from '.././../../Context/CartContext';
import { useContext } from 'react';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';




function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const Random = () => {
    const [shuffledProducts, setShuffledProducts] = useState([]);
    const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left
    const { incrementCount } = useContext(CountContext);
    const handleAddToCart = (product) => {
        incrementCount(product); // Pass the product object to incrementCount
    };
    useEffect(() => {
        const shuffled = shuffleArray([...products]);
        setShuffledProducts(shuffled.slice(0, 5)); // Get first 5 products
    }, []);

    const scrollRef = useRef(null); // Reference for the scrollable container

    // Auto-scroll effect using useEffect
    useEffect(() => {
        const scrollContainer = scrollRef.current;

        const autoScroll = () => {
            const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

            if (scrollContainer.scrollLeft >= maxScrollLeft) {
                // When reaching the end, reverse the direction
                setScrollDirection(-1);
            } else if (scrollContainer.scrollLeft <= 0) {
                // When reaching the start, reverse the direction
                setScrollDirection(1);
            }

            scrollContainer.scrollLeft += 2 * scrollDirection; // Adjust scroll speed by changing the value
        };

        const scrollInterval = setInterval(autoScroll, 30); // Adjust the interval time for speed

        return () => clearInterval(scrollInterval); // Cleanup the interval on unmount
    }, [scrollDirection]); // Run effect on scrollDirection change








    // Snack Bar
    const [open, setOpen] = useState(false);

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
                onClick={handleClosek}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );
    // Snack Bar
    return (
        <Box>
            <Container sx={{ mt: 4 }}>
                {/* Horizontal scrolling container */}
                <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
                    You May Also Like
                </Typography>
                <Box
                    ref={scrollRef} // Attach the reference here
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: 2,
                        p: 2,
                        whiteSpace: 'nowrap',
                        scrollBehavior: 'smooth',
                        '::-webkit-scrollbar': { display: 'none' }, // Hide the scrollbar for a clean look
                    }}
                >
                    {shuffledProducts.map((product) => (
                        <Card
                            key={product.id}
                            sx={{
                                minWidth: '300px',
                                maxWidth: '300px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                boxShadow: 3,
                                borderRadius: 2,
                            }}
                        >
                            <Box>
                                {/* Product image */}
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={product.imgSrc}
                                    alt={product.title}
                                />
                                {/* Product Title */}
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                        noWrap
                                        textAlign="center"
                                        sx={{ fontSize: '16px', fontWeight: 'bold' }}
                                    >
                                        {product.title}
                                    </Typography>
                                </CardContent>
                            </Box>
                            {/* Buttons */}
                            <CardActions
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 1,
                                    p: 2,
                                }}
                            >
                                <Button
                                    size="large"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{
                                        backgroundColor: 'black',
                                        '&:hover': { backgroundColor: 'black' },
                                        color: 'white',
                                        '&:hover': {
                                            opacity: '.7',
                                        },
                                    }}
                                    href='/Products'
                                >
                                    Shop Now
                                </Button>
                                <Button
                                    size="large"
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        color: 'black',
                                        borderColor: 'black',
                                        '&:hover': { borderColor: 'black' },
                                    }}
                                    onClick={() => {handleAddToCart(product); handleClickk();}}
                                >
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            </Container>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClosek}
                message="Added To Cart"
                action={action}
            />
        </Box>
    );
};

export default Random;
