import React, { useState, useContext, useEffect } from 'react'
import data from 'data/data'

const AppContext = React.createContext({
  isMenuOpen: false,
  isBackingCardShown: false,
  isConfirmationCardShown: false,
  rewards: [],
  stats: [],
})

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBackingCardShown, setIsShowBackingCardShown] = useState(false)
  const [isConfirmationCardShown, setIsConfirmationCardShown] = useState(false)
  const [rewards, setRewards] = useState(data.rewards)
  const [stats, setStats] = useState(data.stats)

  const toggleMenu = () => {
    const container = document.getElementById('modal-container')
    if (!isMenuOpen) {
      setIsMenuOpen(true)
      container.classList.add('overlay')
    } else {
      setIsMenuOpen(false)
      container.classList.remove('overlay')
    }
  }

  const openBackingCard = () => setIsShowBackingCardShown(true)

  const closeBackingCard = () => setIsShowBackingCardShown(false)

  const openConfirmationCard = () => setIsConfirmationCardShown(true)

  const closeConfirmationCard = () => setIsConfirmationCardShown(false)

  const selectReward = id => {
    const updatedPledges = rewards.map(reward => {
      if (reward.id === id) {
        return { ...reward, selected: true }
      }
      return { ...reward, selected: false }
    })
    setRewards(updatedPledges)
    openBackingCard()
  }

  const updateStats = amount => {
    setStats(prevState => {
      return {
        ...prevState,
        backed: prevState.backed + amount,
        backers: prevState.backers + 1,
      }
    })
  }

  const updateRewards = id => {
    const newRewards = rewards.map(reward => {
      if (reward.id === id) {
        return { ...reward, quantity: reward.quantity - 1 }
      }
      return reward
    })
    setRewards(newRewards)
  }

  useEffect(() => {
    isBackingCardShown
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'auto')
  }, [isBackingCardShown, isConfirmationCardShown])

  return (
    <AppContext.Provider
      value={{
        stats,
        isBackingCardShown,
        openBackingCard,
        closeBackingCard,
        isConfirmationCardShown,
        openConfirmationCard,
        closeConfirmationCard,
        isMenuOpen,
        toggleMenu,
        rewards,
        selectReward,
        updateStats,
        updateRewards,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
