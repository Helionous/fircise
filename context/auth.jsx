import { createContext, useState } from "react"

export const AuthenticatedUserContext = createContext({})

export const AuthenticatedUserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [rol, setRol] = useState('guest')

    return (
        <AuthenticatedUserContext.Provider value={{ user, setUser, rol, setRol }}>
            {children}
        </AuthenticatedUserContext.Provider>
    )
}
