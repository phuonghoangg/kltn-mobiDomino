import { createSlice } from "@reduxjs/toolkit";

const billSlice = createSlice({
  name: "bill",
  initialState: {
    productCart: {
        listProduct:[],
        price:0,
    },
    productSelectId:["1","2"],
    billProduct: {
      currentBill: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    addProduct: (state, action) => {
      state.productCart.listProduct.push(action.payload.product);
      state.productCart.price = state.productCart.price +  action.payload.price;
    },
    removeProduct: (state, action) => {
      state.productCart.listProduct.pop();
    },
    addProductSelectId:(state,action)=>{
        state.productSelectId.push(action.payload.product);
    },
    removeProductSelectId: (state) => {
        state.productSelectId.pop();
      },
  },
});

export const { addProduct, removeProduct,addProductSelectId,removeProductSelectId } = billSlice.actions;
export default billSlice.reducer;
