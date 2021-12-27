import React from "react";
import {
  Text,
  View
} from "react-native";

export default function Home({navigation}) {
  return (
    <View
      style={{
        backgroundColor: "cyan",
        flex: 1
      }}
    >
      <Text
        onPress={() => {
          navigation.navigate("Article")
        }}
      >
        Click
      </Text>
    </View>
  );
};
