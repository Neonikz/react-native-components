import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface FlatListMenuItemProps {
    menuItem: MenuItem
}

const FlatListMenuItem = ({ menuItem }: FlatListMenuItemProps) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => navigation.navigate(menuItem.component)}
        >

            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    size={23}
                    color='#ccc'
                />

                <Text style={styles.itemText}>{menuItem.name}</Text>

                <View style={{ flex: 1 }} />

                <Icon
                    // style={styles.arrowIcon}
                    name='chevron-forward-outline'
                    size={23}
                    color='#ccc'
                />
            </View>
        </TouchableOpacity>
    )
}

export default FlatListMenuItem;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        color: '#000',
        marginLeft: 10,
        fontSize: 19,
    },
    // arrowIcon: {
    //     position: 'absolute',
    //     right: 0
    // },
}); 