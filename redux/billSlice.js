import {createSlice} from '@reduxjs/toolkit'

const billSlice = createSlice({
    name:'bill',
    initialState:{
        billSelect:{
            nameKH:'',
            numberTable:'',
            priceBill:0,

            products:[],

        },
        
    },
    reducers:{
        addProduct:(state,action)=>{
            state.billSelect.nameKH= action.payload.nameKH
            state.billSelect.products.push(action.payload.product)
        },
        removeProduct:(state,action)=>{
            state.billSelect.products.pop()
        }
    }
})

export const {addProduct,removeProduct}  = billSlice.actions
export default billSlice.reducer