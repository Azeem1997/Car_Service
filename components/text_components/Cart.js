import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";

const arrowdown = <Icon name="arrow-down" color={"green"} />;
export default function Cart(props) {
  const { type, companyname, carname } = useSelector((state) => state);
  // const data={type,companyname,carname}

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            props.setwashingpage(true);
          }}
        >
          <Icon name="arrow-left" size={20} color="grey" />
        </TouchableOpacity>
        <Text style={{ marginLeft: 10 }}>My Cart</Text>
      </View>
      {/* {{type,carname,companyname}.map((val, index) => { */}
      <View style={{ display: "flex", flexDirection: "row", margin: 20 }}>
        <Image
          source={require("../image/carwash.jpg")}
          style={{ width: "15%", height: 50 }}
        />
        <View style={{ padding: 10 }}>
          <Text>Waterless Car Wash</Text>
          <Text>
            {type}---{carname}---{companyname} {`$999`}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          borderStyle: "solid",
          borderColor: "grey",
          borderWidth: 1,
          padding: 10,
          shadowColor: "grey",
          shadowOpacity: 2,
          shadowRadius: 4,
          shadowOffset: {
            height: 1,
            width: 1,
          },
        }}
      >
        Subscription Package : Silver
      </View>
      {/* })}  */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
        }}
      >
        <Text style={styles.text}>Date {arrowdown}</Text>
        <Text style={styles.text}>Time {arrowdown}</Text>
        <Text style={styles.text}>Duration {arrowdown}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
          marginTop: -5,
        }}
      >
        <Text>Price</Text>
        <Text>999</Text>{" "}
      </View>
      <View style={styles.view}>
        <Text>Add Address</Text>
        <Icon name="plus-circle" color={"green"} />
      </View>
      <View style={styles.view}>Apply Coupon</View>
      <View style={styles.money}>Use Money From Wallet</View>
      <View style={{margin:20,marginTop:-5}}>
        <table>
          <tbody>
            <tr>
              <td>Washing</td>
              <td>299</td>
            </tr>
            <tr>
              <td>GST</td>
              <td>299</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>299</td>
            </tr>
            <tr>
              <td>Wallet</td>
              <td>299</td>
            </tr>
          </tbody>
        </table>
      </View>
      <Button title="Go TO Checkout" color={"red"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    borderBottomColor: "black",
    borderStyle: "solid 1px black",
    fontWeight: "900",
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  text: {
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    shadowColor: "grey",
    shadowOpacity: 2,
    shadowRadius: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    marginTop: -5,
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    shadowColor: "grey",
    shadowOpacity: 2,
    shadowRadius: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  money: {
    borderStyle: "solid",
    borderColor: "orange",
    borderWidth: 1,
    padding: 10,
    margin: 20,
    marginTop: -5,
    borderStartColor: "orange",
    backgroundColor: "orange",
    color: "white",
  },
});
