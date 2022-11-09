import React from "react";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

const StyledRoot = styled(Dialog.Root)``;

const TriggerContainer = styled(Dialog.Trigger)`
  all: unset;
  width: 250px;
  display: flex;
  flex-flow: column nowrap;

  padding: 1rem;
  margin: 10px 40px 35px 0;
  border-radius: 8px;
  box-shadow: 0 3px 12px 0 rgba(52, 40, 87, 0.1);
  border: none;
  background: #ffffff;

  &:hover {
    cursor: pointer;
    background-color: lightgrey;
  }
`;

const Title = styled.h2``;

const ParamContainer = styled.div`
  margin-left: 8px;
  margin-bottom: 8px;
`;

const ParamTitle = styled.div`
  font-weight: bold;
`;

const StyledOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`;

const StyledContent = styled(Dialog.Content)`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  height: 500px;
  padding: 1rem;
  position: fixed;
  inset: 50%;
  transform: translate(-50%, -50%);
`;

const Card = ({ book }) => {
  return (
    <StyledRoot>
      {/* Dans le TriggerContainer c'est ce qu'on a dans la Card*/}
      <TriggerContainer>
        <Title>{book.livre_titre}</Title>
        <div>
          <ParamTitle>Prix</ParamTitle>
          <ParamContainer>{book.livre_prix}€ </ParamContainer>
          <ParamTitle>ISBN</ParamTitle>
          <ParamContainer>{book.livre_isbn}</ParamContainer>
          <ParamTitle>Langue</ParamTitle>
          <ParamContainer>{book.livre_langue}</ParamContainer>
        </div>
      </TriggerContainer>
      <Dialog.Portal>
        <StyledOverlay />
        {/* Là dedans, c'est tout ce qui se trouve dans la modale ! */}
        <StyledContent>
          <Title>{book.livre_titre}</Title>
          <div>
            <ParamTitle>Prix</ParamTitle>
            <ParamContainer>{book.livre_prix}€ </ParamContainer>
            <ParamTitle>ISBN</ParamTitle>
            <ParamContainer>{book.livre_isbn}</ParamContainer>
            <ParamTitle>Editeur</ParamTitle>
            <ParamContainer>{book.editeur_libelle}</ParamContainer>
            <ParamTitle>Auteur</ParamTitle>
            <ParamContainer>{book.auteur_nom}</ParamContainer>
            <ParamTitle>Langue</ParamTitle>
            <ParamContainer>{book.livre_langue}</ParamContainer>
            <ParamTitle>Pages</ParamTitle>
            <ParamContainer>{book.livre_page}</ParamContainer>
            <ParamTitle>Genre</ParamTitle>
            <ParamContainer>{book.livre_genre}</ParamContainer>
          </div>
        </StyledContent>
      </Dialog.Portal>
    </StyledRoot>
  );
};

export default Card;
