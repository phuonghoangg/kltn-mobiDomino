import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { CheckCircleIcon, CheckIcon, XCircleIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux'
import { acceptBill, acceptChefBill, acceptDishout } from '../../redux/apiRequest'
import { useNavigation } from '@react-navigation/native'
const ModalOrder = ({ visible, setVisible, children, item }) => {
    const user = useSelector((state) => state.user.login?.currentUser)
    const accessToken = user.accessToken

    const dispatch = useDispatch()

    const handlePressAcceptBill = () => {
        const payload = {
            id: item._id,
            user: user._id
        }
        acceptBill(accessToken, dispatch, payload)
        setVisible(false)
    }
    const handlePressChefAccept = () => {
        const payload = {
            id: item._id,
            user: user._id
        }
        acceptChefBill(accessToken,dispatch,payload)
        setVisible(false)
    }
    const handlePressDishOut = () => {
        const payload = {
            id:item._id
        }
        acceptDishout(accessToken,dispatch,payload)
        setVisible(false)
    }
    const handlePressFail = () =>{
       console.log("k co quyen");
    }
    // console.log(user.role);
    return (
        <Modal transparent visible={visible} animationType={'fade'}>
            <View style={{ backgroundColor: "#00000080" }} className="flex-1  justify-end items-center bg-slate-400 ">
                <View style={{ elevation: 20 }} className="w-full bg-white py-5 px-3 rounded-lg h-4/5">
                    <View className="justify-between">
                        <View className="flex-row justify-between">
                            <Text className="text-3xl text-sky-800 font-bold">Tùy chỉnh hóa đơn </Text>
                            <TouchableOpacity onPress={() => { setVisible(false) }} className="">
                                <XCircleIcon color={"#A0AEC0"} size={30} />
                            </TouchableOpacity >
                        </View>
                        <View className="flex-row items-center">
                            <TouchableOpacity className="py-2 text-xl font-semibold" onPress={user.isAdmin || user.role ==="cashier" ? ()=>handlePressAcceptBill() :  ()=>handlePressFail()}>
                                <Text className="text-xl pr-3">Xác nhận đơn hàng</Text>
                            </TouchableOpacity>
                            {item?.isActiveBill == true ? <CheckCircleIcon color={"#005028"} size={30} /> : <></>}
                        </View>
                        <View className="flex-row items-center">
                            <TouchableOpacity className="py-2 text-xl font-semibold" onPress={user.role ==="customer" ? () => handlePressChefAccept() : ()=>handlePressFail()}>
                                <Text className="text-xl">Hoàn thành món ăn</Text>
                            </TouchableOpacity>
                            {item?.chefActive ? <CheckCircleIcon color={"#005028"} size={30} /> : <></>}
                        </View>
                        <View className="flex-row items-center" >
                            <TouchableOpacity className="py-2 text-xl font-semibold" onPress={() => handlePressDishOut()}>
                                <Text className="text-xl">Hoàn tất hóa đơn</Text>
                            </TouchableOpacity>
                            {item?.isDishOut == true ? <CheckCircleIcon color={"#005028"} size={30} /> : <></>}

                        </View>
                    </View>
                    <View>
                        <Text className="text-2xl text-sky-800 font-bold">Chi Tiết Đơn Hàng</Text>
                    </View>
                    <ScrollView>
                        <View className="flex-row">
                            <Text className="text-xl">Sản phẩm: </Text>
                            <View className="">
                                {
                                    item?.products.map((itemBill, index) => {
                                        return <Text key={index} className="text-xl">{itemBill.name}</Text>
                                    })
                                }
                            </View>
                        </View>
                        <Text className="text-xl">Chi tiết hóa đơn: {item?.description}</Text>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

export default ModalOrder