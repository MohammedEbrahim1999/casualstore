
'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link, useTheme } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { CountContext } from '../../Context/CartContext.js';




const drawerWidth = 240;
const navItems = [
    { name: 'Home', link: "/" },
    { name: 'Products', link: "/Products" },
    { name: 'About', link: "/About" },
    { name: 'Contact', link: "/Contact" }
];


const Header = (props) => {
    const { count } = useContext(CountContext);
    const buttons = [
        {
            buttName: `Login`,
            buttIco: <LoginIcon />,
            buttLink: "/Login"
        },
        {
            buttName: "Register",
            buttIco: <PersonAddAlt1Icon />,
            buttLink: "/Register"
        },
        {
            buttName: `Cart (${count})`,
            buttIco: <ShoppingCartIcon />,
            buttLink: "/Cart"
        },
    ];
    const {window}  = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(navItems[0].name); // Tracks selected nav item
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const handleNavItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    const router = useRouter();

    const handleNavigation = (href) => {
        router.push(href); // Navigate to the specified route
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <Link href="/" sx={{
                    fontSize: "22px",
                    color: "#000",
                    textDecoration: "none",
                    "&:hover": {
                        textDecoration: "none",
                    }
                }}> Casual Store </Link>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => { handleNavItemClick(item.name); handleNavigation(item.link) }}
                        >
                            <ListItemText
                                primary={item.name}
                                sx={{
                                    color: selectedItem === item.name ? '#000' : '#777',
                                    fontWeight: selectedItem === item.name ? 'bolder' : 'normal',
                                    "&:hover": { color: '#000' }
                                }}
                                onClick={() => handleNavItemClick(item.name)}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: "column",
                gap: 3
            }}>
                {buttons.map((item) => {
                    return (
                        <Button variant="outlined" key={item.buttLink} color="#0000" sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "center",
                            p: 1,
                            justifyContent: "center",
                            "&:hover": {
                                backgroundColor: "#000",
                                color: "#FFF"
                            },
                        }} href={item.buttLink}>
                            {item.buttIco}
                            {item.buttName}
                        </Button>
                    )
                }
                )}
            </Box>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ mb: 9 }}>
            <CssBaseline />
            <AppBar component="nav" sx={{
                backgroundColor: "#FFF",
                boxShadow: "none",
                color: "#000",
                display: 'flex',
                justifyContent: "flex-end",
                alignItems: "center",
                width: { lg: "100%" },
                ml: { lg: 1 }
            }}>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: { xs: "center", lg: "space-around" },
                    alignItems: "center",
                    width: "100%"
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { lg: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ display: { xs: 'block', sm: 'block' } }}
                    >
                            <Link href="/" sx={{
                                fontSize: "22px",
                                color: "#000",
                                textDecoration: "none",
                                fontWeight: "bolder",

                                "&:hover": {
                                    textDecoration: "none",
                                }
                            }}> Casual Store 
                            </Link>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: "center", justifyContent: "space-evenly", gap: { lg: 4 } }}>
                        <Box sx={{ mr: 4, display: "flex" }}>
                            {navItems.map((item) => (
                                <ListItem key={item.name} disablePadding >
                                    <ListItemButton sx={{
                                        textAlign: 'center', color: selectedItem === item.name ? '#000' : '#777',
                                    }}
                                        onClick={() => { handleNavItemClick(item.name); handleNavigation(item.link) }}
                                        href={item.link}
                                    >
                                        <ListItemText
                                            href={item.link}
                                            primary={item.name}
                                            sx={{
                                                fontWeight: "bolder",
                                                fontWeight: selectedItem === item.name ? 500 : 'light',
                                                "&:hover": { color: '#000' },
                                            }}
                                        // onClick={() => handleNavigation(item.link)}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </Box>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 3
                        }}>
                            {buttons.map((item) => (
                                <Button
                                    key={item.buttName}
                                    variant="outlined"
                                    color="#0000"
                                    sx={{
                                        display: "flex",
                                        gap: 2,
                                        alignItems: "center",
                                        p: 1,
                                        justifyContent: "center",
                                        "&:hover": {
                                            backgroundColor: "#000",
                                            color: "#FFF"
                                        },
                                    }} href={item.buttLink}>
                                    {item.buttIco}
                                    {item.buttName}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box >
    );
}
export default Header;