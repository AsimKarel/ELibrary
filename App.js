/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import BooksList from './screens/booksList';
import Preview from './screens/Preview';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#F8F7FF',
            },
          }}
        />
        <Stack.Screen
          name="Books"
          options={
            (({route}) => ({title: route.params.category}),
            {
              headerStyle: {
                backgroundColor: '#F8F7FF',
              },
            })
          }
          component={BooksList}
        />
        <Stack.Screen
          name="Preview"
          options={
            (({route}) => ({title: route.params.category}),
            {
              headerStyle: {
                backgroundColor: '#F8F7FF',
              },
            })
          }
          component={Preview}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
