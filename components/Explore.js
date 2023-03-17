import { StyleSheet, Text, View, FlatList, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";


const Explore = () => {
  const navigation = useNavigation();
  const [places, setPlaces] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://links.papareact.com/pyp")
        .then((resposnse) => resposnse.json())
        .then((data) => setPlaces(data));
    };
    fetchData();
  }, []);
  
  return (
    <View style={{ padding: 10 }}>
      <Pressable onPress ={()=> navigation.navigate("About") } >
      <Text style={{ fontSize: 28, fontWeight: "500" }}>About Us</Text>
     </Pressable>
      <FlatList
      numColumns={2}
        data={places}
        renderItem={({ item }) => (
          <View style={{flexDirection:"row",margin:7}}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: item.img }}
            />
            <View style={{paddingLeft:10,backgroundColor:"#72A0C1",paddingTop:5,width:120}}>
              <Text style={{color:"white"}}>{item.location}</Text>
              <Text>{item.distance}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});