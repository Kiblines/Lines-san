import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getOrders } from "../api/apiCalls";
import BookCard from "../components/BookCard";
import { mockBooks } from "../mock/livres";

const BookContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex-grow: 1;
  background-color: lightgoldenrodyellow;
  padding: 5vh 5vw 5vh 5vw;
`;

function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Le getOrders ce situe dans le fichier apiCalls.js.
    // Il faut que dans le fichier apiCalls.js tu modifies pour appeler le bon chemin de ton api PHP
    // Sinon ce bout de code va afficher une erreur dans la console
    getOrders()
      .then((response) => {
        setBooks(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // A supprimer lorsque tu auras fait le lien avec ton API PHP via le bout de code du dessus
  }, []);

  return (
    <BookContainer>
      {books &&
        books.map((book) => <BookCard key={book.livre_id} book={book} />)}
    </BookContainer>
  );
}

export default BooksPage;
