import React from 'react'
import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import CardModal from './CardModal'

const StyledRoot = styled(Dialog.Root)`
  position: relative;
`
const StyledOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`
const StyledBorder = styled.div`
  border-right: 1px solid;
`

const StyledCard = styled.div`
  width: 282px;
  height: 64px;
  display: flex;

  align-items: center;
  margin: 10px 40px 35px 0;

  border-radius: 8px;
  box-shadow: 0 3px 12px 0 rgba(52, 40, 87, 0.1);
`
const Title = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    max-width: 200px;
    font-size: 18px;
    margin: 0;
  }
`

const ProviderLogo = styled.div`
  height: 40px;
  width: 40px;
  background: 0% 0% / contain no-repeat rgb(245, 245, 247);
  background-repeat: no-repeat;
  border-radius: 8px;
  margin: 0 10px 0 0;
  padding: 12px;
`

const Card = ({ provider, countries }) => {
  const logoUrl = provider.logo_url || provider.group_logo_url

  return (
    <StyledRoot>
      <Dialog.Trigger asChild>
        <StyledCard>
          <StyledBorder>
            <ProviderLogo
              style={{
                backgroundImage: `url(${logoUrl})`,
              }}
            />
          </StyledBorder>

          <Title>
            <h1>{provider.name}</h1>
          </Title>
        </StyledCard>
      </Dialog.Trigger>
      <Dialog.Portal>
        <StyledOverlay />
      </Dialog.Portal>

      <CardModal countries={countries} provider={provider} />
    </StyledRoot>
  )
}

export default Card
