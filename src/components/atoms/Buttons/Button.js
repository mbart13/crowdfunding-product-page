import { StyledButton } from './Button.styles'

const Button = ({ label, disabled = false, className, small = false }) => (
  <StyledButton small={small} disabled={disabled} className={className}>
    {label}
  </StyledButton>
)

export default Button
