import Radio from 'components/atoms/Buttons/Radio'
import {
  Wrapper,
  Description,
  HeaderWrapper,
  NameWrapper,
  ProductName,
  PledgeAmount,
  Quantity,
  UserInput,
  ButtonInputWrapper,
  StyledInput,
  StyledButton,
  StyledParagraph,
} from './Pledge.styles'

const Pledge = () => {
  return (
    <Wrapper as="article">
      <Description>
        <HeaderWrapper>
          <Radio />
          <NameWrapper>
            <ProductName>Bamboo Stand</ProductName>
            <PledgeAmount>Pledge $25 or more</PledgeAmount>
          </NameWrapper>
        </HeaderWrapper>
        <StyledParagraph>
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you’ll be added to a special
          Backer member list.
        </StyledParagraph>
        <Quantity>
          <span>101</span> left
        </Quantity>
      </Description>
      <UserInput>
        <h3>Enter your pledge</h3>
        <ButtonInputWrapper>
          <StyledInput placeholder="25" />
          <StyledButton label="Continue" />
        </ButtonInputWrapper>
      </UserInput>
    </Wrapper>
  )
}

export default Pledge
