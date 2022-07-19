import React , { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {styles} from '../../../style.js';
import { StyleSheet, Text, View, Pressable, SafeAreaView, Image } from 'react-native';
import { selectSelectedLocation } from './selectedLocationSlice.js';
import { selectLocationsMenu } from '../locationsMenu/locationsMenuSlice.js';
import { useNavigation } from '@react-navigation/native';



export default function SelectedLocation() {
    
    const state = useSelector(selectSelectedLocation);
    const menu = useSelector(selectLocationsMenu);
    const navigation = useNavigation();

    let temp;
    let location;
    let description;
    
    //check if there is a selected location. If none selected, object is empty and causes crash
    if (Object.keys(state).length === 1){
        temp = Math.round(state.selectedLocation.temp) + '\u00B0';
        location = state.selectedLocation.name;
        description = state.selectedLocation.description;
        
    }else{
        location = 'Loading your location';
        temp = '';
    }

    
    
    return (
        <SafeAreaView style={styles.displaySelected} > 
            <Text style={styles.selectedCityText}>{location}</Text>
            
            <Text style={styles.selectedTemperatureText}>{temp}</Text> 
            <Text style={styles.descriptionText}>{description}</Text> 
            <Pressable onPress={()=>navigation.navigate('Search')}>
                <Image style={styles.searchIcon} source={require('../../../assets/searchIcon.png')} /> 
            </Pressable>    
        </SafeAreaView>
    );
}