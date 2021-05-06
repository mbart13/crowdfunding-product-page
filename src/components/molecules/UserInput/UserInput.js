import PropTypes from 'prop-types'
import { useState, useEffect, useCallback } from 'react'
import Button from 'components/atoms/Buttons/Button'
import Input from 'components/atoms/Input/Input'
import { Wrapper, FormWrapper } from './UserInput.styles'
import { useAppContext } from 'context'

const UserInput = ({ selected, pledgeAmount, id }) => {
  const {
    openConfirmationCard,
    closeBackingCard,
    updateStats,
    updateRewards,
  } = useAppContext()
  const [typedInput, setTypedInput] = useState('')
  const [isError, setIsError] = useState(false)

  const isInvalid = useCallback(() => {
    return (
      !typedInput ||
      (pledgeAmount && +typedInput <= pledgeAmount) ||
      +typedInput <= 0
    )
  }, [typedInput, pledgeAmount])

  const checkInput = useCallback(() => {
    if (isInvalid()) {
      setIsError(true)
    } else {
      setIsError(false)
    }
  }, [isInvalid])

  const handleSubmit = e => {
    e.preventDefault()
    checkInput()
    if (!isInvalid()) {
      updateStats(+typedInput)
      updateRewards(id)
      closeBackingCard()
      setTimeout(() => openConfirmationCard(), 2000)
    }
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
    <Wrapper
      selected={selected}
      aria-live="polite"
      aria-expanded={selected ? true : false}
    >
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
