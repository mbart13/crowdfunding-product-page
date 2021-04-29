import { StyledButton } from './Button.styles'

const Button = ({ label, disabled = false, className }) => (
  <StyledButton disabled={disabled} className={className}>
    {label}
  </StyledButton>
)

export default Button
