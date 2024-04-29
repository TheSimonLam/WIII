import { Stack, router } from "expo-router";
import { View, Button } from "react-native";

export default function Details() {
  const handleCalculate = () => {
    // Do calculations here
    router.push("/results");
  };

  return (
    <View>
      <Stack.Screen
        options={{
          title: "Details",
        }}
      />
      <Button title="Calculate" onPress={handleCalculate} />
    </View>
  );
}
