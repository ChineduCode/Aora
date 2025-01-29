import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

type CustomButtonProps = Partial<{
    title: string,
    handlePress: ()=> void,
    containerStyles: string,
    textStyles: string,
    isLoading: boolean
}>

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading
}) => {
    return(
        <TouchableOpacity 
            onPress={handlePress}
            className={`bg-secondary-100 mt-8 min-h-[58px] 
                items-center justify-center rounded-xl w-full 
                ${containerStyles} ${isLoading ? 'opacity-50': ''}`
            }
            disabled={isLoading}
        >  
            { isLoading ? 
                <ActivityIndicator size={'small'} color={"#161622"} />
                :
                <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
                    {title}
                </Text>
            }
        </TouchableOpacity>
    )
}

export default CustomButton;
