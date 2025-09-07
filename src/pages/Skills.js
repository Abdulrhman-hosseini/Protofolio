import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

import reactLogo from "../assests/React-icon.svg";
import jsLogo from "../assests/JavaScript-logo.png";
import htmlLogo from "../assests/HTML5_logo_and_wordmark.svg";
import bootstrapLogo from "../assests/Bootstrap_logo.svg";
import tailwindLogo from "../assests/Tailwind_CSS_Logo.svg";
import manualLogo from "../assests/1048960.png";
import bugLogo from "../assests/1159633.png";
import seleniumLogo from "../assests/Selenium_Logo.png";
import istqbLogo from "../assests/63_human_verify.jpg";

const frontendSkills = [
  { name: "React.js", logo: reactLogo },
  { name: "JavaScript (ES6+)", logo: jsLogo },
  { name: "HTML5 / CSS3", logo: htmlLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
];

const testingSkills = [
  { name: "Manual Testing", logo: manualLogo },
  { name: "Test Cases & Bug Reporting", logo: bugLogo },
  { name: "Selenium (Basics)", logo: seleniumLogo },
  { name: "ISTQB Foundation Knowledge", logo: istqbLogo },
];

export default function Skills() {
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
            🚀 My Skills
          </motion.h2>

          {/* Frontend Development */}
          <motion.h4
            className="text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            🎨 Frontend Development
          </motion.h4>
          <Row className="g-4 justify-content-center">
            {frontendSkills.map((skill, idx) => (
              <Col key={idx} xs={6} md={4} lg={3}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                >
                  <Card
                    className="p-3 text-center border-0 shadow-lg rounded-4"
                    style={{
                      background: "rgba(255, 255, 255, 0.07)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    <motion.img
                      src={skill.logo}
                      alt={skill.name}
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "contain",
                        marginBottom: "10px",
                      }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Card.Title className="text-white fs-6 mt-2">
                      {skill.name}
                    </Card.Title>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Testing Skills */}
          <motion.h4
            className="text-white mt-5 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            🧪 Software Testing
          </motion.h4>
          <Row className="g-4 justify-content-center">
            {testingSkills.map((skill, idx) => (
              <Col key={idx} xs={6} md={4} lg={3}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                >
                  <Card
                    className="p-3 text-center border-0 shadow-lg rounded-4"
                    style={{
                      background: "rgba(255, 255, 255, 0.07)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    <motion.img
                      src={skill.logo}
                      alt={skill.name}
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "contain",
                        marginBottom: "10px",
                      }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Card.Title className="text-white fs-6 mt-2">
                      {skill.name}
                    </Card.Title>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
