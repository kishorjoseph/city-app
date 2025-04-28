import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"



const cityCountUrl = 'http://localhost:8080/api/weather/citycount?cityname='
export const fetchCityCount = createAsyncThunk(
    'city/fetchCount',
    async (cname, {rejectWithValue}) => {
        try {
            const response = await fetch(`${cityCountUrl}${encodeURIComponent(cname)}`);
            const data = await response.json()
            if(!response.ok){
                return rejectWithValue(data.message || 'Failed to fetch city count.!')
            }
            console.log('Data received', data)
            return data
        }catch(error) {
            return rejectWithValue(error.message);
        }
    }
)

const cityCountSlice = createSlice({
    name: 'city',
    initialState :{
        loading: false,
        city: null,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchCityCount.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCityCount.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.city = action.payload
        })
        .addCase(fetchCityCount.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }

})



export default cityCountSlice.reducer