import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface HeaderTitleProps {
    title: string;
}

export const HeaderTitle = ({ title }: HeaderTitleProps) => {

    const { top } = useSafeAreaInsets()
    const { theme: { colors } } = useContext(ThemeContext)

    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <Text style={{
                ...styles.title,
                color: colors.text
            }}>{title}</Text>
        </View>
    )
}
