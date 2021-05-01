import { StyledButton } from './Button.styles'
import { useAppContext } from 'context'

const Button = ({ label, disabled = false, className, small = false }) => {
  const { toggleModal } = useAppContext()

  return (
    <StyledButton
      onClick={toggleModal}
      small={small}
      disabled={disabled}
      className={className}
    >
      {label}
    </StyledButton>
  )
}

export default Button
