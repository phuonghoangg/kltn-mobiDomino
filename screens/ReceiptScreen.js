import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBill } from "../redux/apiRequest";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import ModalOrder from "../components/modalOrder/ModalOrder";
import Modal from 'react-native-modal'

const ReceiptScreen = () => {
  const [visible, setVisible] = useState(false)
  const [item, setItem] = useState()

  const dispatch = useDispatch();
  const bill = useSelector((state) => state.bill.billProduct?.allBill);
  const user = useSelector((state) => state.user.login.currentUser);
  const accessToken = user.accessToken;
  useEffect(() => {
    getAllBill(accessToken, dispatch);
  }, []);

  const handlePress = (item) => {
    setVisible(true)
    setItem(item)
  }
  return (
    <View className="bg-white">
      <ModalOrder visible={visible} setVisible={setVisible} item={item}/>
      <View className="flex-row justify-between px-2">
              <Text>Hóa đơn</Text>
              <Text>Giá</Text>
              <Text>Trạng thái</Text>
           </View>

      {
        bill?.map((item, index) => {
          return <TouchableOpacity className="py-2 px-2" onPress={() => { handlePress(item) }} key={index}>
           <View className="flex-row justify-between">
              <Text className="w-20">HĐ {index + 1}</Text>
              <Text className="w-20">{item.priceBill}</Text>
              <Text className="w-20">{item.status}</Text>

           </View>
          </TouchableOpacity >
        })
      }
    </View>
  );
};

export default ReceiptScreen;
