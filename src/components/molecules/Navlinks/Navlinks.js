import styled from 'styled-components'

const LinksWrapper = styled.ul`
  display: none;
`

const NavLinks = () => {
  return (
    <LinksWrapper>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Discover</a>
      </li>
      <li>
        <a href="/">Get Started</a>
      </li>
    </LinksWrapper>
  )
}

export default NavLinks
