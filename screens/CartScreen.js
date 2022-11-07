import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductSelectId, removeProductSelectId } from "../redux/billSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { useNavigation } from "@react-navigation/native";
import {Dropdown} from 'react-native-element-dropdown'

const CartScreen = () => {
  const dataDropdown = [
    {label:'item 1',value:'1'},
    {label:'item 1',value:'1'},
    {label:'item 1',value:'1'},
    {label:'item 1',value:'1'},
    {label:'item 1',value:'1'},
    {label:'item 1',value:'1'},

  ]
  const CartProduct = useSelector((state) => state.bill?.productCart);
  const bill = useSelector((state) => state.bill?.productSelectId);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handlePOP = () => {
    dispatch(removeProductSelectId());
  };

  const handleBack = () => {
    navigation.goBack()
  }
  // console.log(bill);
  console.log(CartProduct.listProduct);
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className=" flex-1 mb-2">
        <View className="flex-row justify-center relative h-11 border-b border-gray-300">
          <TouchableOpacity onPress={() => handleBack()} className="absolute left-4 top-1">
            <ChevronLeftIcon color="#004666" size={26} />
          </TouchableOpacity>
          <Text className="text-xl">Giỏ hàng</Text>
        </View>
        <ScrollView className="flex-1">
          <View className="justify-between flex-row border-b py-2 border-gray-300">
            <Text className=" px-2 text-xl font-bold ">Danh sách đơn hàng</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
              <Text className=" px-2 text-lg text-blue-900 font-normal">+ Thêm món</Text>
            </TouchableOpacity>
          </View>

            {
              CartProduct.listProduct.map((item,index)=>{
                return <View key={index} className="flex-row justify-between px-2 border-b py-2 border-gray-300">
                <Text className="text-lg font-bold text-sky-800">x1</Text>
                <View className="ml-4 flex-1 pr-3">
                  <Text className="text-lg font-bold">{item.dataProduct.name}</Text>
                 {item.chooseSizeType? <Text >Vừa, Đế giòn xốp</Text>:<></>}
                </View>
                <Text className="text-lg font-bold">29,000 đ</Text>
  
              </View>
              })
            }
            
          <View>

          </View>
        </ScrollView >
        {/* <View className="px-2 justify-between flex-row">
          <Text className="text-lg">Chọn bàn</Text>
          <Dropdown data={dataDropdown} labelField="label" valueField="value"/>
        </View> */}
      </View>

      {/* Bottom thanh toán */}
      <View className="w-full h-44 bg-white">
        <View className="h-20 px-2">
          <View className="flex-row items-center justify-between">
            <Text className="text-base font-normal">Tổng</Text>
            <Text className="text-base font-normal">300,000 đ</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-base font-normal">Giảm thành viên</Text>
            <Text className="text-base font-normal">0 đ</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-base font-normal">Giảm khuyến mãi</Text>
            <Text className="text-base font-normal">0 đ</Text>
          </View>
        </View>
        <View className="h-24 border border-gray-300 rounded-2xl">
          <View className="items-center">
            <View className="flex-row justify-between w-11/12 items-center pb-2 pt-1">
              <Text className="font-normal text-base">Giá đã bao gồm VAT</Text>
              <Text className="font-bold text-base">Thanh toán: 300,000đ</Text>
            </View>
          </View>
          <View className="items-center">
            <TouchableOpacity className="w-11/12 h-12 bg-sky-700 justify-center items-center rounded-md">
              <Text className="text-white text-lg font-semibold">
                Thanh toán
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
