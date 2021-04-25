import { useState } from 'react'

import { StyledBookmark } from './Bookmark.styles'
import { ReactComponent as BookmarkIcon } from 'assets/images/icon-bookmark.svg'

const Bookmark = () => {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleClick = () => {
    setIsBookmarked((prevState) => !prevState)
  }

  return (
    <StyledBookmark
      onClick={handleClick}
      className={isBookmarked ? 'checked' : ''}
    >
      <BookmarkIcon />
      {isBookmarked ? 'Bookmarked' : 'Bookmark'}
    </StyledBookmark>
  )
}

export default Bookmark
