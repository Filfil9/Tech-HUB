import React, { useState } from "react";
import {
  AppBar, Toolbar, IconButton, Typography, Button,
  Drawer, List, ListItem, ListItemText, ListItemIcon,
  Box, useMediaQuery} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const iconStyle = {
  color: "#ff9900",
  fontSize: 28,
  borderRadius: "6px",
  transition: "color 0.3s ease",
};

const menuItems = [
  { text: "Home", path: "/", icon: <HomeIcon /> },
  { text: "Services", path: "/services", icon: <BuildIcon /> },
  { text: "About", path: "/about", icon: <InfoIcon /> },
  { text: "Contact", path: "/contact", icon: <ContactMailIcon /> },
  { text: "What I Learned", path: "/what-i-learned", icon: <SchoolIcon /> },
  { text: "Posts", path: "/posts", icon: <ArticleIcon /> },
  { text: "Clock", path: "/clock", icon: <AccessTimeIcon /> },
  { text: "Todo", path: "/todo", icon: <ArticleIcon /> },
];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const renderMenuButtons = () =>
    menuItems.map(({ text, path, icon }) => (
      <Button
        key={text}
        color="inherit"
        startIcon={React.cloneElement(icon, { sx: iconStyle })}
        onClick={() => navigate(path)}
        sx={{
          mx: 1,
          color: location.pathname === path ? "#ff9900" : "white",
          fontWeight: location.pathname === path ? "bold" : "normal",
        }}
      >
        {text}
      </Button>
    ));

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#5b6c80ff" }}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer",height:"40px" }} onClick={() => navigate("/")}>
            <img src="/tech hub logo-01.png" alt="Logo" style={{ height: "200px", marginRight: "10px" }} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {isMobile ? (
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon sx={iconStyle} />
            </IconButton>
          ) : (
            <Box>{renderMenuButtons()}</Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
          <List>
            {menuItems.map(({ text, path, icon }) => (
              <ListItem
                button
                key={text}
                onClick={() => navigate(path)}
                selected={location.pathname === path}
              >
                <ListItemIcon>{React.cloneElement(icon, { sx: iconStyle })}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;