import { View, Text, Image, ImageSourcePropType } from 'react-native';

type IconSymbolProps = {
    icon: ImageSourcePropType;
    color: string;
    name: string;
    focused: boolean;
}

export default function IconSymbol({ icon, color, name, focused }: IconSymbolProps) {
    return (
        <View className='items-center justify-center gap-2 w-[1000%]'>
            <Image 
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className="w-6 h-6"
            />
            <Text 
                className={
                    `${focused ? 'font-psemibold text-[#FFA001]' : 'font-pregular text-[#CDCDE0]'} text-center text-xs`
                }
            >
                {name}
            </Text>
        </View>
    )
}
