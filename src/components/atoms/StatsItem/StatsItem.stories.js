import StatsItem from './StatsItem'

const config = {
  title: 'Components/Atoms/StatsItem',
  component: StatsItem,
}

export default config

const Template = args => <StatsItem {...args} />

export const Default = Template.bind({})

Default.args = {
  prefix: '$',
  number: 88819,
  description: 'of $100,000 backed',
}
