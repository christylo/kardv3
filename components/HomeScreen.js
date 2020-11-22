import React, { useState, useEffect } from 'react';
import { Button, View, Image, SafeAreaView, Text, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native'

const graphicColor = ["#f1fffa", "#96e6b3", "#1bb55c", "#568259"];
const wantedGraphicData = [{ x: "Cash", y: 35 }, { x: "Snacks", y: 20 }, { x: "Meals", y: 20 }, { x: "Others", y: 55 }];
const defaultGraphicData = [{ y: 1 }, { y: 0 }, { y: 0 }, { y: 0 }];

export default HomeScreen = ({ navigation: { navigate } }) => {
    const [graphicData, setGraphicData] = useState(defaultGraphicData);

    useEffect(() => {
        setGraphicData(wantedGraphicData);
      }, []);

    return (
        <View style={styles.container}>
            {/* header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/images/mySummaryHeader.png')} style={styles.pageHeader}>
                        {/* page header */}
                    </Image>
                </View>
            </SafeAreaView>
            {/* budget displays */}
            <View style={styles.budgetDisplaysWrapper}>
                <Text style={styles.descriptionTitles}>Allowance This Month</Text>
                <Text style={styles.descriptionTitles}>Money Remaining</Text>
            </View>
            {/* test button */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <VictoryPie
                    animate={{delay: 200, duration: 20000, easing: 'exp'}}
                    data={graphicData}
                    height={300}
                    colorScale={graphicColor}
                />
                <Text>This is the home screen of the app</Text>
                <Button
                    onPress={() =>
                        navigate('Profile', { names: ['Brent', 'Satya', 'Michaś'] })
                    }
                    title="Go to Brent's profile"
                />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 35,
        paddingTop: 20
    },
    pageHeader: {
        width: 303,
        height: 62
    },
    budgetDisplaysWrapper: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 20
    },
    descriptionTitles: {
        fontSize: 15,
    }
});