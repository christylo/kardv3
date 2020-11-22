import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Camera } from "expo-camera";
import {TextInput} from "react-native-paper";

export default Parentnotification = ({ navigation }) => {

    const [pass, setPass] = React.useState('');

    return (
        <View style={styles.maincontainer}>
            <View style={styles.subcontainer}>
                <Text style={{ color: '#FFF', fontSize: 18 }}> Request </Text>
                <View style={{paddingVertical: 90}}>
                    <Text style={{ color: '#FFF', fontSize: 18 }}> Taylor has requested $5.67 </Text>
                </View>

                <View style={styles.temp1}>
                    <View>
                        <Button
                            title="Allow"
                            color="#568259"
                            onPress={() => navigation.navigate('Take Picture of Item')}
                        />
                    </View>
                    <View style={styles.temp2}>
                        <Button
                            title="Deny"
                            color="#568259"
                            onPress={() => navigation.navigate('Pending Authorization')}
                        />
                    </View>
                    <View>
                    </View>
                </View>
            </View>
        </View>
    )


}



const styles = StyleSheet.create({
    temp2: {
        padding: 10,
    },
    temp1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 0,
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