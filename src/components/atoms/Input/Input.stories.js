import Input from './Input'
import styled from 'styled-components'

const config = {
  title: 'Components/Atoms/Input',
  component: Input,
}

export default config

const Wrapper = styled.div`
  max-width: 6.25rem;
`

const Template = args => (
  <Wrapper>
    <Input {...args} />
  </Wrapper>
)

export const Default = Template.bind({})

Default.args = {
  type: 'number',
  placeholder: 25,
}
