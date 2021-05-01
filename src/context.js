import React, { useState, useContext, useEffect } from 'react'
import data from 'data/data'

const AppContext = React.createContext({
  isMenuOpen: false,
  isModalOpen: false,
})

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState)
  }

  useEffect(() => {
    isModalOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'initial')
  }, [isModalOpen])

  return (
    <AppContext.Provider
      value={{ isMenuOpen, toggleMenu, data, isModalOpen, toggleModal }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
