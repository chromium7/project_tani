import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

const Bar = styled.div`
  background: grey;
  display: flex;
`;

const Space = styled.div`
  flex: 1;
`;

export default function ContactHeader() {
  return (
    <Bar className="container">
      <Space></Space>
      <div>
        <FaPhoneAlt />
        <span>+62 81123456789</span>
        <FaEnvelope />
        <span>@example.example.com</span>
      </div>
    </Bar>
  );
}
