import React, { useState, useContext, useEffect } from 'react'

import Radio from 'components/atoms/Buttons/Radio'
import Button from 'components/atoms/Buttons/Button'
import UserInput from 'components/molecules/UserInput/UserInput'
import { useAppContext } from 'context'
import {
  Wrapper,
  Description,
  HeaderWrapper,
  NameWrapper,
  ProductName,
  PledgeAmount,
  Quantity,
  StyledParagraph,
  QuantityButtonWrapper,
} from './Pledge.styles'

const Pledge = ({
  id,
  modalView,
  title,
  text,
  pledgeAmount,
  quantity,
  selected,
}) => {
  const { selectReward } = useAppContext()
  return (
    <Wrapper
      as="article"
      quantity={quantity}
      selected={selected}
      modalView={modalView}
    >
      <Description
        modalView={modalView}
        onClick={() => (modalView ? selectReward(id) : null)}
      >
        <HeaderWrapper>
          {modalView && <Radio checked={selected} />}
          <NameWrapper modalView={modalView}>
            <ProductName>{title}</ProductName>
            {pledgeAmount && (
              <PledgeAmount>Pledge ${pledgeAmount} or more</PledgeAmount>
            )}
          </NameWrapper>
        </HeaderWrapper>
        <StyledParagraph modalView={modalView} noReward={quantity === null}>
          {text}
        </StyledParagraph>
        <QuantityButtonWrapper>
          {pledgeAmount && (
            <Quantity modalView={modalView}>
              <span>{quantity}</span>
              <span>left</span>
            </Quantity>
          )}
          {!modalView && quantity > 0 && (
            <Button
              handleClick={() => selectReward(id)}
              label="Select Reward"
              small
            />
          )}
          {!modalView && quantity === 0 && (
            <Button disabled small label="Out of Stock" />
          )}
        </QuantityButtonWrapper>
      </Description>
      {modalView && (
        <UserInput selected={selected} pledgeAmount={pledgeAmount} />
      )}
    </Wrapper>
  )
}

export default Pledge
