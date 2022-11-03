import React from "react";
import styled from "styled-components";
import BookCard from "../components/BookCard";
import { mockBooks } from "../mock/livres";

const BookContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

function BooksPage() {
  return (
    <BookContainer>
      {mockBooks &&
        mockBooks.map((book) => <BookCard key={book.livre_id} book={book} />)}
    </BookContainer>
  );
}

export default BooksPage;
