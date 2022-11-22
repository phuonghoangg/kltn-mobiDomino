import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllBillWithUser } from '../redux/apiRequest'
import OrderDetailModal from '../components/orderDetailModal/OrderDetailModal'
import { useState } from 'react'

const OrderPlaced = () => {
    const user = useSelector((state)=>state.user.login.currentUser)
    const allBill = useSelector((state)=>state.bill.billUser?.billSuccess)
    
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState();
    const dispatch = useDispatch()
    useEffect(()=>{
        getAllBillWithUser(user.accessToken,dispatch,user)
    },[visible])

    const handlePress = (item) =>{
      setVisible(true)
      setItem(item);
    }
 
  return (
    <>
      <OrderDetailModal visible={visible} setVisible={setVisible} item={item} />
      <View className="bg-white">
      {/* <ModalOrder visible={visible} setVisible={setVisible} item={item} /> */}
      <View className="flex-row justify-between mx-2 border-b border-gray-300">
        <View>
          <Text className="w-20 text-lg font-bold text-sky-800">Hóa đơn</Text>
        </View>
        <View>
          <Text className="w-20 text-lg font-bold text-sky-800">Tên</Text>
        </View>
        <View className="w-20 items-end">
          <Text className=" text-lg font-bold text-sky-800 ">Giá</Text>
        </View>
        <View>
          <Text className="w-25 text-lg font-bold text-sky-800">
            Trạng thái
          </Text>
        </View>
      </View>
  
      <ScrollView>
      {allBill?.map((item, index) => {
          let nameHD = item._id.slice(20, 24)
          return (
            <TouchableOpacity
              className="py-2 mx-2 border-b border-gray-300"
              onPress={() => {
                handlePress(item);
              }}
              key={index}
            >
              <View className="flex-row justify-between">
                <View>
                  <Text className="w-20 text-base font-normal">
                    HĐ {nameHD}
                  </Text>
                </View>
                <View>
                  <Text className="w-20 text-base font-normal">
                    {item.user.username}
                  </Text>
                </View>
                <View className="w-20  items-end ">
                  <Text className="text-base font-semibold text-red-600 ">
                    {item.priceBill} đ
                  </Text>
                </View>
                <View>
                  {item.status === "DON_MOI" ? (
                    <Text className="w-20 font-semibold text-base text-center text-green-400">
                      chờ xác nhận
                    </Text>
                  ) : item.status === "DON_DA_XAC_NHAN" ? (
                    <Text className="w-20 font-semibold text-base text-center text-yellow-400">
                      Chờ bếp ra món
                    </Text>
                  ) : item.status === "FAIL_BILL" ? (
                    <Text className="w-20 font-semibold text-base text-center text-orange-400">
                      Bill đền
                    </Text>
                  ) : item.status === "HUY_DON" ? (
                    <Text className="w-20 font-semibold text-base text-center text-rose-900">
                      Đơn hủy
                    </Text>
                  )
                    : (
                      <Text className="w-20 font-semibold text-base text-center text-sky-800">
                        Đã ra món
                      </Text>
                    )}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
        </ScrollView>
      
    </View>
    </>
  )
}

export default OrderPlaced