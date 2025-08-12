import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center ">
      <Text className="text-red-600 text-5xl font-bold">Welcome to Moovie</Text>
      <Link href="/onboarding" className="text-blue-500 text-2xl">
        Onboarding
      </Link>
    </View>
  );
}
