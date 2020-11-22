import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Camera } from "expo-camera";

export default Kidcard = () => {

    return (
        <Image source={require('../assets/images/card_purple.png')} style={styles.logo} />
    )

}


const styles = StyleSheet.create({
    logo: {
        height: 200
    }
});