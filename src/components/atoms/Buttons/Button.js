import { StyledButton } from './Button.styles'

const Button = ({
  label,
  disabled = false,
  className,
  small = false,
  handleClick,
}) => {
  return (
    <StyledButton
      onClick={handleClick}
      small={small}
      disabled={disabled}
      className={className}
    >
      {label}
    </StyledButton>
  )
}

export default Button
