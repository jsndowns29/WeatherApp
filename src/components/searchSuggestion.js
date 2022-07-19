import React , { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {styles} from '../../style.js';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import locationData from '../../assets/data.js';
import { addLocation, selectLocationsMenu} from '../features/locationsMenu/locationsMenuSlice.js';
import { clearSearchResults} from '../features/search/searchSlice.js';
import { useNavigation } from '@react-navigation/native';

export default function searchSuggestion({location}) {


    const dispatch = useDispatch();
    const navigation = useNavigation();
    const state = useSelector(selectLocationsMenu);

    const saveLocation = () => {
        let newLocation = {
            id: state.length, 
            name: location.name, 
            lat: location.lat, 
            lon: location.lon,
        }

        //check if city already added, don't allow duplicates
        let found = 0;
        for(var i = 0; i<state.length; i++){
            if(state[i].lat === newLocation.lat && state[i].lon === newLocation.lon){
                found = 1;
            }
        }
        if(found === 0){
            dispatch(addLocation(newLocation));
        } 

        //clear suggestions and go home
        dispatch(clearSearchResults());
        navigation.navigate('Home');

    };
    
    return (
        <Pressable onPress={saveLocation}>
            <View style={styles.searchResultView}>
                <Text style={styles.searchResultText}>
                    {location.name}, {location.country}
                </Text>
            </View>
        </Pressable>
    );
}
