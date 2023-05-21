import React, { createContext, useReducer, useEffect } from 'react'
import { AppState, Appearance } from 'react-native'
import { ThemeState, themeReducer, lightTheme, darkTheme } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

    // const colorScheme = useColorScheme()

    const [theme, dispatch] = useReducer(themeReducer, Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme);

    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if (status === 'active') {
                (Appearance.getColorScheme() === 'light')
                    ? setLightTheme()
                    : setDarkTheme()
            }
        })
    }, [])


    // SOLO EN IOS
    // useEffect(() => {
    //     (colorScheme === 'light')
    //         ? setLightTheme()
    //         : setDarkTheme()
    // }, [colorScheme])


    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' })
    }
    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' })
    }


    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}