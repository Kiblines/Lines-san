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

  //Le premier param est une fonction qui va être executé.
  // Le second paramètre, c'est un tableau de dépendance. Dedans tu y mets les dépendances de ton useEffect
  // Si tu as un tableau vide: Ca va executer la fonction au premier rendu du composant uniquement
  // Si tu n'as pas renseigné de tableau: useEffect( () => {} ), la fonction à l'intérieur sera executée à chaque rendu du composant.
  //
  useEffect(() => {
    // Le getOrders ce situe dans le fichier apiCalls.js.
    // Il faut que dans le fichier apiCalls.js tu modifies pour appeler le bon chemin de ton api PHP
    // Sinon ce bout de code va afficher une erreur dans la console
    getOrders() // => retourne {data: 3}
      .then((getOrdersResponse) => {
        //response, c'est la valeur qu'a retourné getOrders
        setBooks(getOrdersResponse.data);
        console.log(getOrdersResponse.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //La fonction map, elle s'applique sur un tableau, et elle retourne en résultat un nouveau tableau
  // const tab1 = [1,2,3]
  return (
    <BookContainer>
      {books //books !== undefined / null / 0 / false
        ? books.map((book) => <BookCard key={book.livre_id} book={book} />) //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
        : ""}
    </BookContainer>
  );
}

export default BooksPage;
