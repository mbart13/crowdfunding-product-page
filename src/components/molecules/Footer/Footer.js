import styled from 'styled-components'

const Wrapper = styled.footer`
  text-align: center;
  padding: 1.5rem;
  font-size: 0.7rem;
  margin-top: 5.75rem;

  a {
    color: ${({ theme }) => theme.colors.cyan};
    font-size: inherit;

    ::after {
      background-color: ${({ theme }) => theme.colors.cyan};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <p className="attribution">
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer noopener"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href="https://github.com/mbart13"
        target="_blank"
        rel="noreferrer noopener"
      >
        Michal
      </a>
      .
    </p>
  </Wrapper>
)

export default Footer
