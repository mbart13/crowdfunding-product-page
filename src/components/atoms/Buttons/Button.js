import { StyledButton } from './Button.styles'

const Button = ({ label, disabled = false }) => (
  <StyledButton disabled={disabled}>{label}</StyledButton>
)

export default Button
