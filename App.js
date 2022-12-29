// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Button, Text, View} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  );
}
function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details again"
        onPress={() => {
          navigation.push('Details');
        }}
      />
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
    </View>
  );
}
function ProfileScreen({navigation}) {
  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="Go to first screen in stack"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Overview',
            headerStyle: {
              backgroundColor: 'green',
              flexDirection: 'row',
              justifyContent: 'center',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: '500',
            },
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerRight: () => (
              <Button title="btn" onPress={() => alert('This is a button')} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
