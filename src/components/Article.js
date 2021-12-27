import { useNavigation } from "@react-navigation/native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import {
  Image,
  Pressable,
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
        paddingStart: marginPadding,
        paddingVertical: marginPadding / 5
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
  
  const description = useMemo(() => {
    const maxLength = 80;
    
    return (
      <Text>
        {item.description.length > maxLength ? `${item.description.substring(0, maxLength)}\u2026` : item.description || "<no description>"}
      </Text>
    );
  }, [item.description]);
  
  const [backgroundColor] = useState(getRandomColor);
  const [image, setImage] = useState();
  
  useEffect(() => {
    if (item.urlToImage) {
      Image.getSize(item.urlToImage, (width, height) => {
        setImage(
          <Image
            source={{uri: item.urlToImage}}
            style={{
              height: height / 5,
              width: width / 5
            }}
          />
        );
      });
    }
  }, [item.urlToImage]);
  
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor,
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
        {
          item.urlToImage
          ?
            image
          :
            <Text>
              {"<"}no image{">"}
            </Text>
        }
      </Row>
      <Row>
        {description}
      </Row>
    </Pressable>
  );
};
