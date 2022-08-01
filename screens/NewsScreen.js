import React, { useContext, useState } from 'react'
import { NewsContext } from '../API/Context';
import {
    Dimensions,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import SingleNews from '../components/SingleNews';

export default function NewsScreen() {
    const { news: { articles } } = useContext(NewsContext);
    const windowHeight = Dimensions.get("window").height;
    const [activeIndex, setActiveIndex] = useState();

    console.log('news? ', articles)

    return (
        <View style={styles.carousel}>
            {
                articles && (
                    <Carousel
                        layout={"stack"}
                        data={articles.slice(0, 10)}
                        sliderHeight={300}
                        itemHeight={windowHeight}
                        vertical={true}
                        renderItem={({ item, index }) => (
                            <SingleNews item={item} index={index} />
                        )}
                        onSnapToItem={(index) => setActiveIndex(index)}

                    // renderItem={({ item, index }) => (
                    //   <SingleNews item={item} index={index} darkTheme={darkTheme} />
                    // )}
                    />
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        transform: [{ scaleY: -1 }],
        backgroundColor: "black",
    },
})