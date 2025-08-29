import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import {RootStackParamList, RouteNames} from './routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BrowserScreen from './screens/BroswerScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
      }}>
      <Tab.Screen
        name={RouteNames.Home}
        component={HomeScreen}
        options={
          {
            // headerShown: false,
          }
        }
      />
      <Tab.Screen
        name={RouteNames.Shopping}
        component={ShoppingScreen}
        options={
          {
            // headerShown: false,
          }
        }
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RouteNames.HomeTab}
          component={HomeTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={RouteNames.Broswer}
          component={BrowserScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
