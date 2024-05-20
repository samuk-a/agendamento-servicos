import React, { ReactNode, createContext, useEffect, useState } from 'react'

interface BridgeGuardProviderProps {
  isAuthenticated: boolean
  setIsAuthenticated: (isAuthenticated: boolean) => void
  isToShow: boolean
  setIsToShow: (isToShow: boolean) => void
  handleLougout: () => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
export const BridgeGuardContext = createContext({} as BridgeGuardProviderProps)

export const BridgeGuardProvider = ({ children }: { children: ReactNode }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isToShow, setIsToShow] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('isAuthenticated', 'true')
    window.location.replace('/admin')
  }

  const handleLougout = () => {
    localStorage.removeItem('isAuthenticated')
    setIsAuthenticated(false)
  }

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    isToShow,
    setIsToShow,
    handleLougout,
    handleSubmit
  }

  // Authenticated logic.
  // When the user reload the screen it should call the token in the local storage to check if the user is authenticated.
  // Will be called only once.
  useEffect(() => {
    const isAuthenticatedLocal = localStorage.getItem('isAuthenticated')

    if (isAuthenticatedLocal === 'true' && !isAuthenticated) {
      setIsAuthenticated(true)
      setIsToShow(true)
    } else if (!isAuthenticatedLocal && isAuthenticated) {
      setIsAuthenticated(false)
      setIsToShow(false)
    }
  })

  // Always check if the user is authenticated and redirect to the login page if it is not
  useEffect(() => {
    const isAuthenticatedLocal = localStorage.getItem('isAuthenticated');

    if (!isAuthenticatedLocal && window.location.pathname !== '/login' && window.location.pathname !== '/signup') {
      window.location.replace('/login')
    } else if (isAuthenticatedLocal && window.location.pathname === '/login') {
      window.location.replace('/')
    }
  })

  return (
    <BridgeGuardContext.Provider value={value}>
      {children}
    </BridgeGuardContext.Provider>
  )
}

