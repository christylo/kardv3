import React from 'react';
import { Button, View, Image, SafeAreaView, Text, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native'

export default HomeScreen = ({ navigation: { navigate } }) => {
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
                    data={[
                        { x: "Cash", y: 35 },
                        { x: "Snacks", y: 20 },
                        { x: "Meals", y: 20 },
                        { x: "Others", y: 55 }
                    ]}
                    colorScale={["#f1fffa", "#96e6b3", "#1bb55c", "#568259"]}
                    height={300}
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