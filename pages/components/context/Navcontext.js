import React, { createContext, useState } from 'react'

export const Navcontext = createContext();
const NavcontextProvider = ({children}) => {
    const [isOpen ,setIsOpen] = useState(false)
  return (
   <Navcontext.Provider value={{isOpen,setIsOpen}}>
    {children}
   </Navcontext.Provider>
  )
}

export default NavcontextProvider
