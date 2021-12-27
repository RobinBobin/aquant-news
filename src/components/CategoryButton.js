import React, {
  useCallback,
  useState
} from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import {
  Text
} from "react-native-elements";

export default function CategoryButton({
  addStartMargin,
  name,
  onPress,
  title
}) {
  const onPressInner = useCallback(() => {
    setChecked(previous => {
      const newChecked = !previous;
      
      if (onPress) {
        onPress(newChecked, name);
      }
      
      return newChecked;
    });
  }, [name, onPress]);
  
  const [checked, setChecked] = useState(false);
  
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPressInner}
      style={{
        alignItems: "center",
        backgroundColor: "lightgreen",
        borderRadius: 20,
        borderWidth: StyleSheet.hairlineWidth * (checked ? 2 : 0),
        height: 45,
        justifyContent: "center",
        marginStart: addStartMargin ? 15 : undefined,
        minWidth: 150
      }}
    >
      <Text>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
