import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Camera } from "expo-camera";

export default Parentallowance1 = () => {
    return(
        <View>
            <View style={styles.maincontainer}>
                <View style={styles.subcontainer}>
                    <Text style={{ color: '#000', fontSize: 18 }}> Taylor's Total Allowance</Text>
                    <View style={styles.subsubcontainer}>
                        <Text style={{ color: '#000', fontSize: 42 }}> $50 </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonStyle2: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#263238',
    },
    temp2: {
        padding: 10,
    },
    temp1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
    },
    maincontainer: {
        borderRadius: 10,
        width: 275,
        height: 150,
        padding: 5,
    },
    subcontainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F1FFFA',
        alignItems: 'center',
        borderRadius: 20,
        height: 100,
    },
    subcontainer2: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F1FFFA',
        alignItems: 'center',
        borderRadius: 20,
    },
    subsubcontainer: {
        flex: 1,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 8,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        borderRadius: 10
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