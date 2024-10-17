'use client'
import { Box, Container, Divider, Typography, Card, CardMedia, CardContent, Stack, } from '@mui/material'
import React from 'react'
const items = [
    { img: "/Imgs/one.jpeg", title: "Mens's Clothing" },
    { img: "/Imgs/two.jpeg", title: "Women's Clothing" },
    { img: "/Imgs/three.jpeg", title: "Jewelery" },
    { img: "/Imgs/four.jpeg", title: "Electronics" },
]
const About = () =>{
    const preventRightClick = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Box sx={{
                marginTop: { xs: "50px", lg: "100px" },
            }}>
                <Container>
                    <Typography variant='h2' sx={{
                        textAlign: "center",
                        mb: 2
                    }}> About Us</Typography>
                    <Divider sx={{
                        backgroundColor: "gray",
                        mb: 2
                    }} />
                    <Typography variant='p' sx={{
                        color: "#776"
                    }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit quos recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem praesentium, doloremque distinctio nesciunt porro tempore quis eaque labore voluptatibus ea necessitatibus exercitationem tempora molestias. Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit delectus expedita a alias nam recusandae illo debitis repellat libero, quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
                    </Typography>
                    <Typography variant='h2' sx={{
                        textAlign: "center",
                        mb: 2,
                        mt: 6
                    }}> Our Products </Typography>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} gap={2} sx={{
                        flexWrap: "Wrap",
                        justifyContent: { xs: "center", lg: "space-between" }
                    }}>
                        {items.map((item) => {
                            return (
                                <Card sx={{ maxWidth: 400, width: 275 }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={item.img}
                                        alt="Men's Clothing"
                                        onContextMenu={preventRightClick}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            )
                        }
                        )}
                    </Stack>
                </Container>
            </Box>
        </>
    )
}

export default About;