import React, { useState } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {

    const [isRefreshing, setIsRefreshing] = useState(false)
    const [data, setData] = useState<string>('')

    const onRefresh = () => {
        setIsRefreshing(true)

        setTimeout(() => {
            console.log('terminamos')
            setIsRefreshing(false)
            setData('Hola Mundo')
        }, 10500);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor="#5856D6"
                    colors={[
                        "#FF0018",
                        "#FF7F00",
                        "#FFD500",
                        "#1FB714",
                        "#0044FF",
                        "#8B00FF",
                        "#E500FF"
                    ]}
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
