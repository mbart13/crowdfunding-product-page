import InputWrapper from './Input.styles'

const Input = ({
  type,
  label,
  placeholder,
  className,
  handleInput,
  value,
  isError,
}) => {
  return (
    <>
      <InputWrapper className={className} isError={isError}>
        <p>$</p>
        <input
          type={type}
          aria-label={label}
          placeholder={placeholder}
          onChange={handleInput}
          value={value}
        />
      </InputWrapper>
    </>
  )
}

export default Input
