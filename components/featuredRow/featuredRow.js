import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import RestaurantCard from './RestaurantCard'
import { useNavigation } from '@react-navigation/native'
const dataProduct = [
  {
    id: 123,
    imgUrl: "https://global-uploads.webflow.com/60af8c708c6f35480d067652/61c7f86d6ed8552af89fe57d_Veggie-mania.jpg",
    title: "Pizza Bánh Xèo Tôm Nhảy",
    rating: 4.5,
    genre: "Japanes",
    address: "123 Main st",
    short_description: "Thổi bùng vị giác cùng sự kết hợp mới lạ đến từ hương vị bánh xèo truyền thống trên nền bánh pizza, hòa quyện xốt Mayonnaise, phô mai Mazzarella và nguyên leieuj Tôm Nhảy cho khẩu vị cũng phải nhún nhảy từ lát bánh đầu tiên",
    ingredient: "Tôm, phô mai, bột mì, gạo, asdd, asdd, ádd",
    long: 20,
    lat: 0,
  },
  {
    id: 123,
    imgUrl: "https://cdn.tgdd.vn/Files/2022/05/17/1433198/cach-lam-pizza-com-doc-dao-la-mieng-tu-nguyen-lieu-co-san-202205171549452121.jpg",
    title: "Pizza bla",
    rating: 4.5,
    genre: "Japanes",
    address: "123 Main st",
    short_description: "this iz short description",
    ingredient: "Tôm, phô mai, bột mì, gạo, asdd, asdd, ádd",
    long: 20,
    lat: 0,
  },
  {
    id: 123,
    imgUrl: "https://cdn.tgdd.vn/2021/09/CookDish/cach-bao-quan-pizza-de-banh-pizza-va-cach-ham-nong-banh-pizza-avt-1200x676.jpg",
    title: "Pizza blo",
    rating: 4.5,
    genre: "Japanes",
    address: "123 Main st",
    short_description: "this iz short description",
    ingredient: "Tôm, phô mai, bột mì, gạo, asdd, asdd, ádd",
    long: 20,
    lat: 0,
  }
]
const FeaturedRow = ({ id, title, description, featureCategory }) => {
    const navigation = useNavigation()
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        {/* <ArrowRightIcon onPress={()=>{navigation.navigate('Menu')}} color="#00CCBB" /> */}
      </View>
      <Text className="text-xs text-gray-500 px-4 font-normal">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
       {
        dataProduct.map((data,index)=>{
         return <RestaurantCard key={index} data={data} />
        })
       }
      </ScrollView>
    </View>
  )
}

export default FeaturedRow