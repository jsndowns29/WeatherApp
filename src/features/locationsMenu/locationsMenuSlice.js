import { createSlice } from '@reduxjs/toolkit';

export const locationsMenuSlice = createSlice({
    name: "locationsMenu",
    initialState: [],
    reducers: {
      loadLocations: (state, action) => {
        return action.payload;
      },
      addLocation: (state, action) => { 
        //console.log(action.payload);
        return [...state, action.payload];
      },
      deleteLocation: (state, action) => { 
        //console.log(action.payload);
        return state.filter(location => location.lon !== action.payload.lon && location.lat !== action.payload.lat);
      },

    },
    
  });

  export const selectLocationsMenu = (state) => state.locationsMenu;
  
  export const {
    loadLocations, addLocation, deleteLocation, reindex
 } = locationsMenuSlice.actions;
 
 export default locationsMenuSlice.reducer;