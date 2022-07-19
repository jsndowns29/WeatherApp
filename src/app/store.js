import { createStore, combineReducers} from 'redux';
import { configureStore }  from '@reduxjs/toolkit';
import locationsMenuReducer from '../features/locationsMenu/locationsMenuSlice.js';
import selectedLocationReducer from '../features/selectedLocation/selectedLocationSlice.js';
import searchReducer from '../features/search/searchSlice.js';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';


var reducers = {
  locationsMenu: locationsMenuReducer,
  selectedLocation: selectedLocationReducer,
  search: searchReducer,
};

var rootReducer = combineReducers(reducers);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['locationsMenu'],
};

// wrap persist API around root reducer and store
const persistedReducer = persistReducer(persistConfig, rootReducer);


export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

