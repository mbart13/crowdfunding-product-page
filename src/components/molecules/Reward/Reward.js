import Button from 'components/atoms/Buttons/Button'
import { useAppContext } from 'context'
import {
  Wrapper,
  Description,
  NameWrapper,
  ProductName,
  PledgeAmount,
  Quantity,
  StyledParagraph,
  QuantityButtonWrapper,
} from './Reward.styles'

const Reward = ({
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
    <Wrapper quantity={quantity} selected={selected} modalView={modalView}>
      <Description>
        <NameWrapper>
          <ProductName>{title}</ProductName>
          <PledgeAmount>Pledge ${pledgeAmount} or more</PledgeAmount>
        </NameWrapper>
        <StyledParagraph>{text}</StyledParagraph>
        <QuantityButtonWrapper>
          <Quantity>
            <span>{quantity}</span>
            <span>left</span>
          </Quantity>
          {quantity > 0 && (
            <Button
              handleClick={() => selectReward(id)}
              label="Select Reward"
              small
            />
          )}
          {quantity === 0 && <Button disabled small label="Out of Stock" />}
        </QuantityButtonWrapper>
      </Description>
    </Wrapper>
  )
}

export default Reward
