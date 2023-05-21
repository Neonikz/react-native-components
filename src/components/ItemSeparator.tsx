import React, { useContext } from 'react'
import { View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ItemSeparator = () => {

    const { theme: { dividerColor } } = useContext(ThemeContext)

    return (
        <View
            style={{
                borderBottomWidth: 1,
                borderBottomColor: dividerColor,
                marginVertical: 8
            }}
        />
    )
}

