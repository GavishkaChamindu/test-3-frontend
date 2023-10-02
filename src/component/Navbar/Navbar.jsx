import "./navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "./3 9.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiLogIn } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { RiQuestionnaireLine } from "react-icons/ri";

export default function CustomNavbar() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <div className="nav-left">
            <div className="navbar-image">
              <img src={Image} alt="" className="n-image" />
            </div>
            <div className="headers"></div>
          </div>

          <div className="nav-center"></div>

          <div className="nav-right">
            <div className="r-left">
              <div className="label-contain">
                <div className="padding-range">
                  <RiQuestionnaireLine className="icon-label" />
                </div>
              </div>
            </div>
            <div className="r-center">
              <Form className="d-flex">
                <Button variant="outline-success" className="sign in">
                  <BiLogIn className="log-icon" />
                  Sign in
                </Button>
              </Form>
            </div>
            <div className="r-right">
              <Form className="d-flex">
                <Button variant="outline-success" className="signUp">
                  {" "}
                  <HiOutlineLogout className="log-icon" />
                  Sign up
                </Button>
              </Form>
            </div>
          </div>
        </Container>
      </Navbar>
      <br /> <br />
    </div>
  );
}
