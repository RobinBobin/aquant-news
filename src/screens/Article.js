import React, {
  useCallback
} from "react";
import {
  Linking,
  Pressable,
  ScrollView,
  View
} from "react-native";
import {
  Text
} from "react-native-elements";
import ArticleRow from "../components/ArticleRow";
import NoImage from "../components/NoImage";
import {
  homeBackgroundColor,
  marginPadding
} from "../styles";

export default function Article({route}) {
  const onPressContent = useCallback(async () => {
    try {
      if (await Linking.canOpenURL(route.params.item.url)) {
        Linking.openURL(route.params.item.url);
      }
    } catch (error) {
      console.log(error);
    }
  }, [route.params.item.url]);
  
  return (
    <View
      style={{
        backgroundColor: homeBackgroundColor,
        flex: 1,
        padding: marginPadding
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: route.params.backgroundColor,
          borderRadius: 20,
          flex: 1
        }}
      >
        <ArticleRow>
          <Text>
            {route.params.item.title}
          </Text>
        </ArticleRow>
        <ArticleRow>
          <Text>
            {route.params.publishedAt}
          </Text>
        </ArticleRow>
        <ArticleRow>
          <Text>
            {route.params.item.author}
          </Text>
        </ArticleRow>
        <ArticleRow>
          {
            route.params.item.urlToImage
            ?
              route.params.image
            :
              <NoImage />
          }
        </ArticleRow>
        <ArticleRow>
          <Text>
            {route.params.item.description || "<No description>"}
          </Text>
        </ArticleRow>
        <ArticleRow>
          <Pressable
            onPress={onPressContent}
          >
            <Text>
              {route.params.item.content}
            </Text>
          </Pressable>
        </ArticleRow>
      </ScrollView>
    </View>
  );
};
