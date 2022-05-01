import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Form from "./Form";

const icon = (
  <Icon name="check-circle" color={"green"} style={{ marginRight: 5 }} />
);

export default function Washing(props) {
  const [showForm, setshowForm] = useState(false);
  const [date, setdate] = useState({
    val: "",
  });
  const [state, setstate] = useState(true)
  const showforms = () => {
    setshowForm(true);
    props.settoggle(false)
  };
  const handlechange = (e) => {
    const copydate = { ...date };
    copydate[e.target.name] = e.target.value;
    setdate(copydate);
    if (!date && state) {
      props.settoggle(false);
    } else {
      props.settoggle(true);
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <Text>One-Time</Text>
        <Text style={{ color: "green", fontWeight: "bold" }}>Silver</Text>
        <Text>Gold</Text>
        <Text>Platinum</Text>
      </View>{" "}
      <Image
        source={require("../image/carwash.jpg")}
        style={{ width: "90%", height: 200, margin: 20, marginTop: -10 }}
      />
      <View style={styles.details}>
        <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
          What Do You Get
        </Text>
        <Text>{icon}Thice a week outer wash</Text>
        <Text>{icon}Twice a month basic interior cleaning</Text>
        <Text>
          {icon}Starts from <Text style={{ color: "red" }}>Rs.699</Text>
        </Text>
      </View>
      <View style={styles.addCar}>
        <Text>Add Your Car</Text>
        <Button
          color={"white"}
          title={
            <Icon name="plus-circle" color={"green"} onPress={showforms} />
          }
        />
      </View>
      {showForm ? <Form setshowForm={setshowForm} state={setstate}/> : null}
      <View>
        <Text style={{ marginLeft: 20, marginTop: 5 }}>
          Select Preferred date {"&"} Time for Exterior
        </Text>
        <View>
          <View style={styles.addCar}>
            <TextInput
              style={styles.textInput}
              placeholder="Select Date & Time"
              name="val"
              value={date.val}
              onChange={handlechange}
            />
            <Icon name="calendar" color={"green"} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "grey",
    margin: 20,
    fontWeight: "bold",
  },
  details: {
    marginLeft: 20,
  },
  addCar: {
    borderWidth: 1,
    margin: 20,
    padding: 5,
    borderColor: "grey",
    shadowColor: "grey",
    shadowOpacity: 2,
    shadowRadius: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
