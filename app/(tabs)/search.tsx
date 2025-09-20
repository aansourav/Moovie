import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "bottom"]}>
      <Text>Search Component</Text>
    </SafeAreaView>
  );
};

export default Search;
