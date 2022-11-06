import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductSelectId, removeProductSelectId } from "../redux/billSlice";

const CartScreen = () => {
  const bill = useSelector((state) => state.bill?.productSelectId);
  const CartProduct = useSelector((state) => state.bill?.productCart);

  const dispatch = useDispatch();

  const handleClick = () => {
    const newProducts = {
      product: "5",
    };
    dispatch(addProductSelectId(newProducts));
  };

  const handlePOP = () => {
    dispatch(removeProductSelectId());
  };
  // console.log(bill);
  console.log(CartProduct);
  return (
    <View>
      <Text>{bill.nameKH}</Text>
      <TouchableOpacity onPress={() => handleClick()}>
        <Text>Click push item to array</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePOP()}>
        <Text>Click pop item to array</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;
