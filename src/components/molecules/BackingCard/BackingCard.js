import { useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import ViewWrapper from '../ViewWrapper/ViewWrapper'
import Paragraph from 'components/atoms/Paragraph/Paragraph'
import { screen } from 'styles/Screen'
import { ReactComponent as CloseModal } from 'assets/images/icon-close-modal.svg'
import { useAppContext } from 'context'
import Pledge from 'components/molecules/Pledge/Pledge'

const Container = styled(ViewWrapper)`
  width: 85vw;
  padding: 2rem 1.5rem;

  ${screen.desktop(css`
    max-width: 45.625rem;
    margin: 0 auto;
  `)}
`

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 1rem;

  h2 {
    font-size: 1.125rem;

    ${screen.desktop(css`
      font-size: 1.5rem;
    `)}
  }

  svg {
    cursor: pointer;
    transform: translateY(-100%);

    :hover #path {
      color: ${({ theme }) => theme.colors.black};
      opacity: 1;
    }

    :focus {
      outline: 2px dashed ${({ theme }) => theme.colors.red};
      outline-offset: 4px;
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }
  }
`

const BackingCard = ({ handleCloseModal }) => {
  const { rewards } = useAppContext()
  const buttonRef = useRef()

  useEffect(() => {
    buttonRef.current.focus()
  }, [])

  return (
    <Container>
      <Heading>
        <h2>Back this project</h2>
        <CloseModal
          onClick={handleCloseModal}
          ref={buttonRef}
          tabIndex="0"
          aria-label="Close dialog"
        />
      </Heading>
      <Paragraph>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </Paragraph>
      {rewards.map(reward => (
        <Pledge key={reward.id} {...reward} />
      ))}
    </Container>
  )
}

export default BackingCard
