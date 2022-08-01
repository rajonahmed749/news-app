import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react';
import { MaterialCommunityIcons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { NewsContext } from '../API/Context';

export default function TopNavigation({ index, setIndex }) {
    const { fetchNews, darkTheme, setDarkTheme } = useContext(NewsContext);
    return (
        <View style={{ ...styles.container, backgroundColor: darkTheme ? "#282C35" : "white", }}>
            {
                index === 0 ? (
                    <TouchableOpacity style={styles.left}
                        onPress={() => setDarkTheme(!darkTheme)}
                    >
                        <Text style={{ ...styles.text, color: darkTheme ? "lightgrey" : "black" }}>
                            <MaterialCommunityIcons name="theme-light-dark" size={24} color="#007FFF" />
                        </Text>

                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.left}
                        onPress={() => setIndex(index === 0 ? 1 : 0)}
                    >
                        <SimpleLineIcons name="arrow-left" size={15} color="#007FFF" />
                        <Text style={{ ...styles.text, color: darkTheme ? "lightgrey" : "black" }}>
                            Discover
                        </Text>
                    </TouchableOpacity>
                )
            }

            <Text style={{ ...styles.center, color: darkTheme ? "white" : "black" }}>
                {index ? "All News" : "Discover"}
            </Text>

            {
                index ? (
                    <TouchableOpacity
                        style={styles.right}
                        onPress={() => fetchNews("general")}
                    >
                        <Text style={styles.text}>
                            <AntDesign name="reload1" size={24} color="#007FFF" />
                        </Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.left}
                        onPress={() => setIndex(index === 0 ? 1 : 0)}
                    >
                        <Text style={{ ...styles.text, color: darkTheme ? "white" : "black" }}>
                            All News
                        </Text>
                        <SimpleLineIcons name="arrow-right" size={15} color="#007FFF" />
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5
    },
    center: {
        paddingBottom: 5,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 4,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "700",
    },
    right: {
        width: 80,
        alignItems: "flex-end",
    },
    left: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80,
        alignItems: 'center'
    },
    text: {
        fontSize: 16
    }
})