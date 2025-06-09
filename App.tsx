import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BottomBar from './BottomBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/Home';
import SettingsScreen from './pages/Settings';
import ProductsScreen from './pages/Products';

const Stack = createNativeStackNavigator();



const CustomersScreen = () => (
  <View style={styles.screen}>
    <Text>Customers Screen</Text>
  </View>
);

const ToolsScreen = () => (
  <View style={styles.screen}>
    <Text>Tools Screen</Text>
  </View>
);


function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome', headerShown: false }}
        />
        <Stack.Screen
          name="Customers"
          component={CustomersScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tools"
          component={ToolsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <BottomBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
