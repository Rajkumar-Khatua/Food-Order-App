import { View, Text, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import ResturantCard from './ResturantCard';
const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className='font-bold text-xl'>{ title }</Text>
                <Feather name="arrow-right" size={ 24 } color="#1FAA59" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{ description }</Text>

            <ScrollView horizontal
                contentContainerStyle={ {
                    paddingHorizontal: 15,

                } }
                showsHorizontalScrollIndicator={ false }
                className='pt-4'
            >
                {/* Resturant Card's */ }
                <ResturantCard
                    id={ 33 }
                    imgUrl='https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_960_720.jpg'
                    title='Zomato'
                    rating='5'
                    genre='Chinese'
                    address='kolkata'
                    short_description='Test description'
                    dishes={ [] }
                    logitutes={ 220 }
                    latitutes={ 456 }
                />
                <ResturantCard
                    id={ 33 }
                    imgUrl='https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_960_720.jpg'
                    title='Zomato'
                    rating='5'
                    genre='Chinese'
                    address='kolkata'
                    short_description='Test description'
                    dishes={ [] }
                    logitutes={ 220 }
                    latitutes={ 456 }
                />
                <ResturantCard
                    id={ 33 }
                    imgUrl='https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_960_720.jpg'
                    title='Zomato'
                    rating='5'
                    genre='Chinese'
                    address='kolkata'
                    short_description='Test description'
                    dishes={ [] }
                    logitutes={ 220 }
                    latitutes={ 456 }
                />
                <ResturantCard
                    id={ 33 }
                    imgUrl='https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_960_720.jpg'
                    title='Zomato'
                    rating='5'
                    genre='Chinese'
                    address='kolkata'
                    short_description='Test description'
                    dishes={ [] }
                    logitutes={ 220 }
                    latitutes={ 456 }
                />

            </ScrollView>
        </View>
    )
}
export default FeaturedRow