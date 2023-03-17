import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Pressable,
  } from "react-native";
  import React from "react";
  
  const Experience = () => {
    return (
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Discover SweetAbode experiences
        </Text>
  
        <ImageBackground
          style={{
            width: 370,
            resizeMode: "contain",
            height: 450,
            marginLeft:10,
            marginTop: 20,
            borderRadius: 10,
          }}
          source={{
            uri: "https://images2.alphacoders.com/674/674966.jpg",
          }}
        >
          <View style={{ padding: 10 }}>
            <Text
              style={{
                fontSize: 30,
                color: "white",
                fontWeight: "bold",
                width: 350,
              }}
            >
              Things to do on your Trip
            </Text>
  
            <Pressable
              style={{
                backgroundColor: "white",
                padding: 10,
                marginTop: 15,
                width: 150,
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 15, fontWeight: "bold" }}
              >
                Experiences
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  export default Experience;
  
  const styles = StyleSheet.create({});