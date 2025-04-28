import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const weatherApi = 'https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=33bdcde958bc8754d2018c5d21330968';
const weatherurl = 'http://localhost:8080/api/weather';
export const fetchWeatherInfo = createAsyncThunk(
    'weather',
    async (_, { rejectWithValue }) => {
            try{
            const response = await fetch(weatherurl);
            const data = await response.json();
            if(!response.ok) {
                return rejectWithValue(data.message || 'Failed to fetch weather data!')
            }
            return data;
        }catch(error){
            return rejectWithValue(error.message || 'Failed to fetch weather data!') 
        }
    }
)

const weatherSlice = createSlice({
    name: 'weatherInfo',
    initialState : {
        loading: false,
        error: null,
        weatherData: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherInfo.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(fetchWeatherInfo.fulfilled, (state, action) => {
            state.loading = false,
            state.weatherData = action.payload,
            state.error = null
        })
        .addCase(fetchWeatherInfo.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload
        })
    }

})

export default weatherSlice.reducer