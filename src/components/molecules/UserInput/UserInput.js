import PropTypes from 'prop-types'
import { useState, useEffect, useCallback } from 'react'
import Button from 'components/atoms/Buttons/Button'
import Input from 'components/atoms/Input/Input'
import { Wrapper, FormWrapper } from './UserInput.styles'

const UserInput = ({ selected, pledgeAmount }) => {
  const [typedInput, setTypedInput] = useState('')
  const [isError, setIsError] = useState(false)

  const checkInput = useCallback(() => {
    if (!typedInput || (pledgeAmount && typedInput <= pledgeAmount)) {
      setIsError(true)
    } else {
      setIsError(false)
    }
  }, [typedInput, pledgeAmount])

  const handleSubmit = e => {
    e.preventDefault()
    checkInput()
  }

  const handleInput = e => {
    setTypedInput(e.target.value)
  }

  useEffect(() => {
    if (typedInput) {
      checkInput()
    }
  }, [checkInput, typedInput])

  return (
    <Wrapper selected={selected}>
      <h3>Enter your pledge</h3>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder={pledgeAmount}
          label="Enter your pledge"
          handleInput={handleInput}
          value={typedInput}
          isError={isError}
        />
        <Button label="Continue" />
      </FormWrapper>
    </Wrapper>
  )
}

UserInput.propTypes = {
  selected: PropTypes.bool,
  pledgeAmount: PropTypes.number,
}

export default UserInput
