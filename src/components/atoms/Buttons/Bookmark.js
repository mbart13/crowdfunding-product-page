import styled from 'styled-components'
import { StyledButton } from './Buttons'
import { rgba } from 'polished'
import { ReactComponent as BookmarkIcon } from 'assets/images/icon-bookmark.svg'

const StyledBookmark = styled(StyledButton)`
  background-color: ${({ theme }) => rgba(theme.colors.lighterBlack, 0.05)};
  color: ${({ theme }) => theme.colors.gray};
  position: relative;
  padding-left: 4.5rem;
  padding-right: 1.5rem;

  :hover,
  :focus {
    background-color: ${({ theme }) => rgba(theme.colors.lighterBlack, 0.05)};
  }

  :hover #circle {
    fill: #707070;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`
export const Bookmark = () => (
  <StyledBookmark>
    <BookmarkIcon />
    Bookmark
  </StyledBookmark>
)
