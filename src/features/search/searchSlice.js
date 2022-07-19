import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const searchSuggestionsCallAPI = async(name)=>{

    var data = [];

    const APIKey = 'ad9f3fbb812c1f6824629c31dcbcf823';

    const query = `http://api.openweathermap.org/data/2.5/find?q=${name}&appid=${APIKey}`;
    
    await axios.get(query)
    .then(function (response) {
        // handle success
       let array = response.data.list;
       for(var i = 0; i < array.length; i++){
           let obj ={
               name: array[i].name,
               country: array[i].sys.country,
               lat: array[i].coord.lat,
               lon: array[i].coord.lon,
               description: array[i].weather[0].description,
           };
           data.push(obj);
       }
       

    }).catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
    //console.log(data);
    return data;
}


export const getSearchSuggestions = createAsyncThunk(
    "search/getSearchSuggestions",
    async (name, thunkAPI) => {
      const data = await searchSuggestionsCallAPI(name);
   
      return data;
    }
);

export const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        clearSearchResults: (state, action) => { 
            return {};
        },
    },
    extraReducers:{
        [getSearchSuggestions.fulfilled]: (state, action) => {
            
            state.search = action.payload
        }
    },
    
  });

  export const selectSearch = (state) => state.search;

  export const {
    clearSearchResults
 } = searchSlice.actions;
 

  export default searchSlice.reducer;