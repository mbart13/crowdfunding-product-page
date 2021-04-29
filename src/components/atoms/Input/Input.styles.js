import styled from 'styled-components'
import { rgba } from 'polished'

const InputWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5rem;
  color: ${({ theme }) => theme.colors.black};
  padding: 0.9375rem 1.5rem;
  display: flex;
  min-width: 6.25rem;
  align-items: center;

  p {
    color: ${({ theme }) => rgba(theme.colors.black, 0.25)};
    margin-right: 0.5rem;
  }

  input {
    outline: none;
    border: none;
    width: 100%;

    ::placeholder {
      color: ${({ theme }) => rgba(theme.colors.black, 0.25)};
    }
  }
`

export default InputWrapper
