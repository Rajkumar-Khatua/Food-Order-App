import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ResturantCard = ({
    // this is is comming from backend
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    logitutes,
    latitutes
}) => {
    return (
        <TouchableOpacity className="bg-white mr-3 shadow">
            <Image
                source={ {
                    uri: imgUrl,
                } }
                className="h-36 w-64 rounded-sm" />
            <View className="pt-3 pb-4">
                <Text className="font-bold text-lg pt-2">{ title }</Text>
            </View>
            <View className="flex-row items-center space-x-1">
                <Entypo name="star" size={ 22 } opacity={ 0.5 } color={ "red" } />
                <Text className="text-xs text-gray-500"> <Text className="text-green-600">{ rating }</Text> . { genre }</Text>

            </View>
            <View>
            <Ionicons name="md-navigate-circle-outline" size={22} color="grey" opacity={0.4} />
            <Text className="text-xs text-gray-500">Nearby . {address}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default ResturantCard