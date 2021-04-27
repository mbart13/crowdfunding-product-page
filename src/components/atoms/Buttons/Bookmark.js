import { useState } from 'react'

import { StyledBookmark } from './Bookmark.styles'
import { ReactComponent as BookmarkIcon } from 'assets/images/icon-bookmark.svg'

const Bookmark = () => {
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <StyledBookmark
      onClick={() => setIsBookmarked((prevState) => !prevState)}
      bookmarked={isBookmarked}
    >
      <BookmarkIcon />
      {isBookmarked ? 'Bookmarked' : 'Bookmark'}
    </StyledBookmark>
  )
}

export default Bookmark
