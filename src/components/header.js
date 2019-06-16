import React from "react";
import { Navbar, NavbarBrand, Nav } from "reactstrap";
import Img from "gatsby-image";
const Header = props => {
  return (
    <div>
      <Navbar color="dark" light>
        <NavbarBrand
          style={{ display: "block", width: "350px" }}
          className="mx-auto"
        >
          <Img fluid={props.image} />
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;
