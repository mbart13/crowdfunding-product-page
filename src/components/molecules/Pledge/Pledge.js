import Radio from 'components/atoms/Buttons/Radio'
import Button from 'components/atoms/Buttons/Button'
import UserInput from 'components/molecules/UserInput/UserInput'
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

const Pledge = ({ modalView, productName, text, pledgeAmount, quantity }) => {
  return (
    <Wrapper as="article" quantity={quantity}>
      <Description>
        <HeaderWrapper>
          {modalView && <Radio />}
          <NameWrapper modalView={modalView}>
            <ProductName>{productName}</ProductName>
            <PledgeAmount>Pledge ${pledgeAmount} or more</PledgeAmount>
          </NameWrapper>
        </HeaderWrapper>
        <StyledParagraph modalView={modalView}>{text}</StyledParagraph>
        <QuantityButtonWrapper>
          <Quantity modalView={modalView}>
            <span>{quantity}</span>
            <span>left</span>
          </Quantity>
          {!modalView && quantity > 0 && <Button label="Select Reward" small />}
          {!modalView && quantity === 0 && (
            <Button disabled small label="Out of Stock" />
          )}
        </QuantityButtonWrapper>
      </Description>
      {modalView && <UserInput />}
    </Wrapper>
  )
}

export default Pledge
