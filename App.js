import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import Header from "./Src/Header";
import Box from "./Src/Box";
import { ImageBackground } from "react-native";
import { Platform } from "react-native";
import { StatusBar } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./Src/yel.jpg")}
        style={{ height: "100%", paddingTop: 25 }}
      >
        <View style={styles.ImageWrap}>
          {/* <Text>Hello</Text> */}
          <Image
            source={require("./Src/yel.jpg")}
            style={{
              height: 200,
              width: 180,
              borderColor: "#eee",
              borderWidth: 10,
              borderRadius: 10,
              margin: 5,
            }}
          />
          <Image
            source={require("./Src/yell.jpg")}
            style={{
              height: 200,
              width: 180,
              borderColor: "#eee",
              borderWidth: 10,
              borderRadius: 10,
              margin: 5,
            }}
          />
          <Image
            source={require("./Src/yel.jpg")}
            style={{
              height: 200,
              width: "90%",
              borderColor: "#eee",
              borderWidth: 10,
              borderRadius: 10,
              margin: 5,
              alignSelf: "stretch",
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    paddingTop:Platform.OS==="android"?StatusBar.currentHeight : 0
  },
  ImageWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
// console.log(StatusBar.currentHeight)
export default App;

// paddingTop:Platform.os=="Android" ? StatusBar.currenthEIGHT : 0
