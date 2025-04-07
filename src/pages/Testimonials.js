import React from "react";
import { Box, Typography } from "@mui/material";

const testimonialsData = [
  {
    name: "Alex Johnson",
    role: "Senior Frontend Engineer",
    feedback:
      "An exceptional React developer with a deep understanding of modern UI/UX principles. Always delivers high-quality, scalable code.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Martinez",
    role: "Product Designer",
    feedback:
      "Has an eye for detail and an incredible ability to transform design concepts into fully functional applications with smooth user interactions.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "James Williams",
    role: "Software Architect",
    feedback:
      "A problem-solver who is always eager to learn new technologies. Takes ownership and ensures front-end performance optimization.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Alex Johnson",
    role: "Senior Frontend Engineer",
    feedback:
      "An exceptional React developer with a deep understanding of modern UI/UX principles. Always delivers high-quality, scalable code.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Martinez",
    role: "Product Designer",
    feedback:
      "Has an eye for detail and an incredible ability to transform design concepts into fully functional applications with smooth user interactions.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "James Williams",
    role: "Software Architect",
    feedback:
      "A problem-solver who is always eager to learn new technologies. Takes ownership and ensures front-end performance optimization.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const Testimonials = () => (
  <section style={{ maxWidth: "900px", margin: "auto" }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Testimonials
      </Typography>
    </Box>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
        textAlign: "center",
      }}
    >
      {testimonialsData.map((testimonial, index) => (
        <div
          key={index}
          style={{
            padding: "20px",
            backgroundColor: "#F9F9F9",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />
          <h3 style={{ fontSize: "1.2rem", color: "#333" }}>
            {testimonial.name}
          </h3>
          <p
            style={{ fontSize: "0.9rem", color: "#666", marginBottom: "10px" }}
          >
            {testimonial.role}
          </p>
          <p
            style={{ fontSize: "0.95rem", fontStyle: "italic", color: "#444" }}
          >
            "{testimonial.feedback}"
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
