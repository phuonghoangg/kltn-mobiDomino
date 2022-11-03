import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Product from '../components/product/Product';
import { ScrollView } from 'react-native';
import MenuCategory from '../components/menuCategory/MenuCategory';
import RestaurantCard from '../components/featuredRow/RestaurantCard';

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
    title: "Pizza Siu Cấp Nhân bla",
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
const MenuScreen = () => {
  const [type,setType] = useState('pizza')
  console.log(type);
  useEffect(()=>{
    console.log('call api');
  },[type])
    return (
        <SafeAreaView className="">
            {/* header */}
            <View className="justify-center items-center bg-white border-b border-gray-300 pb-2">
                <Image
                    style={{ width: 200, height: 45 }}
                    source={{
                        uri: 'https://brademar.com/wp-content/uploads/2022/05/Dominos-Pizza-Logo-PNG-2012-%E2%80%93-Now-2.png',
                    }}
                />
                <MenuCategory setType={setType} />
            </View>

            {/* thay doi */}
            <FlatList
                    className="mt-2 pl-6 mb-28"
                    data={dataProduct}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <RestaurantCard data={item} />}
                ></FlatList>
        </SafeAreaView>
    );
};

export default MenuScreen;
