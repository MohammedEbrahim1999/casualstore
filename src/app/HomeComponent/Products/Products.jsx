'use client'
import { Box, CardMedia, Container, Divider, Stack, Typography, Grid } from '@mui/material'
import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import products from '../../Products/Products';
import { useContext } from 'react';
import { CountContext } from '../../Context/CartContext';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const buttons = [
    { name: "All", type: "all" },
    { name: "Men's Clothing", type: "men" },
    { name: "Women's Clothing", type: "woman" },
    { name: "Jewelery", type: "jewelery" },
    { name: "Electronics", type: "electronic" },
]
const ProductsItems = (props) => {
    const { incrementCount } = useContext(CountContext);
    const handleAddToCart = (product) => {
        incrementCount(product); // Pass the product object to incrementCount
    };
    const [arr, setArr] = useState(products);
    const handleClick = (buttonCategory) => {
        const newArr = products.filter((item) => {
            return item.category === buttonCategory;

        });
        setArr(newArr);
        if (buttonCategory === "all") {
            setArr(products);
        };
    };

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
        <Box sx={{
            mt: 4,
        }}>
            <Container>
                <Typography variant='h2' textAlign={"center"} sx={{
                    fontSize: { xs: "22px", md: "35px" },
                    mb: 4
                }}> Latest Product</Typography>
                <Divider />
                <Stack direction={"row"} sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    mt: 5,
                    flexWrap: "wrap"
                }}>
                    {buttons.map((item) => {
                        return (
                            <Button variant="outlined" sx={{
                                mr: 2,
                                "&:hover": {
                                    backgroundColor: "#000",
                                    color: "#FFF",
                                    borderColor: "#FFF",
                                }
                            }} key={item} onClick={() => {
                                handleClick(item.type);
                            }}>{item.name}</Button>
                        )
                    }
                    )}
                </Stack>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"} sx={{
                    mt: 5,
                    mb: 4,
                    justifyContent: { xs: "center", md: "space-between" },
                    gap: { xs: 1, md: 0 }
                }}>
                    <AnimatePresence>
                        {arr.map((item) => {
                            return (
                                <Card
                                    component={motion.section}
                                    layout
                                    initial={{ transform: "scale(0)" }}
                                    animate={{ transform: "scale(1)" }}
                                    transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                                    sx={{
                                        maxWidth: 370,
                                        minWidth: 370,
                                        mt: 2,
                                        border: "1px solid gray",
                                        height: "100%",
                                        textAlign: "center",
                                        ":hover .MuiCardMedia-root": {
                                            rotate: "1deg",
                                            scale: "1.1",
                                            transition: "0.35s",

                                        }
                                    }}>
                                    <CardContent>
                                        <CardMedia image={item.imgSrc} title="" style={{
                                            width: "100%",
                                            maxWidth: "100%",
                                            height: "300px",
                                            maxHeight: "300px",
                                        }} />
                                        <Typography variant="h5" component="div" sx={{
                                            mt: 2
                                        }}>
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{
                                            mt: 2,
                                            mb: 2
                                        }}>
                                            {item.title}
                                        </Typography>
                                        <Divider sx={{
                                            backgroundColor: "gray"
                                        }} />
                                        <Box sx={{
                                            // borderTop: "2px solid blue",
                                            p: 1,
                                        }}>
                                            <Typography variant="h4" sx={{

                                            }}>
                                                {item.price}
                                            </Typography>
                                        </Box>
                                        <Divider sx={{
                                            backgroundColor: "gray"
                                        }} />
                                        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} sx={{
                                            mt: 2,
                                            gap: 1
                                        }}>
                                            <Button variant="outlined" sx={{
                                                mr: 2,
                                                backgroundColor: "#000",
                                                color: "#FFF",
                                                "&:hover": {
                                                    borderColor: "#FFF",
                                                }
                                            }} href={item.productLink}>Buy Now</Button>
                                            <Button variant="outlined" sx={{
                                                mr: 2,
                                                backgroundColor: "#000",
                                                color: "#FFF",
                                                "&:hover": {
                                                    borderColor: "#FFF",
                                                }
                                            }} onClick={() => { handleAddToCart(item); handleClickk(); }} > Add To Cart</Button>
                                        </Stack>

                                    </CardContent>
                                </Card>
                            )
                        }
                        )}
                    </AnimatePresence>
                </Stack>

            </Container>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClosek}
                message="Added To Cart"
                action={action}
            />
        </Box>
    )
}

export default ProductsItems
