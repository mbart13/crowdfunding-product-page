import Bookmark from './Bookmark'

const config = {
  title: 'Components/Atoms/Bookmark',
  component: Bookmark,
}

export default config

const Template = (args) => <Bookmark {...args} />

export const Default = Template.bind({})
export const Bookmarked = Template.bind({})

Default.args = {
  isBookmarked: false,
}

Bookmarked.args = {
  isBookmarked: true,
}
