import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  useMediaQuery,
} from "@mui/material";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaCommentDots,
  FaMapMarkerAlt,
} from "react-icons/fa";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("🚀 Send Message");
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setButtonText("⏳ Sending...");
    
    emailjs
      .send("service_ye70a2o", "template_aon5e5b", formData, "RWFvDNXoyeZOXzucZ")
      .then(() => {
        setButtonText("✅ Message Sent!");
        setFormData({ name: "", email: "", phone: "", message: "" });

        setTimeout(() => setButtonText("🚀 Send Message"), 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setButtonText("❌ Failed. Try Again!");
        setTimeout(() => setButtonText("🚀 Send Message"), 3000);
      });
  };

  return (
    <Box
      sx={{
        maxWidth: "1000px",
        mx: "auto",
        my: 4,
        p: 3,
        borderRadius: 3,
        boxShadow: 3,
        color: "#fff"
      }}
    >
      <Grid container spacing={4} direction={isMobile ? "column" : "row"}>
        {/* Left Side - Contact Info */}
        <Grid item xs={12} md={5}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              bgcolor: "rgba(255, 255, 255, 0.1)",
              textAlign: "center",
              boxShadow: 2,
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Get in Touch
            </Typography>
            <Box display="flex" alignItems="center" gap={2} mt={2}>
              <FaUser color="#fff" size={20} />
              <Typography>S D LOKESH</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={2} mt={2}>
              <FaPhoneAlt color="#FFD700" size={20} />
              <Typography>+91 8309966782</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={2} mt={2}>
              <FaEnvelope color="#FF5733" size={20} />
              <Typography>lokeshvasu63@gmail.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={2} mt={2}>
              <FaMapMarkerAlt color="#28A745" size={20} />
              <Typography>Hyderabad, India</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Right Side - Contact Form */}
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3, borderRadius: 3, bgcolor: "#fff", boxShadow: 2 }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              textAlign="center"
              mb={2}
            >
              Have a question? Reach out using the form below.
            </Typography>

            <form onSubmit={handleSubmit}>
              {[
                {
                  name: "name",
                  label: "Your Name",
                  icon: <FaUser color="#333" size={20} />,
                },
                {
                  name: "email",
                  label: "Your Email",
                  icon: <FaEnvelope color="#D44638" size={20} />,
                  type: "email",
                },
                {
                  name: "phone",
                  label: "Your Phone Number",
                  icon: <FaPhoneAlt color="#007BFF" size={20} />,
                  type: "tel",
                },
                {
                  name: "message",
                  label: "Your Message",
                  icon: <FaCommentDots color="#0077B5" size={20} />,
                  multiline: true,
                  rows: 3,
                },
              ].map((field, index) => (
                <Box key={index} mb={2} display="flex" alignItems="center" gap={2}>
                  {field.icon}
                  <TextField
                    fullWidth
                    label={field.label}
                    name={field.name}
                    variant="outlined"
                    size="small"
                    margin="dense"
                    type={field.type || "text"}
                    multiline={field.multiline || false}
                    rows={field.rows || 1}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                </Box>
              ))}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #007BFF, #6610F2)",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #0056b3, #520db5)",
                  },
                }}
              >
                {buttonText}
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
