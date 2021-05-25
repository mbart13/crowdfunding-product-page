import InputWrapper from './Input.styles'

const Input = ({
  type,
  label,
  placeholder,
  className,
  handleInput,
  value,
  isError,
  tab,
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
          tabIndex={tab}
        />
      </InputWrapper>
    </>
  )
}

export default Input
