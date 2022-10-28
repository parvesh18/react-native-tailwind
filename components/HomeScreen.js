import { View, Text, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const navigation = useNavigation();

  //   use for hiding default header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      {/* Header */}
      <View className="flex-row items-center mx-4 space-x-2 pb-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="w-12 h-12"
        />
        <View>
          <Text className="text-3xl">Deliver Now!</Text>
          <Text>Current Location</Text>
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}
