import React from "react";
import styled from "styled-components";
import * as Select from "@radix-ui/react-select";

const StyledTrigger = styled(Select.SelectTrigger)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4;
  padding: 0 15px;
  font-size: 13;
  line-height: 1;
  height: 35;
  gap: 5;
  background-color: white;
  color: violet;
  box-shadow: 0 2px 10px black;
  &:hover {
    background-color: blue;
  }

  &:focus {
    box-shadow: 0 0 0 2px black;
  }
`;

const StyledIcon = styled(Select.SelectIcon)`
  color: green;
`;

const StyledContent = styled(Select.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 6;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

const StyledViewport = styled(Select.Viewport)`
  padding: 5;
`;

const StyledItem = styled(Select.Item)`
  all: unset;
  font-size: 13;
  line-height: 1;
  color: violet;
  border-radius: 3;
  display: flex;
  align-items: center;
  height: 25;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;

  &[data-disabled] {
    color: #ff8f88dd;
    pointer-events: none;
  }

  &[data-highlighted] {
    background-color: lightgrey;
    color: violet;
  }
`;

const items = [
  { value: "toto", label: "Toto" },
  { value: "tata", label: "tata" },
  { value: "titi", label: "titi" },
  { value: "tutu", label: "tutu" },
  { value: "trtr", label: "trtr" },
];

function FilterSelect() {
  return (
    <Select.Root>
      <StyledTrigger>
        <Select.Value placeholder="toto" />
        <StyledIcon />
      </StyledTrigger>

      <Select.Portal>
        <StyledContent>
          <Select.ScrollUpButton />
          <StyledViewport>
            {items.map((item, index) => (
              <StyledItem key={index} value={item.value}>
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator />
              </StyledItem>
            ))}
          </StyledViewport>
          <Select.ScrollDownButton />
        </StyledContent>
      </Select.Portal>
    </Select.Root>
  );
}

export default FilterSelect;
