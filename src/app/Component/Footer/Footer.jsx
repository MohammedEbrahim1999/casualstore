'use client'
// import { Box, Container, Grid, Typography } from "@mui/material"; import React from 'react'
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    IconButton,
    Link,
    styled
} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';



const FooterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textDecoration: "none",
    "&:hover": {
        color: theme.palette.primary.main,
        textDecoration: "underline"
    }
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.secondary,
    "&:hover": {
        color: theme.palette.primary.main
    }
}));
const Footer = () => {

    const footerLinks = {
        PRODUCT: [
            "Features",
            "Pricing",
            "Integrations",
            "Docs",
            "API",
            "Support",
            "Changelog"
        ],
        TOUR: [
            "Product Tour",
            "Live Demo",
            "Webinars",
            "Tutorials",
            "Resources",
            "Case Studies",
            "Blog"
        ],
        SHOWCASE: [
            "Customer Stories",
            "Use Cases",
            "Templates",
            "Marketplace",
            "Integrations",
            "Partners",
            "Developers"
        ],
        ABOUT: [
            "Company",
            "Team",
            "Careers",
            "Press",
            "Contact",
            "Terms",
            "Privacy"
        ]
    };

    return (
        <Box component="footer" sx={{ bgcolor: "background.paper", py: 1, }}>
            <Container maxWidth="lg">
                <Box sx={{ mt: 5}}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="body2" color="text.secondary" sx={{
                                textAlign: {xs: "center", md: "left"}
                            }}>
                                © 2024 Your Company Casual Store. All rights reserved.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ mt: { xs: 2, md: 0 } }}>
                            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
                                <SocialIcon aria-label="Facebook">
                                    <FacebookIcon />
                                </SocialIcon>
                                <SocialIcon aria-label="Twitter">
                                    <XIcon />
                                </SocialIcon>
                                <SocialIcon aria-label="Instagram">
                                    <InstagramIcon />
                                </SocialIcon>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        Stay connected with us. Subscribe to our newsletter for updates.
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                        <TextField
                            size="small"
                            label="Your Email"
                            variant="outlined"
                            sx={{ mr: 1 }}
                            aria-label="Newsletter email input"
                        />
                        <Button variant="contained" color="primary" type="submit" aria-label="Newsletter subscribe button">
                            Subscribe
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer
