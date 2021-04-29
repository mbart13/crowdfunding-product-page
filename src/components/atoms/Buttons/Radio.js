import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ::after {
    content: '';
    position: absolute;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.cyan};
  }
`

const Radio = ({ checked }) => {
  return <Wrapper role="radio"></Wrapper>
}

export default Radio
