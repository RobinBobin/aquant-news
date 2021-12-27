import { useNavigation } from "@react-navigation/native";
import React, {
  useCallback,
  useRef,
  useState
} from "react";
import {
  Pressable,
  StyleSheet,
  View
} from "react-native";
import {
  Text
} from "react-native-elements";
import {
  marginPadding
} from "../styles";
import {
  getRandomColor
} from "../utils";

function Row({children}) {
  const dotDiameter = useRef(6).current;
  
  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        paddingStart: marginPadding
      }}
    >
      <View
        style={{
          backgroundColor: "black",
          borderRadius: dotDiameter / 2,
          height: dotDiameter,
          width: dotDiameter
        }}
      />
      <View
        style={{
          paddingStart: marginPadding / 2
        }}
      >
        {children}
      </View>
    </View>
  );
}

export default function Article({index, item}) {
  const navigation = useNavigation();
  
  const onPress = useCallback(() => {
    navigation.navigate("Article");
  }, []);
  
  const [backgroundColor] = useState(getRandomColor);
  
  const [description] = useState(() => (
    item.description.length > 80 ? `${item.description.substring(0, 80)}...` : item.description
  ));
  
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 40,
        marginHorizontal: marginPadding,
        marginTop: index ? undefined : marginPadding,
        paddingVertical: marginPadding / 2
      }}
    >
      <Row>
        <Text>
          {item.title}
        </Text>
      </Row>
      <Row>
        <Text>
          {item.publishedAt}
        </Text>
      </Row>
      <Row>
        <Text>
          {description}
        </Text>
      </Row>
    </Pressable>
  );
};
