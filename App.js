import { StyleSheet, Text, View } from 'react-native';

import {
  SafeAreaView, SafeAreaProvider
} from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

import DetailScreen from './screens/DetailScreen.js'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
        <NavigationContainer >
          <SafeAreaView style={{ flex: 1 }}>
            <Stack.Navigator  >
              <Stack.Screen name="detail" component={DetailScreen} 
                options={{title: "Detail", headerShown: false }} 
              />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
