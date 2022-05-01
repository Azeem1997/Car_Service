import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default function Cart() {
  return (
    <View>
      <Image
        source={require("../image/carwash.jpg")}
        style={{ width: "90%", height: 200, margin: 20, marginTop: -10 }}
      />
      <Text>Your Car is</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
 
});
