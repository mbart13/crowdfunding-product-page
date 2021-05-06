import Radio from 'components/atoms/Buttons/Radio'
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

const Pledge = ({ id, title, text, pledgeAmount, quantity, selected }) => {
  const { selectReward } = useAppContext()
  return (
    <Wrapper
      quantity={quantity}
      tabIndex={quantity === 0 ? '-1' : ''}
      selected={selected}
      onClick={() => selectReward(id)}
    >
      <Description as="button" disabled={quantity === 0}>
        <HeaderWrapper>
          <Radio role="radio" aria-label="Select Reward" checked={selected} />
          <NameWrapper>
            <ProductName>{title}</ProductName>
            {pledgeAmount && (
              <PledgeAmount>Pledge ${pledgeAmount} or more</PledgeAmount>
            )}
          </NameWrapper>
        </HeaderWrapper>
        <StyledParagraph noReward={quantity === null}>{text}</StyledParagraph>
        {pledgeAmount && (
          <QuantityButtonWrapper>
            <Quantity>
              <span>{quantity}</span>
              <span>left</span>
            </Quantity>
          </QuantityButtonWrapper>
        )}
      </Description>
      {quantity !== 0 && selected && (
        <UserInput id={id} selected={selected} pledgeAmount={pledgeAmount} />
      )}
    </Wrapper>
  )
}

export default Pledge
