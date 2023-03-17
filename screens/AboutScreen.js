import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const photo = require("../assets/back.png");
const AboutScreen = () => {
  return (
    <ScrollView>
      <Image source={photo} style={styles.photo} />
      <View style={styles.whiteSheet} />
      <Text
        style={{
          marginTop: 50,
          fontSize: 40,
          color: "#dda15e",
          fontWeight: "bold",
          marginLeft: 18,
        }}
      >
        About Us
      </Text>
      <Text
        style={{
          marginTop: 5,
          fontSize: 30,
          color: "#faedcd",
          fontWeight: "bold",
          marginLeft: 18,
        }}
      >
        SweetAbode
      </Text>
      <Text
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
          color: "white",
          fontWeight: "500",
          fontSize: 20,
          padding: 20,
        }}
      >
        A hotel booking site allows you to search for accommodation options in a specific town or city 
        and then see all the results in one place for a side-by-side comparison of prices, reviews, amenities, and availability. 
        Once you make your selection, you can book directly through the site.
      </Text>

      <Text
        style={{
          alignItems: "center",
          marginTop: 20,
          fontWeight: "600",
          color: "white",
          fontSize: 25,
          padding: 10,
          marginLeft: 8,
        }}
      >
        Contact Details
      </Text>
      <MaterialCommunityIcons
        style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}
        name="email-outline"
        size={28}
        color="white"
      />
      <Text
        style={{
          fontSize: 18,
          color: "white",
          marginLeft: 13,
          marginTop: 5,
          marginBottom: 7,
        }}
      >
        varunravi@gmail.com
      </Text>
      <MaterialCommunityIcons
        style={{ flexDirection: "row", alignItems: "center", marginLeft: 18 }}
        name="home-outline"
        size={30}
        color="white"
      />
      <Text
        style={{
          fontSize: 18,
          color: "white",
          marginLeft: 13,
          marginTop: 5,
          marginBottom: 7,
        }}
      >
        WeWork Futura, magarpatta road, pune
      </Text>
      <Feather
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 22,
          marginTop: 10,
        }}
        name="phone"
        size={24}
        color="white"
      />
      <Text
        style={{
          fontSize: 18,
          color: "white",
          marginLeft: 20,
          marginTop: 5,
          marginBottom: 7,
        }}
      >
        020-2427001442 (Landline),
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: "white",
          marginLeft: 20,
        }}
      >
        +91-9627475453, +91-8728651371
      </Text>

      <Text
        style={{
          alignItems: "center",
          marginTop: 100,
          fontWeight: "500",
          color: "#ccc5b9",
          fontSize: 16,
          padding: 20,
        }}
      >
        This SweetAbode App has been developed by Raviraj and Varun for presentation
        purposes only. We have used technologies like firebase, react-native and
        javascript. We work as Associate Developers-Technology at Stratacent,
        Pune
      </Text>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  photo: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  whiteSheet: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
});
