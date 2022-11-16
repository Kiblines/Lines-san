import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormLabel = styled.label`
  font-size: 18px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #052e50;
  font-family: "Nunito Sans", sans-serif;

  margin: 10px auto 10px 0px;
`;

const FormInput = styled.input`
  height: 30px;
  font-family: "Nunito Sans", sans-serif;
  //input with no border and a light box with a clean style
  border: none;
  //a light shadow surrounding the input
  box-shadow: 0 0 10px 0 rgb(202, 164, 75);
  padding: 4px 10px;

  &::placeholder {
    color: lightgray;
    font-weight: 400;
  }
`;

const FormTextArea = styled.textarea`
  width: 300px;
  height: 100px;
  font-family: "Nunito Sans", sans-serif;
  border: none;
  box-shadow: 0 0 10px 0 rgb(202, 164, 75);
  padding: 4px 10px;

  &::placeholder {
    color: lightgray;
    font-weight: 400;
  }
`;

const SubmitButton = styled.button`
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.3);
  border: none;
  background-color: #052e50;
  color: white;
  font-size: 18px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  border-radius: 5px;
  margin-top: 8px;
  width: 150px;

  &:hover {
    background-color: #0a4a7a;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");

  const clearForm = () => {
    setName("");
    setEmail("");
    setObject("");
    setMessage("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    clearForm();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormLabel>Nom</FormLabel>
      <FormInput
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)} // à chaque fois que la valeur de l'input va changer, on met à jour le state
      />
      <FormLabel>Email</FormLabel>
      <FormInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormLabel>Objet</FormLabel>
      <FormInput
        type="text"
        placeholder="Objet"
        value={object}
        onChange={(e) => setObject(e.target.value)}
      />
      <FormLabel>Message</FormLabel>
      <FormTextArea
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ecrivez votre message ici"
      />
      <SubmitButton type="submit">Envoyer</SubmitButton>
    </StyledForm>
  );
}
