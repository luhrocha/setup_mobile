import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import {Feather} from '@expo/vector-icons'
import colors from "tailwindcss/colors";

interface CheckboxProps extends TouchableOpacityProps{
    checked?: boolean;
    title:string
}

export function Checkbox({checked = false, title, ...props}:CheckboxProps){
    return(
        <TouchableOpacity
            activeOpacity={0.7}
            className="flex-row mb-2 items-center"
            {...props}
        >
            {
                checked
                ?
            
                    <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
                        <Feather
                            name="check"
                            size={20}
                            color={colors.white}
                        />
                    </View>
                :
                <View className="w-8 h-8 bg-zinc-900 rounded-lg"></View>
            }

            <Text className="text-white ml-3 font-semibold text-base">{title}</Text>
        </TouchableOpacity>
    )
}