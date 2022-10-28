import React from "react";
//import Context from "../Context";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
import logo from "../assets/img/logo_3.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavbarPublic() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="navbar navbar-expand-lg">
        <Container>
          <Navbar.Brand href="#home" className="container-fluid">
            <Link to="/">
              <img alt="" src={logo} width="180" className="logo" />{" "}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item registro" id="registro">
                  <Link to="/registro" >
                    <h5 className="nav-link" href="#">Regístrate</h5>
                  </Link>
                </li>
                <li class="nav-item" id="iniciosesion">
                  <Link to="/iniciosesion" >
                    <h5 className="nav-link" href="#">Iniciar Sesión</h5>
                  </Link>
                </li>
              </ul>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
