import ProgressBar from './ProgressBar'
import styled from 'styled-components'

const config = {
  title: 'Components/Atoms/ProgressBar',
  component: ProgressBar,
}

const Wrapper = styled.div`
  width: 17.5rem;
`
export default config

const Template = args => (
  <Wrapper>
    <ProgressBar {...args} />
  </Wrapper>
)

export const Default = Template.bind({})

Default.args = {
  raised: 80000,
  total: 100000,
}
