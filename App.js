import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Cart from "./components/text_components/cart";
import Washing from "./components/text_components/Washing";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./components/redux/store";
import { Provider } from "react-redux";
// const Stack = createNativeStackNavigator();

export default function App() {
  const [toggle, settoggle] = useState(true);
  const [washingpage, setwashingpage] = useState(true);
  return (
    <View>
      <Provider store={store}>
      {washingpage ? (
        <View>
          <View style={styles.header}>
            <Icon name="arrow-left" size={20} color="grey" />
            <Text style={{ marginLeft: 10 }}>Washing</Text>
          </View>
          <Washing settoggle={settoggle} />

          <View style={styles.footer}>
            <Button
              color={"red"}
              component={Cart}
              title="Add To Cart"
              disabled={toggle}
              onPress={() => {
                setwashingpage(false);
              }}
            ></Button>
          </View>
        </View>
       ) : ( 
        <Cart setwashingpage={setwashingpage} />
       )}  
      </Provider>
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
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
