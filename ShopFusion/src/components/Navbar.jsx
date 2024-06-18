import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useTranslation } from "react-i18next";
import { delCurrentUser } from "../redux/action";

function Header() {
  const [show, setShow] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const state = useSelector((state) => state.handleCart);
  const userdata = useSelector((state) => state.handleSubmitForm) || {};
  const currentUser = userdata.currentUser || null;

  const { t } = useTranslation();

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = (signUp = false) => {
    setIsSignUp(signUp);
    setShow(true);
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const logOutUser = () => {
    dispatch(delCurrentUser());
  };

  return (
    <>
      {t("welcome")}
      <Navbar expand="lg" className="bg-body-tertiary py-3 sticky-top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img style={{ width: "60px" }} src="shopFussion.png"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                {t("home")}
              </Nav.Link>
              <Nav.Link as={Link} to="products">
                {t("products")}
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
              <NavDropdown title={t("clothings")} id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="products/men's clothing">
                  {t("men")}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="products/women's clothing">
                  {t("women")}
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("others")} id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="products/electronics">
                  {t("electronics")}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="products/jewelery">
                  {t("jwelery")}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="d-flex">
              <DropdownButton
                variant="outline-info"
                className="me-3"
                id="dropdown-item-button"
                title="Languages"
              >
                <Dropdown.Item as="button" onClick={() => changeLanguage("en")}>
                  EN
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => changeLanguage("fr")}>
                  FR
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => changeLanguage("it")}>
                  IT
                </Dropdown.Item>
              </DropdownButton>
              {currentUser !== null ? (
                //  <Button
                //   variant="outline-primary"
                //   className="me-3"
                //   aria-label="Search"
                //   as={Link}
                //   to="/profile"
                // >
                //   Profile
                // </Button>
                <DropdownButton
                  variant="outline-success"
                  className="me-3"
                  id="dropdown-item-button"
                  title={currentUser.fullname}
                >
                  <Dropdown.Item as={Link} to="/profile">
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item as="button" onClick={logOutUser}>
                    Logout
                  </Dropdown.Item>
                </DropdownButton>
              ) : (
                <Button
                  variant="outline-primary"
                  className="me-3"
                  aria-label="Search"
                  onClick={() => handleShow(false)}
                >
                  Login
                </Button>
              )}

              <Button
                variant="outline-success"
                className="me-3"
                aria-label="Search"
                as={Link}
                to="/cart"
              >
                Cart ({state.length})
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* signup and signin forms */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="d-flex justify-content-center w-100">
            <Modal.Title>{isSignUp ? "Sign Up" : "Sign In"}</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          {isSignUp ? (
            <RegisterModal open={setShow} />
          ) : (
            <LoginModal open={setShow} />
          )}
          <div className="text-center mt-3">
            {isSignUp ? (
              <>
                <span>Already have an account? </span>
                <Button variant="link" onClick={toggleForm}>
                  Sign In
                </Button>
              </>
            ) : currentUser === null ? (
              <>
                <span>Don't have an account? </span>
                <Button variant="link" onClick={toggleForm}>
                  Sign Up
                </Button>
              </>
            ) : (
              ""
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
