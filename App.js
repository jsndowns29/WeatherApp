import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/app/home.js';
import {styles} from './style.js';
import { Provider } from 'react-redux';
import store from './src/app/store.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './src/features/search/search.js';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistor } from 'redux-persist';

export default function App() {

  const Stack = createStackNavigator();
  const myPersistor = persistStore(store);

  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={myPersistor}>
      <View style={styles.container}>

        <NavigationContainer>

          <Stack.Navigator screenOptions={{headerShown: false}}>

            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />

          </Stack.Navigator>

        </NavigationContainer>
        <StatusBar style="auto" />

      </View>
      </PersistGate>
    </Provider>
  );
}

