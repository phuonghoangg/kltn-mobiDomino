import axios from 'axios'
import { loginFail, loginStart, loginSuccess, logOutFail, logOutStart, logOutSuccess } from './userSlice'

const host = 'http://192.168.1.3:9000'

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