import {createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
    name:'bla',
    initialState:{
        name:"asd",
        age:"sadasd"
    },reducers:{
        update:(state,action)=>{
            state.name = action.payload.name
            state.age = action.payload.age
        }
    }
})

export const {update} = userSlice.actions
export default userSlice.reducer
