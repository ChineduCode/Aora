import { View, Text, ImageSourcePropType } from 'react-native';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import IconSymbol from '@/components/ui/IconSymbol';
import icons from '@/constants/icons';

export default function TabsLayout() {
    return (
        <>
            <Tabs 
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarStyle: {
                        backgroundColor: "#161622",
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                        height: 80,
                        paddingTop: 20,
                        width: '90%',
                        alignSelf: 'center',
                        bottom: 20,
                        borderRadius: 999
                    }
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color, focused })=> (
                            <IconSymbol
                                icon={icons.home as ImageSourcePropType}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='bookmark'
                    options={{
                        title: 'Bookmark',
                        tabBarIcon: ({ color, focused })=> (
                            <IconSymbol
                                icon={icons.bookmark as ImageSourcePropType}
                                color={color}
                                name="Bookmark"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='create'
                    options={{
                        title: 'Create',
                        tabBarIcon: ({ color, focused })=> (
                            <IconSymbol
                                icon={icons.plus as ImageSourcePropType}
                                color={color}
                                name="Create"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='profile'
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ color, focused })=> (
                            <IconSymbol
                                icon={icons.profile as ImageSourcePropType}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
            <StatusBar style='auto'/>
        </>
    )
}
