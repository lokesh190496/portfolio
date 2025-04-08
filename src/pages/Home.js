import React, { useState, useEffect } from "react";

import { Grid, Typography, Container, Box } from "@mui/material";

import { motion, AnimatePresence } from "framer-motion";

import heroImage from "../assets/hero.png";
 
const Home = () => {

  const roles = ["Front End Developer 🚀", "React Developer ⚛️"];

  const [index, setIndex] = useState(0);
 
  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) => (prev + 1) % roles.length);

    }, 2500);

    return () => clearInterval(interval);

  }, []);
 
  return (
<section

      id="home"

      style={{

        width: "100vw",

        minHeight: "100vh",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        padding: "0",

        margin: "0",

      }}
>
<Container

        maxWidth={false}

        sx={{

          maxWidth: "1200px", // tighter container width for consistency

          width: "100%",

          minHeight: "100vh",

          paddingTop: { xs: "100px", md: "100px" },

          paddingX: { xs: "20px", sm: "40px", md: "60px" },

          margin: "0 auto",

          display: "flex",

          alignItems: "center",

        }}
>
<Grid

          container

          spacing={4}

          alignItems="center"

          justifyContent="center"

          sx={{

            flexDirection: { xs: "column", md: "row" },

            textAlign: { xs: "center", md: "left" },

          }}
>

          {/* Left Side */}
<Grid

            item

            xs={12}

            md={6}

            sx={{

              order: { xs: 1, md: 0 },

              display: "flex",

              flexDirection: "column",

              justifyContent: "center",

              alignItems: { xs: "center", md: "flex-start" },

              textAlign: { xs: "center", md: "left" },

            }}
>

            {/* Hi I'm */}
<motion.div

              initial={{ opacity: 0, x: -30 }}

              animate={{ opacity: 1, x: 0 }}

              transition={{ duration: 1 }}
>
<Typography

                variant="h6"

                sx={{

                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },

                  color: "#888",

                  mb: 1,

                }}
>

                Hi, I'm
</Typography>
</motion.div>
 
            {/* Name */}
<motion.div

              initial={{ opacity: 0, y: -50 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 1.2, ease: "easeOut" }}
>
<Typography

                variant="h2"

                sx={{

                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },

                  fontWeight: "bold",

                  lineHeight: "1.2",

                  background: "linear-gradient(90deg, #FF6B6B, #5562EB)",

                  WebkitBackgroundClip: "text",

                  color: "transparent",

                  whiteSpace: "normal",

                }}
>

                S D Lokesh
</Typography>
</motion.div>
 
            {/* Animated Role */}
<AnimatePresence mode="wait">
<motion.div

                key={roles[index]}

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                exit={{ opacity: 0, y: -20 }}

                transition={{ duration: 0.6 }}
>
<Typography

                  variant="h5"

                  sx={{

                    fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },

                    fontWeight: 500,

                    mt: 2,

                    color: "#444",

                  }}
>

                  {roles[index]}
</Typography>
</motion.div>
</AnimatePresence>
 
            {/* Skills */}
<motion.div

              initial={{ opacity: 0, x: -30 }}

              animate={{ opacity: 1, x: 0 }}

              transition={{ duration: 1.2, delay: 0.8 }}
>
<Typography

                variant="body1"

                sx={{

                  fontSize: { xs: "1rem", sm: "1.2rem" },

                  mt: 2,

                  color: "#666",

                }}
>

                React.js • Material UI • JavaScript • Performance Optimization
</Typography>
</motion.div>
</Grid>
 
          {/* Right Side - Hero Image */}
<Grid

            item

            xs={12}

            md={6}

            sx={{

              order: { xs: 2, md: 1 },

              display: "flex",

              justifyContent: "center",

              alignItems: "center",

              mt: { xs: 4, md: 0 },

              width: "100%",

            }}
>
<motion.div

              initial={{ opacity: 0, scale: 0.8 }}

              animate={{ opacity: 1, scale: 1 }}

              transition={{ duration: 1.2 }}

              style={{

                width: "100%",

                maxWidth: "400px",

              }}
>
<Box

                sx={{

                  width: "100%",

                  maxWidth: { xs: "90%", sm: "80%", md: "600px", lg: "700px" },

                  borderRadius: "15px",

                  overflow: "hidden",

                  boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.3)",

                  transform: "scale(1)",

                  transition: "transform 0.3s ease-in-out",

                  ":hover": { transform: "scale(1.05)" },

                }}
>
<img

                  src={heroImage}

                  alt="Hero"

                  role="img"

                  aria-label="Developer Illustration"

                  loading="lazy"

                  style={{

                    width: "100%",

                    height: "auto",

                    objectFit: "contain",

                    borderRadius: "15px",

                  }}

                />
</Box>
</motion.div>
</Grid>
</Grid>
</Container>
</section>

  );

};
 
export default Home;