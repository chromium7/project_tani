import React, { useState } from "react";
import styled from "styled-components";

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
  width: 100vw;
  color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
`;

const Overlay = styled.div`
  background: #333333;
  opacity: 60%;
  position: absolute;
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

const Menu = styled.div`
  background: var(--color-primary);
  color: #ffffff;
  position: absolute;
  width: 80vw;
  height: 100vh;
  top: 0;
  z-index: 10;
  transition: transform 0.4s;

  &.hidden {
    transform: translateX(-80vw);
  }
`;

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleMenu(e) {
    setMenuOpen(!menuOpen);
  }
  return (
    <Mobile>
      <Navbar className="container-sm">
        <div>LOGO</div>
        <div onClick={handleMenu}>menu</div>
      </Navbar>
      <Overlay className={menuOpen ? "" : "hidden"} onClick={handleMenu} />
      <Menu className={menuOpen ? "" : "hidden"}>
        <h3>ALLO</h3>
      </Menu>
    </Mobile>
  );
}
