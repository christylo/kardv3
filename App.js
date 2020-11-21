import 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home';
import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';


Icon.loadFont();

// function HomeScreen({ navigation: { navigate } }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>This is the home screen of the app</Text>
//       <Button
//         onPress={() =>
//           navigate('Profile', { names: ['Brent', 'Satya', 'Michaś'] })
//         }
//         title="Go to Brent's profile"
//       />
//     </View>
//   );
// }

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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoutName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/*<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

