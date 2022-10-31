import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import { ProvidersContext } from '../../utils/context'

import Card from './Card'
import Pagination from './Pagination'

const Wrapper = styled.div`
  border-left: solid 1px #dadde1;
  padding: 40px;
  width: 100%;
`
const CardsList = styled.div`
  display: flex;
  background-color: #fff;
  flex-wrap: wrap;
  p.no-results {
    font-weight: 600;
    color: #052e50;
    margin-bottom: 30px;
  }
`

const CardsWrapper = () => {
  const {
    countries,
    providersList,
    currentPage,
    setCurrentPage,
    setSelectedProvider,
  } = useContext(ProvidersContext)

  const noResult = !providersList.length

  //Pagination
  const providersPerPage = 20
  const indexOfLastProvider = currentPage * providersPerPage
  const indexOfFirstProvider = indexOfLastProvider - providersPerPage
  const currentProviders = providersList.slice(
    indexOfFirstProvider,
    indexOfLastProvider,
  )
  const changePage = (pageNumber, e) => {
    setCurrentPage(pageNumber)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Wrapper>
      <CardsList>
        {noResult ? (
          <p className="no-results">No results</p>
        ) : (
          currentProviders.map((provider) => (
            <Card
              key={provider.id || provider.name}
              provider={provider}
              countries={countries}
            />
          ))
        )}
      </CardsList>
      <Pagination
        providersPerPage={providersPerPage}
        totalProviders={providersList.length}
        changePage={changePage}
        currentPage={currentPage}
      />
    </Wrapper>
  )
}
export default CardsWrapper
