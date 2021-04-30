import Button from 'components/atoms/Buttons/Button'
import Input from 'components/atoms/Input/Input'
import { Wrapper, FormWrapper } from './UserInput.styles'

const UserInput = () => {
  return (
    <Wrapper>
      <h3>Enter your pledge</h3>
      <FormWrapper>
        <Input placeholder="25" />
        <Button label="Continue" />
      </FormWrapper>
    </Wrapper>
  )
}

export default UserInput
