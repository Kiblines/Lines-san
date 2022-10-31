import React, { useState } from "react";
import styled from "styled-components";
import Chevron from "../icons/chevron-left.svg";

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledUL = styled.ul`
  display: flex;
  justify-content: center;
  color: white;
  padding: 0;
`;

const StyledChevron = styled.img`
  transform: ${(props) => (props.right ? "rotate(180deg)" : "rotate(0deg)")};
  fill: red;
`;

const StyledPagination = styled.li`
  display: flex;
  margin: 0 20px;
  font-family: "Nunito Sans", sans-serif;
  color: #052e50;
`;

const StyledOval = styled.a`
  width: 32px;
  height: 32px;
  align-items: center;
  color: ${(props) => (props.active ? "#ffffff" : "#052e50")};
  display: flex;
  justify-content: center;

  background-color: ${(props) => (props.active ? "#052e50" : "transparent")};
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;

const Pagination = ({ totalPagesNumber, startPage = 1, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(startPage);

  let pageNumberToDisplay = totalPagesNumber;
  if (totalPagesNumber > 5) {
    pageNumberToDisplay = 5;
  }
  const spacePage = 2;
  let lastPage = currentPage + spacePage;
  let firstPage = currentPage - spacePage;
  if (firstPage <= 1) {
    firstPage = 1;
    lastPage = firstPage + spacePage * 2;
  }

  if (lastPage > totalPagesNumber) {
    lastPage = totalPagesNumber;
    firstPage = lastPage - spacePage * 2 > 0 ? lastPage - spacePage * 2 : 1;
  }

  if (lastPage - pageNumberToDisplay <= 0) {
    lastPage = pageNumberToDisplay;
  }

  const pageNumbers = [];
  for (let i = firstPage; i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  return (
    <>
      <StyledRow>
        <StyledChevron src={Chevron} />
        <StyledUL>
          {pageNumbers.map((pageNumber) => (
            <StyledPagination key={pageNumber}>
              <StyledOval
                active={currentPage === pageNumber}
                style={{ textDecoration: "none" }}
                onClick={() => changePage(pageNumber)}
              >
                {pageNumber}
              </StyledOval>
            </StyledPagination>
          ))}
          {/* {totalPagesNumber > 5 && lastPage !== totalPagesNumber ? (
            <>
              <StyledPagination>...</StyledPagination>
              <StyledPagination>
                <StyledOval
                  style={{ textDecoration: "none" }}
                  onClick={() => changePage(totalPagesNumber)}
                  href="#"
                >
                  {totalPagesNumber}
                </StyledOval>
              </StyledPagination>
            </>
          ) : (
            ""
          )} */}
        </StyledUL>
        <StyledChevron src={Chevron} right />
      </StyledRow>
    </>
  );
};

export default Pagination;
