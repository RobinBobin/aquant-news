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
import CategoryButtons from "../components/CategoryButtons";

export default function Home({navigation}) {
  const onPressCategory = useCallback((isChecked, name) => {
    if (isChecked) {
      checkedCategories.add(name);
    } else {
      checkedCategories.delete(name);
    }
    
    console.log(checkedCategories);
  }, []);
  
  const checkedCategories = useRef(new Set()).current;
  
  const [categories] = useState(() => [
    "entertainment",
    "general",
    "business",
    "health",
    "sport",
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
        placeholder={"search text"}
        renderErrorMessage={false}
      />
      <CategoryButtons
        categories={categories}
        columnCount={2}
        onPress={onPressCategory}
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
