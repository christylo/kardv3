import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Camera } from "expo-camera";
import Parentallowance1 from "./Parentallowance1";
import Parentallowance2 from "./Parentallowance2";

export default Parentallowance = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/allowanceHeader.png')} />
            <Parentallowance1 />
            <Parentallowance2 />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingHorizontal: 35,
        paddingTop: 35,
        paddingBottom: 15
    },
    pageHeader: {
        width: 303,
        height: 62
    },
    budgetDisplaysWrapper: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 10,
        width: 370,
        height: 123,
        backgroundColor: "#f1fffa"
    },
    budgetItem: {
        justifyContent: 'center',
        paddingHorizontal: 22
    },
    budgetBlock: {
        paddingLeft: 8
    },
    budgetAmountWrapper: {
        justifyContent: 'center',
        width: 110,
        height: 47,
        backgroundColor: "white",
        borderWidth: 12,
        borderColor: '#1bb55c',
        borderRadius: 5
    },
    descriptionTitles: {
        fontSize: 15,
        paddingBottom: 18
    },
    amount: {
        fontSize: 15,
        paddingHorizontal: 15
    },
    pieChartTitleWrapper: {
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 0
    },
    pieChartTitle: {
        fontSize: 25
    },
    imageWrapper: {
        flexDirection: 'row',
    },
    buttonStyle: {
    }
});