import {configureStore} from '@reduxjs/toolkit'
import blaReducer from './blaSlice'

export const store =  configureStore({
    reducer:{
        // user: userReducer,
        bla:blaReducer,
    }
})
