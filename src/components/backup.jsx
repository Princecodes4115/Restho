import { useState } from "react";
import { Link } from "react-scroll";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import LOGO from "../assets/react.svg";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const showDropdown = () => {
    setShow(true);
  };

  const hideDropdown = () => {
    setShow(false);
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className=" pt-4 pb-4"
      style={{ backgroundColor: "#04090C" }}
    >
      <Container className="w-80">
        <Navbar.Brand className="text-white font-weight-bold">
          <img
            alt=""
            src={LOGO}
            width="200"
            height="auto"
            className="d-inline-block align-top mr-2"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown
              title={<span className="text-[#3E484E] fw-bold">Home</span>}
              id="basic-nav-dropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              {/* ... Dropdown items */}
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="#about" className="text-[#3E484E] fw-bold mx-2">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#faq" className="text-[#3E484E] fw-bold mx-2">
                <Link
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Menu
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#developer"
                className="text-[#3E484E] fw-bold mx-2"
              >
                <Link
                  to="#"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Pages
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#blog" className="text-[#3E484E] fw-bold mx-2">
                <Link
                  to="#"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Blog
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#contact" className="text-[#3E484E] fw-bold mx-2">
                <Link
                  to="#"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Button
            variant="#BF9444"
            className="text-white bg-[#BF9444] px-4 py-2 rounded-pill hover"
            style={{ backgroundColor: "#BF9444" }}
          >
            Find Reservation
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
