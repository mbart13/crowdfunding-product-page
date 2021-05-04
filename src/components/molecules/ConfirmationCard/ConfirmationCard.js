import styled, { css } from 'styled-components'
import ViewWrapper from '../ViewWrapper/ViewWrapper'
import { ReactComponent as CheckIcon } from 'assets/images/icon-check.svg'
import Paragraph from 'components/atoms/Paragraph/Paragraph'
import Button from 'components/atoms/Buttons/Button'
import { screen } from 'styles/Screen'

const Wrapper = styled(ViewWrapper)`
  padding: 2rem 1.5rem 2.5rem;
  opacity: 1;
  text-align: center;

  h2 {
    font-size: 1.125rem;
    margin: 1.5rem 0;
  }

  ${screen.desktop(css`
    max-width: 33.75rem;
    h2 {
      font-size: 1.5rem;
    }
  `)}
`

const ConfirmationCard = ({ handleCloseModal }) => {
  return (
    <Wrapper>
      <CheckIcon />
      <h2>Thanks for your support!</h2>
      <Paragraph>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed. Got it!
      </Paragraph>
      <Button handleClick={handleCloseModal} label="Got it!" />
    </Wrapper>
  )
}

export default ConfirmationCard
