import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout(){
    return(
        <>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="sign-up"/>
                <Stack.Screen name="sign-in"/>
            </Stack>
            <StatusBar style="auto"/>
        </>
    )
}
