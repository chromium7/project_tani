import React, { useState } from "react";
import styled from "styled-components";
import {
  FaBars,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaLinkedin,
} from "react-icons/fa";

const Mobile = styled.div`
  display: block;
  overflow: hidden;
  width: 100vw;
  @media only screen and (min-width: 576px) {
    display: none;
  }
`;

const Navbar = styled.div`
  background: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const NavbarSpace = styled.div`
  position: relative;
  width: 100vw;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  pointer-events: none;
`;

const Overlay = styled.div`
  background: #333333;
  opacity: 60%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: opacity 0.4s;
  pointer-events: all;
  z-index: 5;

  &.hidden {
    opacity: 0%;
    pointer-events: none;
  }
`;

const MenuContainer = styled.div`
  background: var(--color-primary);
  color: #ffffff;
  position: fixed;
  width: 80vw;
  height: 100vh;
  top: 0;
  z-index: 10;
  transition: transform 0.4s;

  &.hidden {
    transform: translateX(-80vw);
  }
`;

const MenuTitle = styled.h3`
  text-align: center;
  margin-top: 1rem;
  color: lightblue;
  margin-bottom: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-transform: uppercase;
`;

const MenuItem = styled.ul`
  margin-left: 10px;
  list-style-type: none;

  &.menu li {
    color: rgba(255, 255, 255, 0.5);
  }

  li {
    margin-bottom: 0.5rem;

    &.active {
      border-left: solid lightgreen 5px;
      padding-left: 5px;
      color: rgba(255, 255, 255, 1);
      font-weight: 600;
    }
    svg {
      font-size: 0.8rem;
      margin: 0 0.4rem;
    }
  }
`;

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleMenu(e) {
    setMenuOpen(!menuOpen);
  }
  return (
    <Mobile>
      <NavbarSpace>LOGO</NavbarSpace>
      <Navbar className="container-sm">
        <div>LOGO</div>
        <FaBars onClick={handleMenu} />
      </Navbar>
      <Overlay className={menuOpen ? "" : "hidden"} onClick={handleMenu} />
      <MenuContainer className={menuOpen ? "" : "hidden"}>
        <MenuTitle>Logo</MenuTitle>
        <MenuItem className="menu">
          <li className="active">Home</li>
          <li>Product</li>
          <li>Testimony</li>
          <li>About</li>
        </MenuItem>
        <MenuTitle>Contact us</MenuTitle>
        <MenuItem>
          <li>
            <FaPhoneAlt />
            <span>+62 81123456789</span>
          </li>
          <li>
            <FaEnvelope />
            <span>@example.example.com</span>
          </li>
        </MenuItem>
        <MenuTitle>Social Media</MenuTitle>
        <MenuItem>
          <li>
            <FaFacebookSquare />
            Facebook
          </li>
          <li>
            <FaTwitterSquare />
            Twitter
          </li>
          <li>
            <FaInstagramSquare />
            Instagram
          </li>
          <li>
            <FaLinkedin />
            LinkedIn
          </li>
          <li>
            <FaWhatsappSquare />
            WhatsApp
          </li>
        </MenuItem>
      </MenuContainer>
    </Mobile>
  );
}
