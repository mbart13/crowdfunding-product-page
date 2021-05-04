import Button from './Button'

const config = {
  title: 'Components/Atoms/Button',
  component: Button,
}

export default config

const Template = args => <Button {...args} />

export const Default = Template.bind({})
export const Disabled = Template.bind({})

Default.args = {
  disabled: false,
  label: 'Back this project',
}

Disabled.args = {
  disabled: true,
  label: 'Out of Stock',
}
