import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useAppContext } from "../appContext";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Container, Nav, Navbar } from "react-bootstrap";
// Images
import Logo from "./defaultNavLogo.svg";

const FixedNavSpacer = styled.div`
  height: var(--nav-height);
`;


// #region component
const propTypes = {
  Logo: PropTypes.node.isRequired,
};

const defaultProps = {
  Logo: Logo,
};

export default function NavBar({ Logo }) {
  const [isNavLinkActive, setIsNavLinkActive] = useState(false);
  const { theme, isExpanded, closeExpanded, toggleExpanded } = useAppContext();
  const { pathname } = useLocation();
  const navLinks = {
    routes: [
      { id: "1R", name: "Home", route: "/" },
      { id: "2R", name: "All Projects", route: "/All-Projects" },
    ],
    to: [
      { id: "1T", name: "ㄱㄱㅋ 2024", to: "Home" },
      { id: "2T", name: "ㄱㄱㅋ 소개", to: "About" },
      { id: "3T", name: "발표/프로그램", to: "Programs" },
      { id: "4T", name: "후원", to: "Sponsors" },
      { id: "5T", name: "오시는 길", to: "WayToGo" },
      { id: "6T", name: "FAQ", to: "Faqs" },
    ],
  };

  const checkActiveNavLink = () => {
    const activeNavLink = document.querySelectorAll(".nav-link.active:not([id='1T'])").length;
    setIsNavLinkActive(activeNavLink);
  }

  useEffect(() => {
    const handleScroll = event => {
      checkActiveNavLink();
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="lg"
        expanded={isExpanded}
        bg= "dark"
        variant= "dark"
        fixed="top"
        style={{
          borderBottom: isNavLinkActive ? '1px solid #495057' : 'transparent',
        }}
      >
        <Container fluid="xxl">
          <Navbar.Brand>
            <img
              alt="Logo"
              src={Logo}
              width="35"
              height="35"
              className="rounded-circle"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              {pathname === "/"
                ? navLinks.to.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <ScrollLink
                          to={el.to}
                          spy={true}
                          activeClass="active"
                          className="nav-link title"
                          id={el.id}
                          onClick={closeExpanded}
                        >
                          {el.name}
                        </ScrollLink>
                      </Nav.Item>
                    );
                  })
                : navLinks.routes.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <Link
                          to={el.route}
                          className={
                            pathname === el.route
                              ? "nav-link active"
                              : "nav-link"
                          }
                          onClick={closeExpanded}
                        >
                          {el.name}
                        </Link>
                      </Nav.Item>
                    );
                  })}
            </Nav>
            <Nav>
            <Nav.Item>
              <a className="nav-link title active" href='https://github.com/lazydevconf/lazydevconf.github.io' target="_blank" rel="noopener">신청
              <Icon icon="tabler:hand-click" />
              </a>
            </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
// #endregion
