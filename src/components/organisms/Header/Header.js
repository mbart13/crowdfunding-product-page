import styled, { css } from 'styled-components'
import bgMobile from 'assets/images/image-hero-mobile.jpg'
import bgDesktop from 'assets/images/image-hero-desktop.jpg'
import Navbar from 'components/molecules/Navbar/Navbar'
import { screen } from 'styles/Screen'

const Wrapper = styled.header`
  background: url(${bgMobile}) center/cover no-repeat;
  height: 18.75rem;

  ${screen.desktop(css`
    background: url(${bgDesktop}) top/cover no-repeat;
    height: 25rem;
  `)}
`
const Header = () => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  )
}

export default Header
