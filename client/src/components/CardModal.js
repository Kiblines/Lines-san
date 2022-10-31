import React from 'react'
import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

import { capabilities, appToApp } from '../../utils/utils'
import svg from '../../../static/svg'

const StyledContent = styled(Dialog.Content)`
  border-radius: 6px;
  background-color: #fff;
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  dl {
    margin: 0;
  }
  dt {
    color: #9090a7;
    font-size: 12px;
    font-weight: 800;
    margin-top: 15px;
  }
  dd {
    margin: 0;
    color: #052e50;
    font-size: 14px;
    font-weight: 600;
    &.dd-array {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      p {
        padding: 4px 5.5px 2px;
        margin: 0 3.4px 5px 0;
        font-size: 11.4px;
        font-weight: 800;
        border-radius: 4px;
      }
    }
    &.capability {
      height: 52px;
      p.has-value {
        height: 25px;
        background-color: #ffecdf;
        color: #ff814b;
      }
    }
    &.app-to-app {
      height: 30px;
      p.has-value {
        color: #052e50;
        background-color: #eff4f7;
      }
    }
  }
`

const CardModal = ({ provider, countries }) => {
  const hasCountry = provider.country_codes
    ? countries.includes(provider.country_codes[0])
    : false
  const hasCapability = provider.payment_capabilities
    ? provider.payment_capabilities.length
    : false
  const hasAppToApp = provider.app_to_app_support
    ? provider.app_to_app_support.length
    : false
  const mainCountry = hasCountry ? provider.country_codes[0] : ''
  const Flag = hasCountry ? svg[`${mainCountry}small`].svg : '-'

  const providerBic = (provider) => {
    const bic = provider.bic
    const logoUrl = provider.logo_url || provider.group_logo_url
    const isGroup = provider.group

    if (!bic) return '-'
    if (bic[8] === 'X') {
      return bic[9] === 'X' && bic[10] === 'X' ? bic : bic.slice(0, 8)
    }
    return bic
  }
  return (
    <StyledContent>
      <dl>
        {hasCountry ? <Flag /> : '-'}
        <dt>Branch name</dt>
        <dd>{provider.branch_name || '-'}</dd>

        <dt>BIC</dt>
        <dd>{providerBic(provider)}</dd>

        <dt>Payment capabilities</dt>
        <dd className="capability dd-array">
          {hasCapability
            ? provider.payment_capabilities.map(
                (cap) =>
                  capabilities[cap] && (
                    <p key={cap} className="has-value">
                      {capabilities[cap]}
                    </p>
                  ),
              )
            : '-'}
        </dd>

        <dt>App to app support</dt>
        <dd className="app-to-app dd-array">
          {hasAppToApp
            ? provider.app_to_app_support.map((app) => (
                <p key={app} className="has-value">
                  {appToApp[app]}
                </p>
              ))
            : '-'}
        </dd>

        <dt>Max start delay</dt>
        <dd>{provider.max_start_date_delay || '-'}</dd>
      </dl>
      <Dialog.Title />
      <Dialog.Description />
      <Dialog.Close asChild>
        <button>Bon matin</button>
      </Dialog.Close>
    </StyledContent>
  )
}

export default CardModal
