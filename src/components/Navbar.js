import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ refs }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (ref, label) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(label);
      setTimeout(() => setMobileOpen(false), 500);
    }
  };

  const navItems = [
    { label: "Home", ref: refs.homeRef },
    { label: "About", ref: refs.aboutRef },
    { label: "Experience", ref: refs.experienceRef },
    { label: "Skills", ref: refs.skillsRef },
    { label: "Testimonials", ref: refs.testimonialsRef },
    { label: "Contact", ref: refs.contactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      navItems.forEach((item, index) => {
        if (item.ref.current) {
          const { offsetTop, offsetHeight } = item.ref.current;
          const isLast = index === navItems.length - 1;

          const scrollY = window.scrollY;
          const pageBottom = window.innerHeight + scrollY >= document.body.offsetHeight - 5;

          if (
            (scrollY >= offsetTop - 100 &&
              scrollY < offsetTop + offsetHeight - 100) ||
            (isLast && pageBottom)
          ) {
            currentSection = item.label;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <>
      <AppBar position="fixed" sx={{ background: "#1976d2" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                onClick={() => handleScroll(item.ref, item.label)}
                sx={{
                  borderBottom:
                    activeSection === item.label ? "3px solid white" : "none",
                  fontWeight:
                    activeSection === item.label ? "bold" : "normal",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Hamburger Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          {navItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleScroll(item.ref, item.label)}
              sx={{
                backgroundColor:
                  activeSection === item.label ? "#e3f2fd" : "transparent",
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  fontWeight:
                    activeSection === item.label ? "bold" : "normal",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
