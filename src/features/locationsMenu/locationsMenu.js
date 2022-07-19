import React , { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import {styles} from '../../../style.js';
import { useSelector, useDispatch } from 'react-redux';
import { loadLocations, selectLocationsMenu } from './locationsMenuSlice.js';
import locationData from '../../../assets/data.js';
import LocationIcon from '../../components/locationIcon.js';
import * as Location from 'expo-location';


export default function LocationsMenu() {

    //state for phone location
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    //set state to array of location objects
    const state = useSelector(selectLocationsMenu);
    const dispatch = useDispatch();

    //load saved locations data on 1st render
    /*useEffect(()=>{
       dispatch(loadLocations(locationData));
    }, []);*/

    //get user location
    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    let locationSuccess = 0;
    let liveLocation;
    let noAddedLocations = 0;
    if (errorMsg) {
        text = errorMsg;
        locationSuccess = 0;
    } else if (location) {
        //create user location object
        text = JSON.stringify(location);
        liveLocation = {
            id: 'current',
            lat: location.coords.latitude,
            lon: location.coords.longitude,
            name: ''
        }
        locationSuccess = 1;
        //trigger display prop on current location if there are no user added locations
        if(state.length === 0){
            noAddedLocations = 1;
        }
    }

    




    return (
        
        <SafeAreaView style={styles.locationsMenu} > 
            <ScrollView>

                {locationSuccess === 1 ? <LocationIcon key={0} noAddedLocations={noAddedLocations} locationService={1} location = {liveLocation}/> : null}
                

                {state.map((location, index)=>(

                  
                    <LocationIcon key={location.lat + location.lon} index={index} locationService={0} location = {location}/>
                    

                ))}
            </ScrollView>           
        </SafeAreaView>
    );
}