"use client"

import { createContext, useState } from "react"
import useDarkMode from "../../hooks/useDarkMode"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <ThemeContext.Provider value={{ isChecked, handleCheckboxChange }}>
            {
                !isChecked ? <div data-theme="light">
                    {children}
                </div> : <div data-theme="dark">
                    {children}
                </div>
            }



        </ThemeContext.Provider>
    )
}