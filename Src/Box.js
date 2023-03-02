import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Box = () => {
  return (
    <View style={styles.containerWrap}>
      <View style={styles.container}>
        <Text>Box</Text>
      </View>
      <View style={styles.container}>
        <Text>Box</Text>
      </View>
      <View style={styles.downWrap}>
        <View>

        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    width: "43%",
    height: "45%",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  containerWrap: {
    height: "85%",
    flexDirection: "row",
    // backgroundColor:"green",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 5,
  },
  downWrap:{
    backgroundColor:"pink",
    height:20,
    
  }
});
export default Box;
