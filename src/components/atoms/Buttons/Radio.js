import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }
`

const CustomRadio = styled.div`
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
    transform: scale(0);
    transition: transform 0.3s linear;
  }

  ${({ checked }) =>
    checked &&
    css`
      ::after {
        transform: scale(1);
      }
    `}
`

const Radio = ({ id, checked, tabIndex }) => {
  return (
    <Wrapper>
      <CustomRadio
        role="radio"
        aria-checked={checked}
        checked={checked}
        tabIndex={tabIndex}
      ></CustomRadio>
      {/* <input type="radio" id={id} /> */}
    </Wrapper>
  )
}

export default Radio
