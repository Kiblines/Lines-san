import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 250px;
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem;
  margin: 10px 40px 35px 0;
  border-radius: 8px;
  box-shadow: 0 3px 12px 0 rgba(52, 40, 87, 0.1);
`;
const Title = styled.h2``;

const ParamContainer = styled.div`
  margin-left: 1rem;
`;

const ParamTitle = styled.div`
  font-weight: bold;
`;

const Card = ({ book }) => {
  return (
    <StyledCard>
      <Title>{book.livre_titre}</Title>
      <div>
        <ParamTitle>Prix</ParamTitle>
        <ParamContainer>{book.livre_prix}</ParamContainer>
        <ParamTitle>ISBN</ParamTitle>
        <ParamContainer>{book.livre_isbn}</ParamContainer>
        <ParamTitle>Langue</ParamTitle>
        <ParamContainer>{book.livre_langue}</ParamContainer>
      </div>
    </StyledCard>
  );
};

export default Card;
