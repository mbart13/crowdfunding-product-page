import React, { useState, useContext } from 'react'

const AppContext = React.createContext({
  isMenuOpen: false,
})

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <AppContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
