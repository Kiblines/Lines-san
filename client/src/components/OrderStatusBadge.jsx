import React from "react";
import styled from "styled-components";
const StatusBadge = styled.span`
  border-radius: 10px;
  background-color: ${(props) => props.background};
  font-family: "Nunito Sans", sans-serif;
  font-size: 11px;
  font-weight: 600;
  height: 18px;
  text-align: center;
  margin: O auto;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: normal;
  color: #fff;
  max-width: 70px;
  justify-self: center;
  padding: 1px 8px;
`;

export default function OrderStatusBadge(props) {
  const children = props.children;
  let backgroundColor = "#ffae00";
  switch (children) {
    case "NEW":
      backgroundColor = "#ffae00";
      break;
    case "AUTHORIZED":
      backgroundColor = "#4caf50";
      break;
    case "CLOSED":
    case "EXPIRED":
      backgroundColor = "#777";
      break;
    case "REJECTED":
    case "FAILED":
      backgroundColor = "#f44336";
      break;
  }

  return (
    <StatusBadge background={backgroundColor}>{props.children}</StatusBadge>
  );
}
