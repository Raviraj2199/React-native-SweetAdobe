import { StyleSheet, Text, TextInput, View,ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { FontAwesome } from '@expo/vector-icons';
import Cards from '../components/Cards';
import Explore from '../components/Explore';
import Experience from '../components/Experience';


const HomeScreen = () => {
  return (
    <ScrollView>
      

        <Header/>
        <Cards/>
        <Explore/>
        <Experience/>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})