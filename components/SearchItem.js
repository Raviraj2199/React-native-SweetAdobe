import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import{useNavigation} from '@react-navigation/native'

const SearchItem = (props) => {
    const data =props.data
    const navigation=useNavigation();
    //console.log(data);
  return (
    <View>
      <Pressable onPress={() => navigation.navigate("Reserve",
      {
        id:data.key,
        img:data.img,
        description:data.description,
        lat:data.lat,
        location:data.location,
        person:data.person,
        price:data.price,
        reveiew:data.reveiew,
        star:data.star,
        title:data.title,
        total:data.total,
        distance:data.distance,
        image:data.image,
      })} style ={{ marginTop:10,margin:10}}>
        <Image style={{width:"100%",height:300,borderRadius:20}} source={{uri:data.img}}/>
        <Pressable style={{position: "absolute",top:20,right:20}}>
        <FontAwesome5 name="heart" size={24} color="black" />    
        </Pressable>        
        <View>
            <View style = {{
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between",
            }}>
                <Text style =
                    {{fontSize:17,}}>{data.location}
                </Text>
                <Text style =
                    {{fontSize:17,fontWeight:"bold"}}>{data.price}
                </Text>
            </View>
        </View>
        <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style =
                    {{fontSize:17,color:"purple"}}>
                {data.distance} Km Away 
            </Text>
            <Text>March 20 - 25</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default SearchItem

const styles = StyleSheet.create({})