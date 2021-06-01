import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import styled from "styled-components";

const FooterBackground = styled.div`
  background: var(--color-primary);
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  color: #ffffff;

  svg {
    font-size: 1.4rem;
    margin-right: 1rem;
  }

  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 2rem;
`;

const Space = styled.div`
  display: none;
  @media screen and (min-width: 576px) {
    display: block;
    flex: 1;
  }
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 2rem;
`;

export default function Footer() {
  return (
    <FooterBackground>
      <FooterContainer className="container">
        <h3>LOGO</h3>
        <p>Lorem ipsum asd</p>
        <Space />
        <FooterNav>
          <div>
            <div>About</div>
            <div>Our story</div>
            <div>Benefit</div>
          </div>
          <div>
            <div>Services</div>
            <div>Email marketing</div>
            <div>Campaigns</div>
          </div>
          <div></div>
        </FooterNav>
        <div>
          <h3>Follow Us</h3>
          <div>
            <FaFacebookSquare />
            <FaTwitterSquare />
            <FaInstagramSquare />
          </div>
        </div>
      </FooterContainer>
      <FooterContainer>
        <hr />
        <Copyright>
          Copyright 2021. Project Tani. All rights reserved.
        </Copyright>
      </FooterContainer>
    </FooterBackground>
  );
}
