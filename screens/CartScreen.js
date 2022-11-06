import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, removeProduct } from '../redux/billSlice'

const CartScreen = () => {
  const bill = useSelector((state)=>state.bill?.billSelect)
  const dispatch = useDispatch()

  const handleClick = () =>{

    const newProducts = {
      nameKH: "aaa",
      product:"newProduct",  
    } 
    dispatch(addProduct(newProducts))
  }
  const handlePOP = () =>{
    dispatch(removeProduct())
   }
  console.log(bill);
  return (
    <View>
      <Text>{bill.nameKH}</Text>
      <TouchableOpacity onPress={()=>handleClick()}>
        <Text>Click push item to array</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlePOP()}>
        <Text>Click pop item to array</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartScreen