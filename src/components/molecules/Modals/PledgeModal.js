import styled, { css, keyframes } from 'styled-components'
import ViewWrapper from '../ViewWrapper/ViewWrapper'
import Paragraph from 'components/atoms/Paragraph/Paragraph'
import ProductList from 'components/organisms/ProductList/ProductList'
import Pledge from '../Pledge/Pledge'
import { screen } from 'styles/Screen'
import { useAppContext } from 'context'
import { ReactComponent as CloseModal } from 'assets/images/icon-close-modal.svg'
import ModalOverlay from './ModalOverlay'

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
  }

  svg {
    cursor: pointer;
  }
`

const PledgeModal = () => {
  const { isPledgeModalOpen, togglePledgeModal } = useAppContext()

  return (
    <ModalOverlay>
      <Container isModalOpen={isPledgeModalOpen}>
        <Heading>
          <h2>Back this project</h2>
          <CloseModal onClick={togglePledgeModal} />
        </Heading>
        <Paragraph>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </Paragraph>
        <ProductList modalView />
      </Container>
    </ModalOverlay>
  )
}

export default PledgeModal
