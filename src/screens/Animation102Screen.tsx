import React from 'react'
import { View, StyleSheet } from 'react-native';

const Animation102Screen = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.purpleBox} />
        </View>
    )
}

export default Animation102Screen

const styles = StyleSheet.create({
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
    }
});