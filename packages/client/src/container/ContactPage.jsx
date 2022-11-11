import React from "react";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";
import Title from "../components/Title";

const PageContainer = styled.div`
  flex-grow: 1;
  background-color: lightgoldenrodyellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

export default function ContactPage() {
  return (
    <PageContainer>
      <Title>Contact</Title>
      <ContactForm />
    </PageContainer>
  );
}
