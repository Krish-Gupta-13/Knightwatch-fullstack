import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { authActions } from "../../store/index.js";
import NavbarStyling from '../styles/Navbar.css'
import { login, logout, clock} from '../../store/index.js'
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

function NavScrollExample() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [menuOpen, setMenuOpen] = useState(false);

  const sendLogoutRequest = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/logout", null, {
        withCredentials: true,
      });
      if (res.status === 200) {
        return res;
      }
    } catch (err) {
      console.log(err);
    }
    return new Error("Unable to logout! Please try again");
  };

  const handleLogout = () => {
    sendLogoutRequest().then(() => dispatch(authActions.logout()));
  };

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };



  const sendDesc = async () => {
    const res = await axios.get('http://localhost:5000/api/user', {
      withCredentials: true
    }).catch((err)=> console.log('Error fetching user data:', err))
    const data = res.data;
    return data;
  }
  const handleDesc = (e) => {
    e.preventDefault();
    sendDesc().then(()=>dispatch(authActions.clock())).then(() => 
      history("/description")
    )
  }

  const handleHome = (e) => {
    e.preventDefault();
    sendDesc().then(()=>dispatch(authActions.clock())).then(() => 
      history("/user")
    )
  }

  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary full-body">
        <Container fluid className="full-body">
          <Navbar.Brand className="heading" >KnightWatch</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
            {isLoggedIn && <> <Nav.Link href="/user" onClick={handleHome}>Home</Nav.Link></>}
             <Nav.Link href="/description" onClick={handleDesc}>Formats</Nav.Link>
             <NavDropdown title="Platforms" id="navbarScrollingDropdown">
                <NavDropdown.Item href="https://www.chess.com/" target="_blank">Chess.com</NavDropdown.Item>
                <NavDropdown.Item href="https://lichess.org/" target="_blank">Lichess.org</NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
            <Form className="d-flex islog">
              {!isLoggedIn && 
                <Link to={"/login"} className="no-dec">
                  <button
                    className="btn btn-outline-dark header-btn islog signin"
                    type="submit"
                  >
                    LogIn
                  </button>
                </Link>
              }
              {!isLoggedIn && 
                <Link to={"/signup"} className="no-dec">
                  <button className="btn btn-outline-dark islog signup" type="submit">
                    SignUp
                  </button>
                </Link>
              }
              {isLoggedIn && 
                <Link to={"/login"} className="no-dec">
                  <button
                    className="btn btn-outline-dark isout logout"
                    type="submit"
                    onClick={handleLogout}
                  >
                    LogOut
                  </button>
                </Link>
              }
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={`content ${menuOpen ? "shifted" : ""}`}></div>
    </React.Fragment>
  );
}

export default NavScrollExample;

