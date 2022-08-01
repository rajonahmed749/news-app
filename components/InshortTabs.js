import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useContext } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import DiscoverScreen from '../screens/DiscoverScreen';
import NewsScreen from '../screens/NewsScreen';
import TopNavigation from './TopNavigation';
import { NewsContext } from '../API/Context';

export default function InshortTabs() {
    const layout = useWindowDimensions();
    const { index, setIndex } = useContext(NewsContext)

    const [routes] = React.useState([
        { key: 'first', title: 'Discover' },
        { key: 'second', title: 'News' },
    ]);

    const renderScene = SceneMap({
        first: DiscoverScreen,
        second: NewsScreen,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
        />
    )
}

const styles = StyleSheet.create({})