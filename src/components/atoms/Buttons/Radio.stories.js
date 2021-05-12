import Radio from './Radio'

const config = {
  title: 'Components/Atoms/Radio',
  component: Radio,
}

export default config

const Template = args => <Radio {...args} />

export const Default = Template.bind({})

Default.args = {
  checked: true,
}
