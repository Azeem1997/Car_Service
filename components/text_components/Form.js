import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Form({ setshowForm, setstate }) {
  const minus = <Icon name="minus-circle" color={"green"} />;
  const hideform = () => {
    setshowForm(false);
  };
  const addcars = () => {
    setshowForm(false);
    setstate(false);
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
          maxLength={20}
          
        />
        <TextInput
          style={styles.textInput}
          placeholder="Car Company"
          maxLength={20}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Car Name"
          maxLength={20}
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
