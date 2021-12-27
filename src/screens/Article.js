import React from "react";
import {
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
  return (
    <View
      style={{
        backgroundColor: homeBackgroundColor,
        flex: 1,
        padding: marginPadding
      }}
    >
      <ScrollView
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
            {route.params.item.description}
          </Text>
        </ArticleRow>
        <ArticleRow>
          <Text>
            {route.params.item.content}
          </Text>
        </ArticleRow>
      </ScrollView>
    </View>
  );
};
