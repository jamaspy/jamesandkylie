import React, { createContext, useContext, useState } from 'react'

const ConfettiContext = createContext({
    confettiIsVisible: false,
    showConfetti: () => {},
    hideConfetti: () => {},
})

const ConfettiContextProvider = ({children}) => {
    const [confettiIsVisible, setConfettiIsVisible] = useState(false)
    return (
        <ConfettiContext.Provider
            value={{
                confettiIsVisible,
                showConfetti: () => setConfettiIsVisible(true),
                hideConfetti: () => setConfettiIsVisible(false),
            }}
        >
            {children}
        </ConfettiContext.Provider>
    )
}

const useConfetti = () => useContext(ConfettiContext)
export { ConfettiContextProvider, ConfettiContext, useConfetti }
