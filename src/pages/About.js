import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import myPhoto from "../assests/WhatsApp Image 2025-05-16 at 14.00.56_10f3a4cf.jpg"; // حط صورتك هنا في فولدر src/assets

export default function About() {
  return (
    <Container
      fluid
      className="gradient-bg min-vh-100 d-flex align-items-center py-5"
    >
      <Row className="align-items-center justify-content-center w-100 px-4">
        
        {/* الصورة في الشمال */}
        <Col md={5} className="d-flex justify-content-center mb-4 mb-md-0">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="position-relative"
          >
            <div
              className="rounded-circle p-1"
              style={{
                background: "linear-gradient(135deg, #00c6ff, #0072ff)",
                padding: "6px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                src={myPhoto}
                alt="Abdulrhman Husseini"
                className="rounded-circle shadow-lg img-fluid"
                style={{
                  border: "4px solid white",
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            </div>
          </motion.div>
        </Col>

        {/* النص في اليمين */}
        <Col md={7} className="text-white">
          <motion.h2
            className="fw-bold mb-3 display-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="lead fs-5 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            I'm{" "}
            <span className="fw-bold text-white">Abdulrhman Husseini</span>, a
            passionate{" "}
            <span className="fw-bold text-white">Frontend Developer</span> and{" "}
            <span className="fw-bold text-white">Software Tester</span>.  
            I specialize in building{" "}
            <span className="fw-bold text-white">responsive</span>,{" "}
            <span className="fw-bold text-white">modern</span>, and{" "}
            <span className="fw-bold text-white">user-friendly</span> web
            applications.
          </motion.p>

          <motion.p
            className="fs-5 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Skilled in{" "}
            <span className="fw-bold text-white">React</span>,{" "}
            <span className="fw-bold text-white">Bootstrap</span>, and{" "}
            <span className="fw-bold text-white">Tailwind CSS</span>, I focus on
            writing clean, efficient, and well-tested code.  
            My goal is to create impactful digital experiences that users love.
          </motion.p>
        </Col>
      </Row>
    </Container>
  );
}
