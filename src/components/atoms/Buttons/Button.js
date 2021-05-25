import { StyledButton } from './Button.styles'

const Button = ({
  label,
  disabled = false,
  className,
  small = false,
  handleClick,
  tab,
}) => {
  return (
    <StyledButton
      onClick={handleClick}
      small={small}
      disabled={disabled}
      className={className}
      tabIndex={tab}
    >
      {label}
    </StyledButton>
  )
}

export default Button
