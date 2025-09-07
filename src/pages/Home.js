import { motion } from "framer-motion";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Typewriter } from 'react-simple-typewriter';
import profilePic from "../assests/WhatsApp Image 2025-05-16 at 14.00.56_10f3a4cf.jpg";
import myCV from "../assests/abdulrhman_husseini_cv 3.pdf";  

export default function Home() {
  return (
    <Container fluid className="gradient-bg">
      <Row className="align-items-center justify-content-center w-100">

        {/* النص */}
        <Col md={6}>
          <motion.h1
            className="text-white"   
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm{" "}
            <span style={{ color: "#ffffff", fontWeight: "bold" }}>
              <Typewriter
                words={['Abdulrhman Husseini']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.h1>

          <motion.p
            className="lead text-white"   
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            A Frontend Developer specializing in React, Bootstrap, and Tailwind CSS.  
            I create responsive and interactive web applications and Software Tester, ISTQB.    
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Button
              variant="light"
              size="lg"
              href={myCV}
              download="Abdulrhman_Husseini_CV.pdf"
            >
              Download CV 📄
            </Button>
          </motion.div>
        </Col>

        {/* الصورة */}
        <Col md={6} className="text-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={profilePic}
              roundedCircle
              fluid
              style={{ maxWidth: "300px", boxShadow: "0 0 20px rgba(0,0,0,0.5)" }}
            />
          </motion.div>
        </Col>

      </Row>
    </Container>
  );
}
