import Bookmark from './Bookmark'

const config = {
  title: 'Components/Atoms/Bookmark',
  component: Bookmark,
}

export default config

const Template = (args) => <Bookmark {...args} />

export const BookmarkToggle = Template.bind({})
