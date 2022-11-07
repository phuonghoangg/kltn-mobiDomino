import axios from 'axios'
import { addBillStart, addBillSuccess, resetProduct } from './billSlice'
import { getAllProductFail, getAllProductStart, getAllProductSuccess } from './productSlice'
import { loginFail, loginStart, loginSuccess, logOutFail, logOutStart, logOutSuccess } from './userSlice'

const host = 'http://192.168.1.3:9000'
// const host  = 'http://192.168.100.48:9000'

export const loginUser = async(user,dispatch) =>{
    dispatch(loginStart())
    try {
        const res = await axios.post(`${host}/v1/user/login`,user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFail())
    }
}

export const logoutUser = async(accessToken,user,dispatch)=>{
    dispatch(logOutStart())
    try {
        await axios.post(`${host}/v1/user/logout`,user,{
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(logOutSuccess())
    } catch (error) {
        dispatch(logOutFail())
    }
}

export const getAllProduct = async (dispatch,type) =>{
    dispatch(getAllProductStart())
    try {
        const res = await axios.get(`${host}/v2/product/f/${type}`);
        dispatch(getAllProductSuccess(res.data));
    } catch (error) {
        dispatch(getAllProductFail())
    }
}

export const addBill = async (accessToken,bill,dispatch) =>{
    dispatch(addBillStart())
    try {
        await axios.post(`${host}/v3/bill`,bill,{
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(addBillSuccess())
        dispatch(resetProduct())
    } catch (error) {
        dispatch(addBillFail())
    }
}