import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {Camera} from "expo-camera";
import TakeAPicture from "./TakeAPicture";
import Kidrequest from "./Kidrequest";
import Kidconfirm from "./Kidconfirm";
import Kidpay from "./Kidpay";
import Kidcard from "./Kidcard";
import firebase from "./fire"
import moment from "moment";

import { useCollectionData } from 'react-firebase-hooks/firestore';
import {ScrollView} from "react-native-reanimated";
import { TextInput } from 'react-native-paper';

function Parentmain() {

    const ref = firebase.firestore().collection('money');

    const [text2, setText2] = React.useState('');

    const query = ref.orderBy('createdAt').limit(1);

    const [moneys] = useCollectionData(query, {idField: 'id'});



    async function addMoney(){

        await ref.add({
            amount: text2,
            createdAt: (moment().valueOf() * -1),

        });
        setText2('');
    }

    console.log(moment().valueOf()),
    console.log("test");
    console.log(moneys);

    let test4;

    if (typeof(moneys) !== 'undefined' && moneys != null)
    {
        test4 = moneys[0].amount;
    }
    else
    {
        test4 = 'tests';
    }

    return (
        <View style={{paddingTop: 100,}}>
            <Text>text3 {test4}</Text>

            <Button
                title="Test"
                color="#568259"
                onPress={() => addMoney()}
            />

            <TextInput
                label="Username"
                mode="outlined"
                theme={{ colors: { primary: '#63c788' } }}
                value={text2}
                onChangeText={text2 => setText2(text2)}
            />
        </View>
    )
}

export default Parentmain;

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