import { Nav, Button } from "react-bootstrap";
import { Link } from "react-scroll";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link href="#about" className="text-[#3E484E] fw-bold mx-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </Nav.Link>
        </Nav.Item>
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
          <Nav.Link href="#developer" className="text-[#3E484E] fw-bold mx-2">
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
    </div>
  );
};

export default Sidebar;
