import 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login'
import HomeScreen from './components/HomeScreen';
import Payment from './components/Payment';
import TakeAPicture from "./components/TakeAPicture";
import Kidrequest from "./components/Kidrequest";
import Kidconfirm from "./components/Kidconfirm";
import Kidpay from "./components/Kidpay";
import Kidcard from "./components/Kidcard";
import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';


Icon.loadFont();

function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
      <Button title="Back to login :)" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}


function ProfileScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Text>Friends: </Text>
      <Text>{route.params.names[0]}</Text>
      <Text>{route.params.names[1]}</Text>
      <Text>{route.params.names[2]}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home Tabs" component={MyTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function PaymentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Take Picture of Item" component={TakeAPicture} options={{ headerShown: false }} />
      <Stack.Screen name="Send Request" component={Kidrequest} />
      <Stack.Screen name="Pending Authorization" component={Kidconfirm} />
      <Stack.Screen name="Confirm Payment" component={Kidpay} />
      <Stack.Screen name="Pay with Card" component={Kidcard} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f1fffa"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: colors.mintBackground }}
      barStyle={{ backgroundColor: '#18944c' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PaymentAuthorization"
        component={PaymentStack}
        options={{
          tabBarLabel: 'Payment',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="credit-card" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
}


