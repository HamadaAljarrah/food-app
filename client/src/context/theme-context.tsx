import React, { useState, useContext, createContext } from "react";



type Props = { children: React.ReactNode }
interface ITheme { theme: 'light' | 'dark'; toggleTheme: () => void; }
const themeContext = createContext<ITheme>({} as ITheme);

export const ThemProvider = ({ children }: Props) => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </themeContext.Provider>

    )
}

export const useTheme = () => useContext(themeContext)