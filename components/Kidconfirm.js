import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableWithoutFeedback, View, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Camera } from "expo-camera";


export default Kidconfirm = ({ navigation }) => {

    return (
        <View style={styles.maincontainer}>
            <View style={styles.subcontainer}>
                <Text style={{ color: '#FFF', fontSize: 18 }}> Request </Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Confirm Payment')}>
                    <View style={{ paddingTop: 30, paddingBottom: 20 }}>
                        <Text style={{ color: '#FFF', fontSize: 42 }} > Waiting </Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={{ color: '#FFF', fontSize: 18 }}> Request sent. </Text>
                <Text style={{ color: '#FFF', fontSize: 18 }}> Waiting for Molly </Text>
                <View style={styles.temp1}>
                    <View>
                        <Button
                            title="Cancel"
                            color="#568259"
                            onPress={() => navigation.navigate('Take Picture of Item')}
                        />
                    </View>
                </View>
            </View>
        </View >
    )


}



const styles = StyleSheet.create({
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
        height: 312,
        left: (275 / 6),
        top: 100
    },
    subcontainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#1BB55C65',
        alignItems: 'center',
        borderRadius: 20
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