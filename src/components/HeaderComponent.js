import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onNavOpen: false,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      onNavOpen: !this.state.onNavOpen,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-1">
          <div className="col-12 col-sm-1"></div>
          <div className="col-12 col-sm-10">
            <div className="row">
              <div className="col-12 col-sm-4">
                <Navbar color="faded" light expand="sm">
                  <NavbarBrand to="/home" className="mr-auto">
                    <div class="name">Neelesh Maharjan</div>
                    <div class="profession">Software Developer</div>
                  </NavbarBrand>
                  <NavbarToggler
                    onClick={this.toggleNavbar}
                    className="ml-auto"
                  />
                  <Collapse isOpen={this.state.onNavOpen} navbar>
                    <Nav
                      navbar
                      className=" mt-5"
                      style={{ textAlign: "right" }}
                    >
                      <div className="col-sm-3">
                        <NavItem>
                          <NavLink to="/home" className="a">
                            HOME
                          </NavLink>
                        </NavItem>
                      </div>
                      <div className="col-sm-3">
                        <NavItem>
                          <NavLink to="/resume" className="a">
                            RESUME
                          </NavLink>
                        </NavItem>
                      </div>
                      <div className="col-sm-3">
                        <NavItem>
                          <NavLink to="/projects" className="a">
                            PROJECTS
                          </NavLink>
                        </NavItem>
                      </div>
                      <div className="col-sm-4">
                        {/* <NavItem>
                          <NavLink to="/blog" className="a">
                            BLOG
                          </NavLink>
                        </NavItem> */}
                      </div>
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-1"></div>
        </div>
      </div>
    );
  }
}

export default Header;
