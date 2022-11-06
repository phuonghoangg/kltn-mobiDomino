import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductSelectId, removeProductSelectId } from "../redux/billSlice";
import { SafeAreaView } from "react-native-safe-area-context";

const CartScreen = () => {
  const CartProduct = useSelector((state) => state.bill?.productCart);
  const bill = useSelector((state) => state.bill?.productSelectId);

  const dispatch = useDispatch();

  const handlePOP = () => {
    dispatch(removeProductSelectId());
  };
  // console.log(bill);
  // console.log(CartProduct);
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className=" flex-1">
        <View className="flex-row justify-center relative">
          <Text className="absolute left-0 text-xl">btnleft</Text>
          <Text className="text-xl">Giỏ hàng</Text>
        </View>
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
