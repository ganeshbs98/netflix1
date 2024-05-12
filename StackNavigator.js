import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './Screens/Login'
import RegisterScreen from './Screens/RegisterScreen'
import plansScreen from './Screens/PlanScreen'
import ProfileScreen from './Screens/ProfileScreen'

const StackNavigator = () => {
    const Stack=createNativeStackNavigator()
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name='LoginScreen' component={Login}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='Plans' component={plansScreen}/> */}
        <Stack.Screen name='Profile' component={ProfileScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})