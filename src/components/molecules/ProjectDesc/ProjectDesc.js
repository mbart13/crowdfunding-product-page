import Bookmark from 'components/atoms/Buttons/Bookmark'
import Button from 'components/atoms/Buttons/Button'
import data from 'data/data'
import { useAppContext } from 'context'
import {
  Wrapper,
  Title,
  Description,
  ButtonWrapper,
} from './ProjectDesc.styles'

const ProjectDescription = () => {
  const { openBackingCard } = useAppContext()
  return (
    <Wrapper>
      <Title>{data.project_details.name}</Title>
      <Description>{data.project_details.description}</Description>
      <ButtonWrapper>
        <Button handleClick={openBackingCard} label="Back this project" />
        <Bookmark />
      </ButtonWrapper>
    </Wrapper>
  )
}

export default ProjectDescription
