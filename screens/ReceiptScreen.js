import { View, Text } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBill } from "../redux/apiRequest";
import { SafeAreaView } from "react-native-safe-area-context";

const ReceiptScreen = () => {
  const dispatch = useDispatch();
  const bill = useSelector((state) => state.bill.billProduct?.allBill);
  const user = useSelector((state) => state.user.login.currentUser);
  const accessToken = user.accessToken;
  useEffect(() => {
    getAllBill(accessToken, dispatch);
  }, []);
  return (
    <View>
        {
            bill?.map((item,index)=>{
                return <View key={index}>
                    <Text>{index+1}</Text>
                </View>
            })
        }
    </View>
  );
};

export default ReceiptScreen;
