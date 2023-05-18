import React, { useState } from 'react'
import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface FadeInImageProps {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: FadeInImageProps) => {

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
                    color="#5856D6"
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
