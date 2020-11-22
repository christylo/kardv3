import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {Camera} from "expo-camera";

export default Kidpay = () => {

    return (
        <View style={styles.maincontainer}>
            <View style={styles.subcontainer}>
                <Text style={{color: '#FFF', fontSize: 18}}> Request </Text>
                <View style={{paddingTop: 50, paddingBottom:40}}>
                    <Text style={{color: '#FFF', fontSize: 42}}>$ 5.67</Text>
                </View>
                <View style={styles.temp1}>
                    <View>
                        <Button
                            title="Pay"
                            color="#568259"
                            onPress={() => takePicture()}
                        />
                    </View>
                </View>
            </View>
        </View>
    )


}



const styles = StyleSheet.create({
    temp2:{
        padding: 10,
    },
    temp1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
    },
    maincontainer: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
    },
    subcontainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#1BB55C65',
        alignItems: 'center',
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