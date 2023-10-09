import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../../assets/studio-logo.svg';
import colors from '../../utils/style/colors';

const StyledNavbar = styled(Navbar)`
  background-color: transparent;
  z-index: 1;
`;

const ImgLogo = styled.img`
  height: 80px;
  width: 80px;
`;

const CustomNav = styled(Nav)`
  .nav-link {
    color: ${colors.primaryColor};
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.01825rem;
    border-radius: 0.8125rem;

    &:hover {
      text-decoration: none;
    }

    &.full-link {
      width: 6.0625rem;
      color: white;
      text-align: center;
      background: linear-gradient(250deg, #8468f5 72.09%, #ec74e7 352.57%);
    }

    &.active {
      text-decoration: underline;
      color: ${colors.secondaryColor};
    }
  }
`;

const CustomNavbarToggle = styled(Navbar.Toggle)`
  border: none;
  background-color: transparent !important;
  padding: 0;

  .navbar-toggler-icon {
    border-radius: 1rem;
  }

  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
`;

function Header() {
  return (
    <header>
      <StyledNavbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <ImgLogo
              src={Logo}
              className="d-inline-block align-top"
              alt="3d shape logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            as={CustomNavbarToggle}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <CustomNav className="mr-auto">
              <Nav.Link href="#home" active>
                Home
              </Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#support">Support</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#quote" className="full-link">
                Quote
              </Nav.Link>
            </CustomNav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </header>
  );
}

export default Header;
