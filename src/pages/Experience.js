import React from "react";
import { Box, Grid, Typography, Divider, Fade } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";

const timelineData = {
  education: [
    {
      year: "2014 - 2017",
      title: "Vijayam Degree College",
      description: "BSc Computer Science, Sri Venkateswara University, Tirupati",
    },
    {
      year: "2012 - 2014",
      title: "Sri Chaitanya Junior College",
      description: "Chittoor",
    },
    {
      year: "Up to 2012",
      title: "ZP High School",
      description: "Yadamari",
    },
  ],
  experience: [
    {
      year: "Jul 2023 - Present",
      title: "Software Engineer",
      company: "Heeddata India Pvt. Ltd., Hyderabad",
      description: `Heeddata is a multi-cloud cost optimization platform designed to analyze and optimize cloud spending. It provides cost-saving suggestions for AWS, GCP, OCI, and Azure.`,
      technologies:
        "React.js, TypeScript, Material UI, Redux Toolkit, Node.js, Express.js, MongoDB, SQL, Azure, React Testing",
    },
    {
      year: "Jan 2023 - Jun 2023",
      title: "Software Engineer",
      company: "Infolob Solutions Pvt. Ltd., Hyderabad",
      description:
        "CloudMonk is a multi-cloud cost optimization platform that provides tailored recommendations for AWS, GCP, OCI, and Azure.",
      technologies:
        "React.js, Material UI, Redux Toolkit, Node.js, Express.js, MongoDB, SQL, Azure, React Testing",
    },
  ],
};

const TimelineItem = ({ year, title, company, description, technologies, isLast }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-start",
      position: "relative",
      mb: 5,
      pl: 3,
    }}
  >
    {/* Vertical Line */}
    <Box
      sx={{
        position: "absolute",
        left: "16px",
        top: "12px",
        bottom: isLast ? "0px" : "-30px",
        width: "2px",
        backgroundColor: "#1976d2",
      }}
    />

    {/* Dot */}
    <Box
      sx={{
        position: "absolute",
        left: "10px",
        width: "12px",
        height: "12px",
        backgroundColor: "#1976d2",
        border: "2px solid white",
        borderRadius: "50%",
        zIndex: 1,
      }}
    />

    {/* Content */}
    <Box sx={{ pl: 4 }}>
      <Typography variant="body2" color="textSecondary" sx={{ fontWeight: "bold" }}>
        {year}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
        {title}
      </Typography>
      <Typography variant="subtitle2" sx={{ fontWeight: 500, mb: 1 }}>
        {company}
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 1 }}>
        {description}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1 }}>
        <CodeIcon fontSize="small" sx={{ color: "#1976d2" }} />
        <Typography variant="caption" color="text.secondary">
          <strong>Technologies:</strong> {technologies}
        </Typography>
      </Box>
    </Box>
  </Box>
);

const Experience = () => {
  return (
    <Box
      sx={{
        padding: 4,
        minHeight: "100vh",
        pb: 8,
      }}
    >
      <Grid container spacing={4}>
        {/* 🎓 Education */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <SchoolIcon sx={{ mr: 1, color: "#1976d2" }} />
            <Typography variant="h5" fontWeight="bold">
              Education
            </Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ position: "relative", pl: 2 }}>
            {timelineData.education.map((item, index) => (
              <Fade in timeout={700 + index * 200} key={index}>
                <div>
                  <TimelineItem
                    {...item}
                    isLast={index === timelineData.education.length - 1}
                  />
                </div>
              </Fade>
            ))}
          </Box>
        </Grid>

        {/* 💼 Experience */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <WorkIcon sx={{ mr: 1, color: "#1976d2" }} />
            <Typography variant="h5" fontWeight="bold">
              Experience
            </Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ position: "relative", pl: 2 }}>
            {timelineData.experience.map((item, index) => (
              <Fade in timeout={700 + index * 200} key={index}>
                <div>
                  <TimelineItem
                    {...item}
                    isLast={index === timelineData.experience.length - 1}
                  />
                </div>
              </Fade>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
