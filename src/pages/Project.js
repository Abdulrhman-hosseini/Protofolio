// Projects.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../style/project.css"; // لو عندك CSS إضافي

export default function Projects() {
  const projects = [
    {
      title: "Online Library",
      description:
        "A React-based online library with search, login, and cart system.",
      link: "https://abdulrhman-hosseini.github.io/Online-Library/",
    },
    {
      title: "Education",
      description:
        "Responsive education website built using HTML, CSS, and JavaScript.",
      link: "https://abdulrhman-hosseini.github.io/Education/",
    },
    {
      title: "Coffee Website",
      description:
        "Responsive coffee shop website built using HTML, CSS, and JavaScript.",
      link: "https://abdulrhman-hosseini.github.io/Website_Coffee/",
    },
    // {
    //   title: "Pizza Website",
    //   description:
    //     "A responsive pizza ordering website built using React and Bootstrap.",
    //   link: "https://abdulrhman-hosseini.github.io/Pizza/",
    // },
  ];

  return (
    <div
      style={{
        backgroundColor: "#000000", // الخلفية سوداء بالكامل
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      <Container>
        {/* العنوان والوصف */}
        <div className="text-center mb-5">
          <motion.h2
            className="main-title"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            My Projects
          </motion.h2>
          <div className="underline mx-auto"></div>
        </div>

        {/* كروت المشاريع */}
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col md={4} className="mb-4" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card
                  className="project-card h-100 p-3 text-center border-0"
                  style={{
                    background: "rgba(255, 255, 255, 0.07)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    cursor: "pointer",
                    minHeight: "230px",
                  }}
                >
                  <Card.Body>
                    <Card.Title className="text-white fs-5 mb-2">
                      {project.title}
                    </Card.Title>
                    <Card.Text className="text-light mb-3">
                      {project.description}
                    </Card.Text>
                    <Button
                      style={{
                        backgroundColor: "#007bff",
                        border: "none",
                        transition: "all 0.3s ease",
                      }}
                      href={project.link}
                      target="_blank"
                      className="rounded-3 fw-semibold"
                    >
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CSS داخلي */}
      <style>
        {`
          .main-title {
            font-size: 3rem;
            font-weight: bold;
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
          }
          .underline {
            width: 90px;
            height: 4px;
            background-color: #007bff;
            margin: 0 auto 20px auto;
            border-radius: 3px;
          }
          .project-card {
            transition: all 0.3s ease;
          }
          .project-card:hover {
            box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
            transform: translateY(-8px);
          }
        `}
      </style>
    </div>
  );
}
