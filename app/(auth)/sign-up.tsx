import { View, Text, ScrollView, Image, ImageSourcePropType, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import CustomButton from '@/components/ui/CustomButton';
import { Link, router } from 'expo-router';
import { createUser } from "@/lib/appwrite"

export default function SignUp() {
    const [ form, setForm ] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [ focused, setFocused ] = useState<string | null>(null)
    const [ passwordVisible, setPasswordVisible ] = useState<boolean>(false)
    const [ loading, setLoading ] = useState<boolean>(false)

    const handleOnTextChange = (key: keyof typeof form, value: string) => {
        setForm(prevForm => ({
            ...prevForm,
            [key]: value

        }))
    }

    const handleSubmit = async () => {
        if(!form.username || !form.email || !form.password) {
            return Alert.alert('Error', 'Please fill all fields')
        }
        const isValidEmail = (email: string) => {
            return /\S+@\S+\.\S+/.test(email);
        };
        
        if (!isValidEmail(form.email)) {
            console.error("Invalid email format");
            return;
        }

        setLoading(true)
        try {
            const result = await createUser(form);
            router.replace("/home")

        } catch (error) {
            if(error instanceof Error){
                return Alert.alert('Error', error.message)
            }
        } finally {
            setLoading(false)
        }
    }

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
                            className={`h-[58px] w-full border-2 border-[#232533] 
                                bg-black-100 rounded-xl px-4 mt-1  
                                ${focused === 'username' && 'border-secondary'}
                            `}
                        >
                            <TextInput 
                                className="flex-1 text-white font-psemibold font-base"
                                cursorColor="#161622"
                                placeholder='Your unique username'
                                value={form.username}
                                onChangeText={(text) => handleOnTextChange('username', text)}
                                placeholderTextColor="#7B7B8B"
                                onFocus={()=> setFocused('username')}
                                onBlur={()=> setFocused(null)}
                            />
                        </View>
                    </View>
                    <View className='space-y-2 my-4'>
                        <Text className='text-base text-gray-100 font-pmedium'>Email</Text>
                        <View
                            className={`h-[58px] w-full border-2 border-[#232533] 
                                bg-black-100 rounded-xl px-4 mt-1  
                                ${focused === 'email' && 'border-secondary'}
                            `}
                        >
                            <TextInput 
                                className="flex-1 text-white font-psemibold font-base"
                                cursorColor="#161622"
                                placeholder='example@gmail.com'
                                placeholderTextColor="#7B7B8B"
                                value={form.email}
                                onChangeText={(text) => handleOnTextChange('email', text)}
                                textContentType='emailAddress'
                                onFocus={()=> setFocused('email')}
                                onBlur={()=> setFocused(null)}
                            />
                        </View>
                    </View>
                    <View className='space-y-2 my-4'>
                        <Text className='text-base text-gray-100 font-pmedium'>Password</Text>
                        <View
                            className={`h-[58px] w-full border-2 border-[#232533] 
                                bg-black-100 rounded-xl px-4 mt-1  
                                ${focused === 'password' && 'border-secondary'} relative
                            `}
                        >
                            <TextInput 
                                className="flex-1 text-white font-psemibold font-base"
                                cursorColor="#161622"
                                placeholder='JSM@stery134X'
                                placeholderTextColor="#7B7B8B"
                                value={form.password}
                                onChangeText={(text) => handleOnTextChange('password', text)}
                                textContentType='password'
                                secureTextEntry={passwordVisible}
                                onFocus={()=> setFocused('password')}
                                onBlur={()=> setFocused(null)}
                            />

                            { passwordVisible ?
                                <Feather 
                                    name="eye-off" 
                                    size={24} 
                                    color="#7B7B8B" 
                                    className='absolute right-4 top-[25%]'
                                    onPress={()=>setPasswordVisible(false)}
                                />
                                :
                                <Feather 
                                    name='eye' 
                                    size={24} 
                                    color="#7B7B8B" 
                                    className='absolute right-4 top-[25%]'
                                    onPress={()=>setPasswordVisible(true)}
                                />
                            }
                        </View>
                    </View>

                    <CustomButton 
                        title="Sign Up" 
                        handlePress={handleSubmit}
                        isLoading={loading}
                    />

                    <View className='flex-row items-center justify-center gap-2 text-center mt-6'>
                        <Text className='text-lg text-gray-100 font-pregular'>Already have an account?</Text>
                        <Link href={'/(auth)/sign-in'} className='text-lg font-psemibold text-secondary'>Login</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
