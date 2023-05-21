import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const ChangeThemeScreen = () => {

    const { setDarkTheme } = useContext(ThemeContext)

    return (
        <View
            style={styles.globalMargin}
        >
            <HeaderTitle title='Theme' />

            <TouchableOpacity
                onPress={setDarkTheme}
                style={{
                    backgroundColor: '#5856D6',
                    justifyContent: 'center',
                    width: 150,
                    height: 50,
                    borderRadius: 20
                }}
                activeOpacity={0.8}
            >
                <Text style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 22,
                }}>
                    Light / Dark
                </Text>
            </TouchableOpacity>
        </View>
    )
}
