import React from "react";
import { StyleSheet, View, Platform, Text } from "react-native";

const Shadow = () => {
  return (
    <View style={styles.shadow}>
      <Text style={styles.osText}>
        {Platform.OS === "ios" ? "ios" : "android"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: "#eeeeee",
    width: 200,
    height: 200,
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        backgroundColor: "#ebe4da",
        elevation: 20,
      },
    }),
  },
  osText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default Shadow;
