import styled, { css, keyframes } from 'styled-components'
import ViewWrapper from '../ViewWrapper/ViewWrapper'
import Paragraph from 'components/atoms/Paragraph/Paragraph'
import ProductList from 'components/organisms/ProductList/ProductList'
import Pledge from '../Pledge/Pledge'
import { screen } from 'styles/Screen'
import { useAppContext } from 'context'
import { ReactComponent as CloseModal } from 'assets/images/icon-close-modal.svg'

const fadeIn = keyframes`
  0% {
    transform: translateY(50%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
     opacity: 1;
  }
`

const fadeOut = keyframes`
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(100%);
  }
`

const Container = styled(ViewWrapper)`
  width: 85vw;
  padding: 2rem 1.5rem;
  opacity: 0;
  /* animation: ${fadeOut} 0.3s ease-out; */

  ${({ showModal }) =>
    showModal &&
    css`
      animation: ${fadeIn} forwards 0.5s ease-in;
    `}

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
  }

  svg {
    cursor: pointer;
  }
`

const ModalContent = () => {
  const { isModalOpen, toggleModal } = useAppContext()

  return (
    <Container showModal={isModalOpen}>
      <Heading>
        <h2>Back this project</h2>
        <CloseModal onClick={toggleModal} />
      </Heading>
      <Paragraph>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </Paragraph>
      <Pledge
        modalView
        title="Pledge with no reward"
        text="Choose to support us without a reward if you simply believe in our project. As a backer, 
  you will be signed up to receive product updates via email."
      />
      <ProductList modalView />
    </Container>
  )
}

export default ModalContent
