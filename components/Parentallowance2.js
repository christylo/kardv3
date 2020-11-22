import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Camera } from "expo-camera";

export default Parentallowance2 = () => {
    return(
        <View>
            <View style={styles.maincontainer}>
                <View style={styles.subcontainer}>
                    <Text style={{ color: '#000', fontSize: 18 }}>Rewards</Text>
                    <View style={{paddingVertical:10}}>
                        <TouchableOpacity onPress = {() => {/* do this */}}>
                            <View style = {{backgroundColor: '#1BB55C', alignItems: 'center',
                                justifyContent: 'center', borderRadius: 5, paddingHorizontal: 10, paddingVertical:3}}
                            >
                                <Text style = {{color: 'black'}}>Dishes                                 $2.00 ⊕</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingVertical:10}}>
                        <TouchableOpacity onPress = {() => {/* do this */}}>
                            <View style = {{backgroundColor: '#1BB55C', alignItems: 'center',
                                justifyContent: 'center', borderRadius: 5, paddingHorizontal: 10, paddingVertical:3}}
                            >
                                <Text style = {{color: 'black'}}>Clean Room                       $5.00 ⊕</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingVertical:10}}>
                        <TouchableOpacity onPress = {() => {/* do this */}}>
                            <View style = {{backgroundColor: '#F7FA73', alignItems: 'center',
                                justifyContent: 'center', borderRadius: 5, paddingHorizontal: 10, paddingVertical:3}}
                            >
                                <Text style = {{color: 'black'}}>Rake Leaves                      $1.00 ⊕</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingVertical:10}}>
                        <TouchableOpacity onPress = {() => {/* do this */}}>
                            <View style = {{backgroundColor: 'red', alignItems: 'center',
                                justifyContent: 'center', borderRadius: 5, paddingHorizontal: 10, paddingVertical:3}}
                            >
                                <Text style = {{color: 'black'}}>Homework                         $1.00 ⊕</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingVertical:10}}>
                        <TouchableOpacity onPress = {() => {/* do this */}}>
                            <View style = {{backgroundColor: 'red', alignItems: 'center',
                                justifyContent: 'center', borderRadius: 5, paddingHorizontal: 10, paddingVertical:3}}
                            >
                                <Text style = {{color: 'black'}}>Help Grandma                  $2.00 ⊕</Text>
                            </View>
                        </TouchableOpacity>
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
        height: 300,
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
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 1,
        paddingBottom: 1,
        backgroundColor: '#E5E5E5',
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