import { Stack, router } from "expo-router";
import { View, StyleSheet, Button, Text } from "react-native";

export default function Home() {
  const goToDetailsPage = () => {
    // Do calculations here
    router.push("/details");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          statusBarHidden: true,
          headerShown: false,
        }}
      />
      <Text>
        Welcome to "What If I'd Invested", and investment calculator based on
        hindsight.
      </Text>
      <Text>Please proceed onto the next page at input your values.</Text>
      <Button title="Start" onPress={goToDetailsPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
