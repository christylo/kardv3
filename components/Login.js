import { ThemeProvider } from '@react-navigation/native';
import React from 'react';
import { Button, View, Image, SafeAreaView, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default Login = ({ navigation }) => {
    const [text, setText] = React.useState('');

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.logoWrapper}>
                    <Image source={require('../assets/images/logo3.png')} style={styles.logo}></Image>
                </View>
            </SafeAreaView>
            <View style={styles.loginContainer}>
                <TextInput
                    label="Username"
                    mode="outlined"
                    theme={{ colors: {primary: '#63c788'}}}
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    label="Password"
                    mode="outlined"
                    theme={{ colors: {primary: '#63c788'}}}
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <View style={styles.buttonWrapper}>
                    <Button
                        color='#1BB55C'
                        onPress={() =>
                            navigation.navigate('HomeScreen')
                        }
                        title="Login"
                    />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 161,
        height: 161,
        left: 121,
        top: 180,
    },
    logo: {
        width: 161,
        height: 161
    },
    loginContainer: {
        position: 'absolute',
        width: 280,
        height: 153,
        left: 65,
        top: 387,
    },
    buttonWrapper: {
        paddingTop: 10
    },
});