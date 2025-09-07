// src/components/Navbar.js
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";

export default function MyNavbar() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar bg="black" variant="black" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
            My Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* اللينكات في النص */}
            <Nav className="mx-auto text-center">
              <Nav.Link as={Link} to="/" className="text-white fw-semibold">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white fw-semibold">About</Nav.Link>
              <Nav.Link as={Link} to="/skills" className="text-white fw-semibold">Skills</Nav.Link>
              <Nav.Link as={Link} to="/projects" className="text-white fw-semibold">Projects</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-white fw-semibold">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}
