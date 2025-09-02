import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import {RootStackParamList, RouteNames} from './routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BrowserScreen from './screens/BroswerScreen';
import {WebViewProvider} from './components/WebViewProvider';
import LoginButton from './components/LoginButton';
import LoginScreen from './screens/LoginScreen';

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
    <WebViewProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={RouteNames.HomeTab}
            component={HomeTab}
            options={{
              // headerShown: false
              headerStyle: {
                backgroundColor: 'black',
              },
              headerRight: LoginButton,
              title: '',
            }}
          />
          <Stack.Screen
            name={RouteNames.Broswer}
            component={BrowserScreen}
            options={{
              // headerShown: false,
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: 'white',
            }}
          />
          <Stack.Screen
            name={RouteNames.Login}
            component={LoginScreen}
            options={{
              // headerShown: false,
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: 'white',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </WebViewProvider>
  );
};

export default App;
