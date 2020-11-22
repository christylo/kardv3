import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Camera } from "expo-camera";
import TakeAPicture from "./TakeAPicture";
import Kidrequest from "./Kidrequest";
import Kidconfirm from "./Kidconfirm";
import Kidpay from "./Kidpay";
import Kidcard from "./Kidcard";

export default Payment = () => {

    const [pictureTaken, setPictureTaken] = useState(false);
    const [submittedRequest, setSubmittedRequested] = useState(false);
    const [submittedConfirmation, setSubmittedConfirmation] = useState(false);
    const [completedPayment, setCompletedPayment] = useState(false);


    {/*
            <TakeAPicture/>
            <Kidrequest/>
            <Kidconfirm/>
            <Kidpay/>
            <Kidcard/>
    */}

    return (
        <TakeAPicture />
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