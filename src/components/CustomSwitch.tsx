import React, { useState, useContext } from 'react'
import { Switch, Platform } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface CustomSwitchProps {
    isOn: boolean;
    onChange: (value: boolean) => void;
}
export const CustomSwitch = ({ isOn, onChange }: CustomSwitchProps) => {

    const [isEnabled, setIsEnabled] = useState(isOn)
    const { theme: { colors } } = useContext(ThemeContext)
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
        onChange(!isEnabled)
    };

    return (
        <Switch
            trackColor={{ false: '#D9D9DB', true: colors.primary }}
            thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
