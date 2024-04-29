import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Results() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Results",
        }}
      />
      <Text>These are the results!</Text>
    </View>
  );
}
