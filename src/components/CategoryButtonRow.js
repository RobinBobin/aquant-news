import React, {
  useMemo
} from "react";
import {
  View
} from "react-native";

export default function CategoryButtonRow({children}) {
  const row = useMemo(() => {
    const result = [];
    
    children.forEach((categoryButton, index) => {
      result.push(categoryButton);
      
      if (index) {
        result.push((
          <View
            style={{
              backgroundColor: "pink",
              width: 50
            }}
          />
        ));
      }
    });
    
    return result;
  }, [children]);
  
  return (
    <View
      style={{
        flexDirection: "row"
      }}
    >
      {ui}
    </View>
  );
};
