import React, { useState, useContext, useEffect } from 'react'
import data from 'data/data'

const AppContext = React.createContext({
  isMenuOpen: false,
  isModalOpen: false,
})

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false)
  const [pledges, setPledges] = useState(data.pledges)

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true)
      document.getElementById('modal-container').classList.add('overlay')
    } else {
      setIsMenuOpen(false)
      document.getElementById('modal-container').classList.remove('overlay')
    }
  }

  const toggleModal = () => {
    setIsPledgeModalOpen(prevState => !prevState)
  }

  const selectReward = id => {
    const updatedPledges = pledges.map(pledge => {
      if (pledge.id === id) {
        return { ...pledge, selected: true }
      }
      return { ...pledge, selected: false }
    })
    setPledges(updatedPledges)
    if (!isPledgeModalOpen) {
      toggleModal()
    }
  }

  useEffect(() => {
    isPledgeModalOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'auto')
  }, [isPledgeModalOpen])

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        pledges,
        isPledgeModalOpen,
        toggleModal,
        selectReward,
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
