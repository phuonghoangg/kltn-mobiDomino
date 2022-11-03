import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const AccountScreen = () => {
  return (
    <SafeAreaView className="">
      <View className="justify-center items-center pb-2">
        <Image
          style={{ width: 200, height: 45 }}
          source={{
            uri: 'https://png.pngitem.com/pimgs/s/452-4529695_logo-dominos-pizza-png-transparent-png.png',
          }}
        />
      </View>
      <View>
        <Text className="text-center text-gray-900 py-5 text-3xl font-bold">Thông tin cá nhân 👌</Text>
      </View>
      <TouchableOpacity style={{ elevation: 4, borderRadius: 5 }} className="mb-4 mx-3 bg-white flex justify-center h-16">
        <Text className="pl-4 text-xl ">Xem hóa đơn</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ elevation: 4, borderRadius: 5 }} className="mb-4 mx-3 bg-white flex justify-center h-16">
        <Text className="pl-4 text-xl ">Tài khoản</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ elevation: 4, borderRadius: 5 }} className="mb-4 mx-3 bg-white flex justify-center h-16">
        <Text className="pl-4 text-xl ">Đơn hàng đã đặt</Text>
      </TouchableOpacity>

      <View style={{ elevation: 4, borderRadius: 5 }} className=" flex-row  items-center mb-4 mx-3 bg-white flex justify-between h-16">
        <Text className="pl-4 text-2xl ">Liên hệ với chúng tôi</Text>
        <TouchableOpacity className=" border-2 flex justify-center items-center w-10 h-10 rounded-full">
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity className=" border-2 flex justify-center items-center w-10 h-10 rounded-full">
          <Text> </Text>
        </TouchableOpacity>
        <TouchableOpacity className=" border-2 flex justify-center items-center w-10 h-10 rounded-full">
          <Text> </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ elevation: 4, borderRadius: 5 }} className="mb-4 mx-3 bg-white flex justify-center h-16">
        <Text className="pl-4 text-xl ">Đăng xuất</Text>
      </TouchableOpacity>
          <View className="justify-center items-center">
            <Text>copyright © 2022., VietNam  </Text>
            <Text>Phiên bản: 1.0.0 v1</Text>
          </View>
    </SafeAreaView>
  )
}

export default AccountScreen