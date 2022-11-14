import React from "react";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";
import Title from "../components/Title";
import Contact from "../5.png";

const PageContainer = styled.div`
  flex-grow: 1;
  background-color: lightgoldenrodyellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;
const JapIcon = styled.img`
  width: 50vw;
  height: 50vw;
  max-height: 250px;
  max-width: 250px;
  margin: 10px;
`;

export default function ContactPage() {
  return (
    <PageContainer>
      <Title>Contact</Title>
      <JapIcon src={Contact}></JapIcon>
      <ContactForm />
    </PageContainer>
  );
}
