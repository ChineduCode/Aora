import { View, Text, ScrollView, Image, ImageSourcePropType, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import { useState } from 'react';

export default function SignUp() {
    const [ user, setUser ] = useState({})

    return (
        <SafeAreaView className='min-h-full bg-primary'>
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className='w-full h-full justify-center px-8'>
                    <Image 
                        source={images.logo as ImageSourcePropType}
                        className='h-[35px] w-[115px]'
                        resizeMode='contain'
                    />
                    <Text className='text-white text-2xl font-psemibold mt-12 mb-4'>Sign up</Text>
                    <View className='space-y-2 my-4'>
                        <Text className='text-base text-gray-100 font-pmedium'>Username</Text>
                        <View
                            className='h-[58px] w-full border border-[#232533] bg-black-100 rounded-xl px-4 mt-1 focus:border-secondary-200'
                        >
                            <TextInput 
                                className="flex-1 text-white font-psemibold font-base"
                                cursorColor="#161622"
                                placeholder='Your unique username'
                                placeholderTextColor="#7B7B8B"
                            />
                        </View>
                    </View>
                    <View className='space-y-2 my-4'>
                        <Text className='text-base text-gray-100 font-pmedium'>Email</Text>
                        <View
                            className='h-[58px] w-full border border-[#232533] bg-black-100 rounded-xl px-4 mt-1 focus:border-secondary-200'
                        >
                            <TextInput 
                                className="flex-1 text-white font-psemibold font-base"
                                cursorColor="#161622"
                                placeholder='example@gmail.com'
                                placeholderTextColor="#7B7B8B"
                            />
                        </View>
                    </View>
                    <View className='space-y-2 my-4'>
                        <Text className='text-base text-gray-100 font-pmedium'>Password</Text>
                        <View
                            className='h-[58px] w-full border border-[#232533] bg-black-100 rounded-xl px-4 mt-1 focus:border-secondary-200'
                        >
                            <TextInput 
                                className="flex-1 text-white font-psemibold font-base"
                                cursorColor="#161622"
                                placeholder='JSM@stery134X'
                                placeholderTextColor="#7B7B8B"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
