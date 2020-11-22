import { ThemeProvider } from '@react-navigation/native';
import React from 'react';
import { Button, View, Image, SafeAreaView, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export default Login = ({ navigation }) => {
    const [text, setText] = React.useState('');
    const [pass, setPass] = React.useState('');

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.logoWrapper}>
                    <Image source={require('../assets/images/logo4.png')} style={styles.logo}></Image>
                </View>
            </SafeAreaView>
            <View style={styles.loginContainer}>
                <TextInput
                    label="Username"
                    mode="outlined"
                    theme={{ colors: { primary: '#63c788' } }}
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    label="Password"
                    mode="outlined"
                    theme={{ colors: { primary: '#63c788' } }}
                    secureTextEntry={true}
                    value={pass}
                    onChangeText={pass => setPass(pass)}
                />
                <View style={styles.buttonWrapper}>
                    <Button
                        color='#1BB55C'
                        onPress={() =>
                            navigation.navigate('Home Tabs')
                        }
                        style={styles.buttonStyle}
                        title="Login"
                    />
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{paddingTop: 4}}>
                            Forgot Password?
                        </Text>
                        <Text style={{paddingTop: 6}}>
                            Create a parent account
                        </Text>
                        <Text style={{paddingTop: 4}}>
                            Create a child account
                        </Text>
                    </View>
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
        width: 135,
        height: 125,
        left: 118,
        top: 180,
    },
    logo: {
        width: 161,
        height: 161
    },
    loginContainer: {
        position: 'absolute',
        width: 250,
        height: 153,
        left: 60,
        top: 340,
    },
    buttonWrapper: {
        paddingTop: 10
    },
    buttonStyle: {
    }
});