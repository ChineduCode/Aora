import { ScrollView, Text, TouchableOpacity, View, Image, ImageSourcePropType, GestureResponderEvent } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/ui/CustomButton";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useEffect } from "react";

export default function Index() {
  const { state, dispatch } = useGlobalContext();

  if(!state.isLoading && state.isLoggedIn) return <Redirect href={'/home'} />

    return (
      <SafeAreaView className="h-full bg-primary">
        <ScrollView contentContainerStyle={{ height: '100%'}}>
          <View className="w-full h-full justify-center items-center px-8">
            <Image
              source={images.logo as ImageSourcePropType}
              className="h-[35px] w-[115px]"
              resizeMode="contain"
            />
            <Image 
              source={images.cards as ImageSourcePropType}
              className="h-[300px] max-w-[300px] w-full"
              resizeMode="contain"
            />
            <View className="relative mt-5">
              <Text className="text-3xl text-white text-center font-pbold">
                Discover Endless Possibilities with {' '}
                <Text className="text-secondary-200">Aora</Text>
              </Text>
              <Image
                source={images.path as ImageSourcePropType}
                className="absolute w-[100px] h-[15px] -bottom-2 -right-4"
                resizeMode="contain"
              />
            </View>
            <Text className="text-sm text-gray-100 text-center font-pregular mt-6">
              Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
            </Text>
            <CustomButton 
              title="Continue with email"
              handlePress={()=> router.push('/(auth)/sign-up')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}
