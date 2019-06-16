import React from "react";
import { Navbar, NavbarBrand, Nav } from "reactstrap";
import Img from "gatsby-image";
const Footer = props => (
  <div style={{ marginTop: "auto" }}>
    <Navbar color="dark" light>
      <NavbarBrand
        style={{ display: "block", width: "350px" }}
        href="#"
        className="mx-auto"
      >
        <Img fluid={props.image} />
      </NavbarBrand>
    </Navbar>
  </div>
);

export default Footer;
