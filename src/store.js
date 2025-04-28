import { configureStore } from '@reduxjs/toolkit'
import cityCountReducer from './features/cityCountSlice'
import weatherInfoReducer from './features/weatherSlice'


export const store = configureStore({
    reducer :{
        city: cityCountReducer,
        weather: weatherInfoReducer
    }
})

export default store