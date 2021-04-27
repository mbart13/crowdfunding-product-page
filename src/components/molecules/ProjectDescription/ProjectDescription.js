import Bookmark from 'components/atoms/Buttons/Bookmark'
import Button from 'components/atoms/Buttons/Button'
import {
  Wrapper,
  Title,
  Description,
  ButtonWrapper,
} from './ProjectDescription.styles'

const ProjectDescription = () => {
  return (
    <Wrapper>
      <Title>Mastercraft Bamboo Monitor Riser</Title>
      <Description>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </Description>
      <ButtonWrapper>
        <Button label="Back this project" />
        <Bookmark />
      </ButtonWrapper>
    </Wrapper>
  )
}

export default ProjectDescription
