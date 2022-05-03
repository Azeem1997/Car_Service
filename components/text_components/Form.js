import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import { settype, setcarname, setcompanyname } from "../redux/actions";
const minus = <Icon name="minus-circle" color={"green"} />;

export default function Form({ setshowForm, setstate }) {
  const { type, companyname, carname } = useSelector((state) => state);
  const dispatch = useDispatch();

  const hideform = () => {
    setshowForm(false);
  };

  const addcars = () => {
    setshowForm(false);
    // setstate(false);
    settype(type);
    setcompanyname(companyname);
    setcarname(carname);
    console.log(type);
    // if(type.length >0 && companyname.length>0 && carname.length>0){

    // }
  };

  return (
    <View style={{ marginLeft: 20, marginRight: 20 }}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, marginLeft: "5%" }}>Add Your Car</Text>
        <View style={styles.button}>
          {" "}
          <Button color={"white"} title={minus} onPress={hideform}></Button>
        </View>
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Vehicle Type"
          onChangeText={(val) => dispatch(settype(val))}
          // onChangeText={(val)=>handlechange(val)}
          value={type}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Car Company"
          onChangeText={(val) => dispatch(setcompanyname(val))}
          value={companyname}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Car Name"
          onChangeText={(val) => dispatch(setcarname(val))}
          value={carname}
        />
        <Button color="red" title="Add Car" onPress={addcars} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 15,
    padding: 20,
    marginTop: 10,
    marginBottom: 5,
  },

  button: {
    position: "absolute",
    marginLeft: "90%",
  },
});
