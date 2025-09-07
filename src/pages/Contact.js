import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <Container
      fluid
      className="gradient-bg min-vh-100 d-flex align-items-center justify-content-center"
    >
      <Row className="w-100 justify-content-center p-4">
        <Col md={8} className="text-center">
          {/* العنوان */}
          <motion.h2
            className="text-white fw-bold display-5 mb-3"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Contact Me
          </motion.h2>

          {/* الخط تحت العنوان */}
          <motion.div
            className="mx-auto mb-4"
            style={{
              width: "90px",
              height: "4px",
              backgroundColor: "#0d6efd",
              borderRadius: "3px",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7 }}
          />

          {/* الوصف */}
          <motion.p
            className="text-white-50 fs-5 mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Feel free to connect with me through social media or send me a message!
          </motion.p>

         
          <Row className="justify-content-center gap-4">
          
            <Col xs="auto">
              <motion.a
                href="https://www.facebook.com/share/1Au3ipGRpw/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
                whileHover={{ scale: 1.2, backgroundColor: "#1877F2" }}
              >
                <FaFacebook />
              </motion.a>
            </Col>

           
            <Col xs="auto">
              <motion.a
                href="https://wa.me/201019175169"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
                whileHover={{ scale: 1.2, backgroundColor: "#25D366" }}
              >
                <FaWhatsapp />
              </motion.a>
            </Col>

        
            <Col xs="auto">
              <motion.a
                href="https://github.com/Abdulrhman-hosseini"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
                whileHover={{ scale: 1.2, backgroundColor: "#333" }}
              >
                <FaGithub />
              </motion.a>
            </Col>

            
            <Col xs="auto">
              <motion.a
                href="https://www.linkedin.com/in/abdo-hosseini/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
                whileHover={{ scale: 1.2, backgroundColor: "#0A66C2" }}
              >
                <FaLinkedin />
              </motion.a>
            </Col>

            
            <Col xs="auto">
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abdohosseini32@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
                whileHover={{ scale: 1.2, backgroundColor: "#EA4335" }}
              >
                <SiGmail />
              </motion.a>
            </Col>
          </Row>
        </Col>
      </Row>

      
      <style>
        {`
          .contact-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70px;
            height: 70px;
            font-size: 2rem;
            color: white;
            background-color: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 50%;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            cursor: pointer;
          }

          .contact-icon:hover {
            color: #fff;
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
          }
        `}
      </style>
    </Container>
  );
}
