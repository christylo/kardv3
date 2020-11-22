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
        <View>
            <Parentallowance1/>
            <Parentallowance2/>
        </View>
    )
}
