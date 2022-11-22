import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import {
  CheckCircleIcon,
  CheckIcon,
  XCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import { failBill } from "../../redux/apiRequest";

const OrderDetailModal = ({ visible, setVisible, children, item }) => {
  const user = useSelector((state) => state.user.login?.currentUser);
 
  const dispatch = useDispatch()
  const handlePressFailBill = () => {
    const payload = {
        id:item._id
    }
    failBill(user.accessToken,dispatch,payload)
    setVisible(false)
  };

  const handlePressFail = () => {
    console.log("k co quyen");
  };

  return (
    <Modal transparent visible={visible} animationType={"fade"}>
      <View
        style={{ backgroundColor: "#00000080" }}
        className="flex-1  justify-end items-center bg-slate-400 "
      >
        <View
          style={{ elevation: 20 }}
          className="w-full bg-white py-5 px-3 rounded-lg h-3/5"
        >
          <View className="flex-row justify-between">
            <Text className="text-2xl text-sky-800 font-bold ">
              Chi Tiết Đơn Hàng
            </Text>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}
              className=""
            >
              <XCircleIcon color={"#A0AEC0"} size={30} />
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center border-b border-gray-300">
            <TouchableOpacity
              className="py-2 text-xl font-semibold"
              onPress={
                user.isAdmin || user.role === "cashier"
                  ? () => handlePressFailBill()
                  : () => handlePressFail()
              }
            >
              <Text className="text-xl pr-3">Đền hóa đơn</Text>
            </TouchableOpacity>
            {item?.isActiveBill == true ? (
              <CheckCircleIcon color={"#005028"} size={30} />
            ) : (
              <></>
            )}
          </View>
          <ScrollView>
            <View className="flex-row">
              <Text className="text-xl">Sản phẩm: </Text>
              <View className="">
                {item?.products.map((itemBill, index) => {
                  // console.log(itemBill);
                  return (
                    <Text key={index} className="text-xl">
                      {itemBill.name}
                    </Text>
                  );
                })}
              </View>
            </View>
            <Text className="text-xl">Mô tả chi tiết: {item?.description}</Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default OrderDetailModal;
