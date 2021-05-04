import React, { useState, useContext, useEffect } from 'react'
import data from 'data/data'

const AppContext = React.createContext({
  isMenuOpen: false,
  isModalOpen: false,
})

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBackingCardShown, setIsShowBackingCardShown] = useState(false)
  const [isConfirmationCardShown, setIsConfirmationCardShown] = useState(false)
  const [pledges, setPledges] = useState(data.pledges)
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
    const updatedPledges = pledges.map(pledge => {
      if (pledge.id === id) {
        return { ...pledge, selected: true }
      }
      return { ...pledge, selected: false }
    })
    setPledges(updatedPledges)
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

  useEffect(() => {
    isBackingCardShown || isConfirmationCardShown
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
        pledges,
        selectReward,
        updateStats,
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
