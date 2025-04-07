import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Container,
  Grid,
  Avatar
} from "@mui/material";


const About = () => {
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "60px 0",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              About Me
            </Typography>
          </Box>

          {/* Profile Image and Bio */}
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Avatar
                  alt="Profile"
                  src="/profile.jpg" // Replace with your own image path
                  sx={{
                    width: 200,
                    height: 200,
                    margin: "0 auto",
                    boxShadow: 3,
                  }}
                />
              </motion.div>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  color: "#4a5568",
                  lineHeight: "1.8",
                  textAlign: "justify",
                }}
              >
                Hey there! 👋 I'm <strong>S D Lokesh</strong>, a passionate{" "}
                <strong>MERN Stack Developer</strong> with over{" "}
                <strong>2+ years</strong> of experience.
                <br />
                <br />
                I specialize in building scalable and dynamic web apps using{" "}
                <strong>React.js, Node.js, Express, MongoDB</strong>, and
                front-end tools like <strong>JavaScript, HTML, CSS</strong>. I
                also love working with UI libraries like{" "}
                <strong>Material UI</strong> and <strong>Bootstrap</strong>.
                <br />
                <br />
                I'm committed to writing clean code, solving real-world
                problems, and enhancing user experiences. I'm currently open to
                freelance or full-time opportunities where I can grow and make
                an impact.
              </Typography>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
