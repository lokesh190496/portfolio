import React from "react";
import { Typography } from "@mui/material";
import {
  FaMicrosoft,
  FaReact,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiRedux, SiMui, SiMongodb } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const skillsData = [
  { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "Material UI", icon: <SiMui />, color: "#0081CB" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
  { name: "SQL", icon: <FaDatabase />, color: "#00758F" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "GitHub", icon: <FaGitAlt />, color: "#181717" },
  { name: "Microsoft Azure", icon: <FaMicrosoft />, color: "#0078D4" },
  { name: "VS Code", icon: <DiVisualstudio />, color: "#007ACC" },
];

const Skills = () => (
  <section
    style={{
      margin: "auto",
      padding: "10px 0px 40px 0px",
      textAlign: "center",
      background: "linear-gradient(to right, #f8fbff, #eef3f9)"
    }}
  >
    <Typography variant="h5" fontWeight="bold" sx={{ color: "#1e2a38", mb: 2 }}>
      My Skills
    </Typography>
    <Typography
      variant="body1"
      sx={{ color: "#5f6f81", mb: 4 }}
    >
      Technologies I've mastered to build modern web experiences
    </Typography>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "25px",
      }}
    >
      {skillsData.map((skill, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            padding: "18px",
            borderRadius: "16px",
            boxShadow: "0px 6px 18px rgba(0,0,0,0.1)",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
            cursor: "pointer",
            width: "120px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: `2px solid transparent`,
            position: "relative",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0px 10px 25px rgba(0,0,0,0.2)";
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.border = `2px solid ${skill.color}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0px 6px 18px rgba(0,0,0,0.1)";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.border = `2px solid transparent`;
          }}
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              background: `linear-gradient(145deg, ${skill.color}, #ffffff)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "10px",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <span style={{ fontSize: "30px", color: "#fff" }}>{skill.icon}</span>
          </div>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              color: "#333",
              fontSize: "0.9rem",
              marginTop: "4px",
            }}
          >
            {skill.name}
          </Typography>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;