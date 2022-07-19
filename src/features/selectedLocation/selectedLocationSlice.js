import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const currentWeatherCallAPI = async(lat, lon, name)=>{

    const data = {};

    const APIKey = 'ad9f3fbb812c1f6824629c31dcbcf823';

    const query = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKey}`;
    
    await axios.get(query)
    .then(function (response) {
        // handle success
        data.temp = response.data.main.temp;
        data.high = response.data.main.temp_max;
        data.low = response.data.main.temp_min;
        data.name = response.data.name;
        data.description = response.data.weather[0].description;

    }).catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

    return data;
}

//get weather data from api
export const getCurrentWeather = createAsyncThunk(
    "selectedLocation/getCurrentWeather",
    async ({lat, lon, name}, thunkAPI) => {
      const data = await currentWeatherCallAPI(lat, lon, name);
   
      return data;
    }
);

export const selectedLocationSlice = createSlice({
    name: "selectedLocation",
    initialState: {},
    reducers: {
        
    },
    extraReducers:{
        [getCurrentWeather.fulfilled]: (state, action) => {
            
            state.selectedLocation = action.payload
          }
    },
    
  });

export const selectSelectedLocation = (state) => state.selectedLocation;
  

export default selectedLocationSlice.reducer;