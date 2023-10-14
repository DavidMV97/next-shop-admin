'use client';

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
    const [brand, setBrand] = useState('red');
    const hola = 'Variable hola'; 

    return (
        <ThemeContext.Provider value={{ hola, brand, setBrand }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);