import PropTypes from 'prop-types'
import { useState, useEffect, useCallback } from 'react'
import Button from 'components/atoms/Buttons/Button'
import Input from 'components/atoms/Input/Input'
import { Wrapper, FormWrapper, ErrorMessage } from './UserInput.styles'
import { useAppContext } from 'context'

const UserInput = ({ selected, pledgeAmount, id, tab }) => {
  const {
    openConfirmationCard,
    closeBackingCard,
    updateStats,
    updateRewards,
  } = useAppContext()
  const [typedInput, setTypedInput] = useState('')
  const [isError, setIsError] = useState(false)
  const [showError, setShowError] = useState(false)

  const isInvalid = useCallback(() => {
    return (
      !typedInput ||
      (pledgeAmount && +typedInput < pledgeAmount) ||
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
    } else {
      setShowError(true)
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
      isError={isError}
      selected={selected}
      aria-expanded={selected ? true : false}
    >
      <h3>Enter your pledge</h3>
      <FormWrapper onSubmit={handleSubmit} aria-live="polite">
        <Input
          type="number"
          placeholder={pledgeAmount}
          label="Enter your pledge"
          handleInput={handleInput}
          value={typedInput}
          isError={isError}
          tab={tab}
          aria-invalid={isError}
        />
        <Button label="Continue" tab={tab} />
        {showError && (
          <ErrorMessage>
            Minimum pledge should be {pledgeAmount ? pledgeAmount : '1'}
          </ErrorMessage>
        )}
      </FormWrapper>
    </Wrapper>
  )
}

UserInput.propTypes = {
  selected: PropTypes.bool,
  pledgeAmount: PropTypes.number,
}

export default UserInput
