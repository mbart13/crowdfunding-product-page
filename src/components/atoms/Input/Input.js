import InputWrapper from './Input.styles'

const Input = ({ type, label, placeholder, className }) => {
  return (
    <InputWrapper className={className}>
      <p>$</p>
      <input type={type} aria-label={label} placeholder={placeholder} />
    </InputWrapper>
  )
}

export default Input
