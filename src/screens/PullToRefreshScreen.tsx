import React, { useState, useContext } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {

    const { theme: { colors, dividerColor, dark } } = useContext(ThemeContext)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [data, setData] = useState<string>('')

    const onRefresh = () => {
        setIsRefreshing(true)

        setTimeout(() => {
            console.log('terminamos')
            setIsRefreshing(false)
            setData('Hola Mundo')
        }, 1500);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor={dividerColor}
                    colors={[colors.text]}
                    tintColor={dark ? 'white' : 'black'}
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull To Refresh' />

                {
                    data && <HeaderTitle title={data} />
                }
            </View>
        </ScrollView>
    )
}
