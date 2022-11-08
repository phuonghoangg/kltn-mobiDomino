import { createSlice } from "@reduxjs/toolkit";

const billSlice = createSlice({
  name: "bill",
  initialState: {
    productCart: {
        listProduct:[],
        price:0,
    },
    productSelectId:[],
    billProduct: {
      currentBill: null,
      isFetching: false,
      error: false,
      success:false,
    },
  },
  reducers: {
    addProduct: (state, action) => {
      state.productCart.listProduct.push(action.payload.product);
      state.productCart.price = state.productCart.price +  action.payload.price;
    },
    removeProduct: (state, action) => {
      state.productCart.listProduct.splice(action.payload.position,1)
      state.productCart.price = state.productCart.price -action.payload.price
    },
    resetProduct:(state)=>{
      state.productCart.listProduct = []
      state.productCart.price = 0
    },
    addProductSelectId:(state,action)=>{
        state.productSelectId.push(action.payload.product);
    },
    removeProductSelectId: (state,action) => {
        state.productSelectId.splice(action.payload.position,1)
    },
    
    addBillStart:(state)=>{
      state.billProduct.isFetching = true
    },
    addBillSuccess:(state)=>{
      state.billProduct.isFetching = false
      state.billProduct.success = true
    },
    addBillFail:(state)=>{
      state.billProduct.success=false
      state.billProduct.isFetching = false
      state.billProduct.error = true
    }
  },
});

export const { addProduct,resetProduct, removeProduct,addProductSelectId,removeProductSelectId,addBillFail,addBillStart,addBillSuccess } = billSlice.actions;
export default billSlice.reducer;
