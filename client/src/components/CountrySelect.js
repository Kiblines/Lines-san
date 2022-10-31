/* eslint-disable react/no-danger */
import React, { useState, useContext } from 'react'
import { ProvidersContext } from '../../utils/context'
import svg from '../../../static/svg'
import styled from 'styled-components'

const StyledCountrySelect = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
  border-radius: 5px;
  background-color: #eff4f7;
  width: 70px;
  height: 40px;
  padding: 0 8px;
  .arrow {
    position: relative;
    bottom: 3px;
    width: 14px;
    height: 14px;
    margin-right: 5px;
    border: solid;
    border-radius: 2px 0;
    border-width: 2.5px 2.5px 0 0;
    transform: rotate(135deg);
    transition: transform 0.1s ease-in, bottom 0.1s ease-in;
  }

  .up {
    bottom: -3px;
    transform: rotate(315deg);
  }
  .open {
    position: absolute;
    background-color: #fff;
    padding: 15px;
    top: 50px;
    right: -3px;
    width: 280px;
    border-radius: 5px;
    box-shadow: 5px 7px 38px 0 rgba(0, 0, 0, 0.1);
    .country-list-item {
      cursor: pointer;
      height: 62px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f5f5f7;
      padding: 10px;
      margin: 0;
      font-size: 14px;
      .country-label {
        display: flex;
        align-items: center;
        .country-name {
          margin: 0 0 0 15px;
        }
      }
      input {
        display: none;
      }

      input:checked + .checkmark {
        width: 10px;
        height: 17px;
        border: 3px solid #55efc4;
        border-width: 0 2.5px 2.5px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }
`

const CountrySelect = ({}) => {
  const { selectedCountry, setSelectedCountry, countries } =
    useContext(ProvidersContext)
  const [isOpen, setIsOpen] = useState(false)
  const delay = 70
  const handleExpand = () => {
    setTimeout(() => {
      setIsOpen(!isOpen)
    }, delay)
  }
  const countryNames = {
    FR: 'France',
    IT: 'Italy',
    PT: 'Portugal',
    ALL: 'All',
  }
  const authorizedCountries = countries.filter((c) =>
    Object.keys(countryNames).includes(c),
  )
  const SmallFlag = svg[`${selectedCountry}small`].svg

  return (
    <StyledCountrySelect className="dropdown" onClick={handleExpand}>
      <SmallFlag />
      <span className={isOpen ? 'arrow up' : 'arrow down'} />
      {isOpen && (
        <div className="open">
          {authorizedCountries.map((country) => {
            const Flag = svg[country].svg
            return (
              <label className="country-list-item" key={country}>
                <div className="country-label">
                  <Flag />
                  <p className="country-name">{countryNames[country]}</p>
                </div>
                <input
                  type="radio"
                  value={country}
                  key={country}
                  name="country-check"
                  onChange={(e) => {
                    setSelectedCountry(e.target.value)
                  }}
                  checked={country === selectedCountry}
                />
                <span className="checkmark" />
              </label>
            )
          })}
        </div>
      )}
    </StyledCountrySelect>
  )
}

export default CountrySelect
