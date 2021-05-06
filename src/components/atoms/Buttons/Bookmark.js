import { useState } from 'react'

import { StyledBookmark } from './Bookmark.styles'
import { ReactComponent as BookmarkIcon } from 'assets/images/icon-bookmark.svg'

const Bookmark = () => {
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <StyledBookmark
      aria-checked={isBookmarked ? true : false}
      role="checkbox"
      onClick={() => setIsBookmarked(prevState => !prevState)}
      bookmarked={isBookmarked}
    >
      <BookmarkIcon />
      <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
    </StyledBookmark>
  )
}

export default Bookmark
