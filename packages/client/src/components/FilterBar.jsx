import React from "react";
import styled from "styled-components";
import FilterIcon from "../icons/filter-icon.svg";

const Background = styled.div`
  display: flex;
  height: 56px;
  border-radius: 10px 10px 0px 0px;
  background-color: #052e50;
  align-items: center;
  padding-left: 16px;
`;

const FilterInput = styled.input`
  height: 32px;
  width: ${(props) => (props.width ? props.width : "")};
  margin: 0 8px 0px;
  border-radius: 8px;
  border: none;
  padding-left: 16px;
  padding-right: 8px;
  object-fit: contain;
  flex-grow: ${(props) => props.flexGrow};
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  flex: ${(props) => props.flex};
  line-height: 1.71;
  letter-spacing: normal;
  color: #777;
`;
const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin: 16px 43px 16px 24px;
`;

export default function FilterBar(props) {
  const { placeholder } = props;
  return (
    <Background>
      <FilterInput flex="30px" placeholder="Dropdown" />
      <FilterInput flex="2 335px" placeholder="Creation date" />
      <FilterInput flex="50px" placeholder="Service Name" />
      <FilterInput flex="50px" placeholder="Point of Sale" />
      <Icon src={FilterIcon} />
    </Background>
  );
}
