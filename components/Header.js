import { StyleSheet, Text, View ,ImageBackground,Pressable,TextInput} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();
  return (
    <View>
        <ImageBackground
        style={{width:"100%",height:540}}
        source={{
            uri:"https://4.bp.blogspot.com/-nUpzLIqhr6k/UBgB-QNkUWI/AAAAAAABB6k/7_3YrZSQiCM/s1600/dassu.jpg"
        }}
        >
            <View style ={{backgroundColor:"white",alignItems:"center",marginTop:30,width:220,flexDirection:"row",padding:8,borderRadius:16,marginLeft:"auto",marginRight:"auto"}}>
            <FontAwesome name="search" size={16} color="black" />
            <TextInput style={{fontSize:16,paddingHorizontal:10}} placeholder = 'Where U want to Go??'></TextInput>
            </View>

            <Pressable 
            onPress={() => navigation.navigate("Search")}
                style ={{backgroundColor:"white",
                width:120,
                marginLeft:"auto",
                marginRight:"auto",borderRadius:10,marginBottom:"auto",marginTop:"auto"}}>
                <Text style={{color:"#A4907C",padding:10,fontSize:14,fontWeight:"bold"}}>Enjoy Your Trip</Text>
            </Pressable>
            <View style ={{marginLeft:"auto",marginTop:"auto",marginLeft:"auto",marginRight:"auto",marginBottom:20}}>
                <Text style = {{color:"#FBFFB1",fontSize:20,fontWeight:"bold"}}>Where To Go.. ??</Text>
                <Text style = {{color:"white",fontSize:20,fontWeight:"bold",textAlign:"center"}}>Perfect</Text>
            </View>
        </ImageBackground>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})