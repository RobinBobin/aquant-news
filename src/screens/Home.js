import React, {
  useCallback,
  useRef,
  useState
} from "react";
import {
  FlatList,
  StyleSheet,
  View
} from "react-native";
import {
  Input
} from "react-native-elements";
import {
  marginPadding
} from "../styles";
import Article from "../components/Article";
import CategoryButtons from "../components/CategoryButtons";

fetch;

function ArticleSeparatorComponent() {
  return (
    <View
      style={{
        height: marginPadding / 2
      }}
    />
  )
}

export default function Home({navigation}) {
  const getArticles = useCallback(async () => {
    try {
      const headers = new Headers();
      headers.append("X-Api-Key", "70d003bfa6874853a0c96a2ec7e39216");
      
      let q = [];
      
      for (const category of checkedCategories) {
        if (searchText.current) {
          q.push(`("${searchText.current}" AND ${category})`);
        } else {
          q.push(category)
        }
      }
      
      if (!q.length && searchText.current) {
        q.push(`"${searchText.current}"`);
      }
      
      q = q.join(" OR ");
      
      const encodedQ = encodeURIComponent(q);
      
      console.log(q);
      
      const result = await (await fetch(
        `https://newsapi.org/v2/everything?pageSize=100&q=${encodedQ}`,
        {
          headers
        }
      )).json();
      
      if (result.status === "error") {
        console.log(result);
        setArticles([]);
      } else {
        console.log(result.articles.length, result.totalResults);
        
        setArticles(result.articles);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  
  const onChangeSearchText = useCallback(value => {
    searchText.current = value;
    
    clearTimeout(searchTextTid.current);
    
    searchTextTid.current = setTimeout(getArticles, 1500);
  }, [getArticles]);
  
  const onPressCategory = useCallback((isChecked, name) => {
    if (isChecked) {
      checkedCategories.add(name);
    } else {
      checkedCategories.delete(name);
    }
    
    getArticles();
  }, [getArticles]);
  
  const renderArticle = useCallback(({item, index}) => (
    <Article
      index={index}
      item={item}
    />
  ), []);
  
  const checkedCategories = useRef(new Set()).current;
  const searchText = useRef();
  const searchTextTid = useRef();
  
  const [articles, setArticles] = useState([]);
  
  const [categories] = useState(() => [
    "entertainment",
    "general",
    "business",
    "health",
    "sports",
    "science",
    "technology"
  ].map(category => ({
    name: category,
    title: category
  })));
  
  return (
    <View
      style={styles.container}
    >
      <Input
        autoCapitalize={"none"}
        onChangeText={onChangeSearchText}
        placeholder={"search text"}
        renderErrorMessage={false}
      />
      <CategoryButtons
        categories={categories}
        columnCount={2}
        onPress={onPressCategory}
      />
      <FlatList
        ItemSeparatorComponent={ArticleSeparatorComponent}
        data={articles}
        renderItem={renderArticle}
        style={{
          backgroundColor: "lightblue",
          marginTop: marginPadding
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "cyan",
    flex: 1,
    padding: marginPadding
  }
});
