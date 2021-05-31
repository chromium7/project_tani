import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

const Background = styled.div`
  display: none;
  @media only screen and (min-width: 576px) {
    display: block;
    background: #333333;
    color: #ffffff;
  }
`;

const Space = styled.div`
  flex: 1;
`;

const FlexItem = styled.div`
  margin: 0.4rem 0 0.4rem 1rem;

  svg {
    font-size: 0.8rem;
    margin: 0 0.4rem;
  }
`;

export default function ContactHeader() {
  return (
    <Background>
      <div className="container d-flex align-self-center ms-auto">
        <Space />
        <FlexItem>
          <FaPhoneAlt />
          <span>+62 81123456789</span>
        </FlexItem>
        <FlexItem>
          <FaEnvelope />
          <span>@example.example.com</span>
        </FlexItem>
      </div>
    </Background>
  );
}
