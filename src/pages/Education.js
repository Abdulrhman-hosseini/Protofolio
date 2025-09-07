import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Bachelor's Degree in Computer Science",
    university: "Cairo University",
    year: "2020 - 2024",
    description:
      "Studied computer science fundamentals, web development, and software testing techniques.",
  },
  {
    title: "Frontend Development Course",
    university: "Udemy",
    year: "2023",
    description:
      "Learned React.js, Bootstrap, Tailwind, and JavaScript best practices for building modern UI.",
  },
  {
    title: "Software Testing Foundation",
    university: "ISTQB Certified",
    year: "2024",
    description:
      "Gained strong knowledge of manual testing, test cases, bug reporting, and Selenium basics.",
  },
];

export default function Education() {
  return (
    <Container
      fluid
      className="gradient-bg min-vh-100 d-flex align-items-center justify-content-center"
    >
      <Row className="w-100 p-5 justify-content-center">
        <Col md={10} className="text-center">
          <motion.h2
            className="text-white mb-5 fw-bold"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            🎓 My Education
          </motion.h2>

          <Row className="g-4 justify-content-center">
            {educationData.map((edu, idx) => (
              <Col key={idx} xs={12} md={6} lg={4}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ delay: idx * 0.2, duration: 0.4 }}
                >
                  <Card
                    className="p-4 text-center border-0 rounded-4 shadow-card"
                    style={{
                      background: "rgba(255, 255, 255, 0.07)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      cursor: "pointer",
                      minHeight: "220px",
                    }}
                  >
                    <Card.Title className="text-white fs-5 mb-2">
                      {edu.title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-info">
                      {edu.university}
                    </Card.Subtitle>
                    <Card.Text className="text-light fs-6">
                      {edu.year}
                    </Card.Text>
                    <Card.Text className="text-white-50">
                      {edu.description}
                    </Card.Text>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

     
      <style>
        {`
          .shadow-card {
            transition: all 0.4s ease;
          }
          .shadow-card:hover {
            box-shadow: 0 10px 25px rgba(255, 255, 255, 0.25);
            transform: translateY(-6px);
          }
        `}
      </style>
    </Container>
  );
}
