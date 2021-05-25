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
      // tabIndex={quantity === 0 ? '-1' : '0'}
      selected={selected}
      onFocus={() => selectReward(id)}
    >
      <Description>
        <HeaderWrapper htmlFor={title} tabIndex={quantity === 0 ? '-1' : '0'}>
          <Radio
            id={title}
            role="radio"
            // tabIndex={quantity === 0 ? '-1' : '0'}
            // {quantity === 0 && tabIndex="-1"}
            aria-label="Select Reward"
            checked={selected}
          />
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
      <UserInput
        id={id}
        selected={selected}
        pledgeAmount={pledgeAmount}
        tab={quantity === 0 ? '-1' : '0'}
      />
    </Wrapper>
  )
}

export default Pledge
