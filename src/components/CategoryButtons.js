import React, {
  useCallback,
  useMemo
} from "react";
import {
  View
} from "react-native";
import CategoryButton from "./CategoryButton";
import {
  marginPadding
} from "../styles";

export default function CategoryButtons({categories, columnCount, onPress}) {
  const ui = useMemo(() => {
    const rows = Array(Math.ceil(categories.length / columnCount));
    let sliceIndex = 0;
    
    for (let rowIndex = 0; rowIndex < rows.length; ++rowIndex) {
      const cats = categories
        .slice(sliceIndex, sliceIndex + columnCount)
        .map((category, categoryIndex) => (
          <CategoryButton
            addStartMargin={categoryIndex % columnCount}
            key={categoryIndex}
            name={category.name}
            onPress={onPress}
            title={category.title}
          />
        ));
      
      sliceIndex += columnCount;
      rows[rowIndex] = (
        <View
          key={rowIndex}
          style={{
            flexDirection: "row",
            marginTop: rowIndex ? marginPadding : undefined
          }}
        >
          {cats}
        </View>
      );
    }
    
    return rows;
  }, [categories, columnCount, onPress]);
  
  return (
    <View
      style={{
        alignSelf: "center",
        marginTop: marginPadding
      }}
    >
      {ui}
    </View>
  );
};
