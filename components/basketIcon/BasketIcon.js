import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = ({data}) => {
    const navigation = useNavigation()
    const addProductToCart = () =>{
        console.log(data);
        
    }
    return (
        <View className=" absolute bottom-0 w-full h-20 z-50 bg-white flex justify-center items-center">
            <View className="bg-sky-700 w-11/12 h-4/6 rounded-lg">
                <TouchableOpacity onPress={()=>addProductToCart()}>
                    <Text className="text-white font-bold text-lg pt-3 text-center">Thêm vào giỏ hàng</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BasketIcon