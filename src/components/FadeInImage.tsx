import React, { useState, useContext } from 'react'
import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface FadeInImageProps {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: FadeInImageProps) => {

    const { theme: { colors } } = useContext(ThemeContext)

    const { opacity, fadeIn } = useAnimation()
    const [isLoading, setIsLoading] = useState(true)

    const finishLoading = () => {
        setIsLoading(false)
        fadeIn()
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {
                isLoading &&
                <ActivityIndicator
                    style={{ position: 'absolute' }}
                    color={colors.primary}
                    size={30}
                />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any,
                    opacity
                }}
            />
        </View>
    )
}
