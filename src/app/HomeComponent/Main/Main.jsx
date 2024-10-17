'use client'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Main = () => {
    const preventRightClick = (e) => {
        e.preventDefault();
    };
    return (
        <Box>

            <Box sx={{
                ml: 2,
                mr: 2,
                mt: 11,
                borderRadius: "15px",
                position: "relative",
            }}>
                <Box sx={{
                    background: "#000",
                    opacity: "0.3",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    width: "100%",
                    height: {xs:"96%",lg:"98.5%"},
                    zIndex: 5,
                    borderRadius: "15px",
                }}></Box>
                <img src="/Imgs/main.png.jpg" alt="" style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "100%",
                    borderRadius: "10px"
                }}
                    onContextMenu={preventRightClick} />

                <Box sx={{
                    position: "inherit",
                    color: "#FFF",
                    zIndex: 10,
                    position: "absolute",
                    top: { md: "35%", xs: "35px",md: "35%",sm: "35%"},
                    left: { lg: "10%", xs: "10px", md: "10%",sm: "10%"},


                }}>
                    <Typography variant='h1' sx={{
                        fontSize: { xs: "20px", lg: "28px",},
                        mb:{xs:1,lg:2}
                    }}>New Season Arrivals </Typography>
                    <Typography variant='p' sx={{
                        fontSize: { xs: "11px", lg: "18px" },
                    }}> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Main
