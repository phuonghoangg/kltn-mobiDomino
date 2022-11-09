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
      allBill: null,
      isFetching: false,
      error: false,
      success:false,
    },
    updateStatusBill: {
      isFetching:false,
      error:false,
      success: false,
    }
  },
  reducers: {
    updateStatusStart:(state)=>{
      state.updateStatusBill.isFetching = true;
    },
    updateStatusSuccess:(state)=>{
      state.updateStatusBill.isFetching = false;
      state.updateStatusBill.success = true;
    },
    updateStatusFail:(state)=>{
      state.updateStatusBill.isFetching = true;
      state.updateStatusBill.error = false;
    },
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
    },
    getAllBillStart:(state)=>{
      state.billProduct.isFetching=true
    },
    getAllBillSuccess:(state,action)=>{
      state.billProduct.isFetching=false
      state.billProduct.allBill = action.payload
    },
    getAllBillFail:(state)=>{
      state.billProduct.error=true
    },

  },
});

export const {updateStatusFail,updateStatusStart,updateStatusSuccess, addProduct,resetProduct, removeProduct,addProductSelectId,removeProductSelectId,addBillFail,addBillStart,addBillSuccess,getAllBillFail,getAllBillStart,getAllBillSuccess } = billSlice.actions;
export default billSlice.reducer;
