import styled from 'styled-components'
import bgMobile from 'assets/images/image-hero-mobile.jpg'
import bgDesktop from 'assets/images/image-hero-desktop.jpg'
import Logo from 'components/atoms/Logo/Logo'
import { ReactComponent as MenuIcon } from 'assets/images/icon-hamburger.svg'
import Navbar from 'components/molecules/Navbar/Navbar'

const Wrapper = styled.header`
  background: url(${bgMobile}) center/cover no-repeat;
  height: 18.75rem;
`
const Header = () => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  )
}

export default Header
