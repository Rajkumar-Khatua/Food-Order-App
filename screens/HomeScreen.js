import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Image, ScrollView, TextInput } from 'react-native';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';


const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [])

    return (
        <SafeAreaView className='bg-white pt-8'>

            {/* <Text>Hello BABy</Text> */ }
            {/* Header */ }
            <View className='flex-row pb-3 items-center mx-4 '>
                <Image source={ { uri: 'https://cdn.pixabay.com/photo/2017/12/05/20/10/pizza-3000285_960_720.png' } }
                    className='h-9 w-9 p-4 rounded-full'

                />
                <View className="flex-1 ">
                    <Text className='font-bold text-gray-400 text-xs'>Delever Now</Text>
                    <Text className='font-bold text-xl'>Current location
                        <AntDesign name="down" size={ 20 } color="#1FAA59" />

                    </Text>
                </View>
                <SimpleLineIcons name="user" size={ 30 } color="#1FAA59" />
            </View>

            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className='flex-row flex-1 space-x-3 items-center rounded-md bg-gray-200 p-2'>
                    <Ionicons name="search-outline" size={ 20 } color="#1FAA59" />
                    <TextInput placeholder='Search..' keyboardType='defalut' />
                </View>
                <SimpleLineIcons name="equalizer" size={ 20 } color="#1FAA59" />
            </View>

            {/* BODY */ }
            <ScrollView className='bg-gray-100' contentContainerStyle={ {
                paddingBottom: 100,
            } }>
                {/* Categories */ }
                <Categories />
                {/* Featured row */ }
                {/* Featured */ }
                <FeaturedRow
                    id="123"
                    title="Fteatured Category row"
                    description="Lovely food from us!"
                />
                {/* lovely discount */ }
                <FeaturedRow
                    id="1234"
                    title="Fteatured Category row"
                    description="Lovely food from us!"
                />
                {/* speacial offer only for you */ }
                <FeaturedRow
                    id="1235"
                    title="Fteatured Category row"
                    description="Lovely food from us!"
                />
            </ScrollView>
        </SafeAreaView>

    );
}


export default HomeScreen;
