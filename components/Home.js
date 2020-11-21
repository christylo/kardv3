import React from 'react';
import { View, Image, SafeAreaView, Text, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import recentTransactionsData from '../assets/data/recentTransactionsData';
//import Inter from '../assets/fonts/Inter-Regular-slnt=0.tff';

//Inter.loadFont();

export default Home = () => {
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
        fontFamily: 'Inter-Regular-slnt=0',
        fontSize: 15,
    }
});