import * as React from 'react';
import { Component, useRef } from 'react'
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EntypoIcon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import FabManager from './src/fab/FabManager'
import FabButton from './src/fab/FabButton';
import FabLightbox from './src/fab/FabLightbox'


function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Click to Login "
        onPress={() => navigation.navigate('Main')}
      />
      <Button
        title="Click to Signup "
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}

function SigupScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Signup Screen</Text>
      <Button
        title="Click to Login Screen "
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        title="Show Dialog"
        onPress={() => navigation.navigate('Dialog')}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Show Dialog"
        onPress={() => navigation.navigate('Dialog')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Show Dialog"
        onPress={() => navigation.navigate('Dialog')}
      />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function DialogScreen({ navigation }) {
  return (
    <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
      <View style={{ width: '80%', height: '60%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 12 }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>

    </View>
  );
}

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator()
const SettingsStack = createStackNavigator()
const ModalStack = createStackNavigator()
const RootStack = createStackNavigator()
const Stack = createStackNavigator()
const StackFab = createStackNavigator()

function RootTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <EntypoIcon name="home" color={color} size={size} />
          ),
        }}>
        {() => (
          <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
          </HomeStack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <EntypoIcon name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <EntypoIcon name="cog" color={color} size={size} />
          ),
        }}>
        {() => (
          <SettingsStack.Navigator>
            <SettingsStack.Screen
              name="Settings"
              component={SettingsScreen}
            />
            <SettingsStack.Screen
              name="Profile"
              component={ProfileScreen} />
          </SettingsStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const RootDialog = () => {
  return (<ModalStack.Screen
    name="Dialog"
    component={DialogScreen}
    options={{
      headerShown: false,
      animationEnabled: true,
      cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.15)' },
      cardOverlayEnabled: true,
      cardStyleInterpolator: ({ current: { progress } }) => {
        return {
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'clamp',
            }),
          },
        };
      },
    }} />
  )
}

const navigationRef = React.createRef();


export default App = (props, fabRef) => {
  React.useEffect(() => {
    FabManager.register(fabRef)
    return () => {
      FabManager.unRegister()
    }
  }, [fabRef])

  return (

    <NavigationContainer ref={navigationRef}>
      <View style={{ width: '100%', height: '100%' }}>
        <RootStack.Navigator headerMode="none">
          <Stack.Screen
            name="Login"
            component={LoginScreen} />
          <Stack.Screen
            name="SignUp"
            component={SigupScreen} />
          <RootStack.Screen name="Main">
            {() => (
              RootTabs()
            )}
          </RootStack.Screen>
          {
            RootDialog()
          }
          <Stack.Screen
            name="fab"
            component={FabLightbox}
            options={{
              headerShown: false,
              animationEnabled: true,
              cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.15)' },
              cardOverlayEnabled: true,
              cardStyleInterpolator: ({ current: { progress } }) => {
                return {
                  cardStyle: {
                    opacity: progress.interpolate({
                      inputRange: [0, 0.5, 0.9, 1],
                      outputRange: [0, 0.25, 0.7, 1],
                    }),
                  },
                  overlayStyle: {
                    opacity: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 0.5],
                      extrapolate: 'clamp',
                    }),
                  },
                };
              },
            }} />
        </RootStack.Navigator>

        <FabButton innerRef={fabRef} navigationRef={navigationRef} />
      </View>
    </NavigationContainer>

  );
}
