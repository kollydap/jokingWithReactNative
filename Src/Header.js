import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width:"100%",
    backgroundColor:"#eee",
    height:"15%",
    alignItems:"center",
    justifyContent:"center"
  },
});

export default Header;
