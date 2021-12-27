import React from "react";
import {
  StyleSheet,
  View
} from "react-native";
import {
  marginPadding
} from "../styles";

export default function ArticleRow({children}) {
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.dot}
      />
      <View
        style={styles.childContainer}
      >
        {children}
      </View>
    </View>
  );
};

const DOT_DIAMETER = 6;

const styles = StyleSheet.create({
  childContainer: {
    paddingStart: marginPadding / 2
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    paddingStart: marginPadding,
    paddingVertical: marginPadding / 5
  },
  dot: {
    backgroundColor: "black",
    borderRadius: DOT_DIAMETER / 2,
    height: DOT_DIAMETER,
    width: DOT_DIAMETER
  }
});
