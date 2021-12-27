import { useNavigation } from "@react-navigation/native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
import {
  Image,
  Pressable
} from "react-native";
import {
  Text
} from "react-native-elements";
import ArticleRow from "./ArticleRow";
import NoImage from "./NoImage";
import {
  marginPadding
} from "../styles";
import {
  getRandomColor
} from "../utils";

export default function ArticlePreview({index, item}) {
  const navigation = useNavigation();
  
  const description = useMemo(() => {
    const maxLength = 80;
    
    return (
      <Text>
        {item.description?.length > maxLength ? `${item.description.substring(0, maxLength)}\u2026` : item.description || "<no description>"}
      </Text>
    );
  }, [item.description]);
  
  const publishedAt = useMemo(() => item.publishedAt, [item.publishedAt]);
  
  const [backgroundColor] = useState(getRandomColor);
  const [image, setImage] = useState();
  
  const onPress = useCallback(() => {
    navigation.navigate("Article", {
      backgroundColor,
      image,
      item,
      publishedAt,
    });
  }, [
    backgroundColor,
    image,
    item,
    publishedAt
  ]);
  
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
      <ArticleRow>
        <Text>
          {item.title}
        </Text>
      </ArticleRow>
      <ArticleRow>
        <Text>
          {publishedAt}
        </Text>
      </ArticleRow>
      <ArticleRow>
        {
          item.urlToImage
          ?
            image
          :
            <NoImage />
        }
      </ArticleRow>
      <ArticleRow>
        {description}
      </ArticleRow>
    </Pressable>
  );
};
