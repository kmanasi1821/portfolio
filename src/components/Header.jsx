import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Box,
  Toolbar,
  Typography,
  Drawer,
  Divider,
} from "@mui/material";
import css from "./Header.module.css";
import SpaIcon from "@mui/icons-material/Spa";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuClick = () => {
    return setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleMenuClick}>
      <SpaIcon className={css.mobile_icon}></SpaIcon>
      <Typography className={css.MobileHeading}>Manasi Wagh</Typography>
      <Divider></Divider>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <ul className={css.mobileNavbar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Box>
      <br />
      <br />
      <></>
      <Divider></Divider>
      <Box className={css.socialIcon}>
        <TwitterIcon className={css.soc_icon}></TwitterIcon>
        <LinkedInIcon className={css.soc_icon}></LinkedInIcon>
        <GitHubIcon className={css.soc_icon}></GitHubIcon>
      </Box>
    </Box>
  );
  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleMenuClick}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography className={css.logoHeading}>
            <SpaIcon className={css.icon}></SpaIcon>
            <div className={css.Heading}>Manasi Wagh</div>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className={css.navMenu}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/project">Project</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component={"nav"}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleMenuClick}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "240px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Toolbar></Toolbar>
      </Box>
    </Box>
  );
};

export default Header;
