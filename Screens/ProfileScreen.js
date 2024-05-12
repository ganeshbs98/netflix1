import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
      <View>
       <Ionicons name="arrow-back" size={24} color="black" />
        <Text>Profiles and More</Text>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})