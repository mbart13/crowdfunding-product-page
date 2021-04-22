import React from 'react'

import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.cyan};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 2.0625rem;
  padding: 1.125rem 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const Button = ({ text }) => <StyledButton>{text}</StyledButton>

export default Button
