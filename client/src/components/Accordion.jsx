import * as Accordion from "@radix-ui/react-accordion";
import styled from "styled-components";

export const AccordionRoot = styled(Accordion.Root)``;

export const AccordionItem = styled(Accordion.Item)``;

const StyledHeader = styled(Accordion.Header)`
  all: unset; // reset all styles
  display: flex;
`;

const StyledTrigger = styled(Accordion.Trigger)`
  all: unset;
  display: flex;
  flex-flow: row nowrap;

  &:hover {
    background-color: lightgrey;
  }
`;

export const AccordionHeader = (props) => {
  return (
    <StyledHeader>
      <StyledTrigger {...props}></StyledTrigger>
    </StyledHeader>
  );
};

export const AccordionContent = styled(Accordion.Content)``;
