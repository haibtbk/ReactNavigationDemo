import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EntypoIcon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';

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

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
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
        title="Show Dialig"
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

function ModalScreen({ navigation }) {
  return (
    <View style={{ width: '100%', height:'100%', alignItems: 'center', justifyContent: 'center', position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <View style={{ width: '80%', height: '80%', alignItems: 'center', justifyContent: 'center' }}>
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

function RootTabs() {
  return (
    <Tab.Navigator
      // initialRouteName="Root"
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

const Dialog = () => {
  return (<ModalStack.Navigator>
    <RootStack.Screen name="Dialog" component={ModalScreen} />
  </ModalStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main">
          {() => (
            RootTabs()
          )}
        </RootStack.Screen>
        <RootStack.Screen name="Dialog" component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
